import { Button, ButtonGroup, IconButton } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
} from '@chakra-ui/input';
import { Box, Heading, HStack, VStack } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <FormControl>
          <VStack spacing="10px" justify="center" align="center">
            <HStack>
              <FormLabel fontSize="2xl"> TITLE</FormLabel>
              <Input
                bg="gray.50"
                fontSize="2xl"
                placeholder="Enter Title Here"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </HStack>
            <HStack>
              <InputLeftAddon h="auto" fontSize="2xl" children="$" />
              <input
                type="number"
                min="0.01"
                max="10.00"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </HStack>
            <HStack>
              <input
                type="date"
                min="2021-01-01"
                max="2021-06-15"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </HStack>

            <Button
              type="submit"
              height="auto"
              p="5"
              align="center"
              bg={useColorModeValue[colorMode]}
              justify="center"
              transition="all 0.25s cubic-bezier(.08,.52,.52,1)"
              _hover={{
                bg: '#ebedf0',
                borderWidth: 5,
                borderColor: '#3916ff',
                transform: 'scale(.9)',
                fontSize: 22,
              }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(1.075)',
                borderColor: '#0978ff',
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 1px rgba(88, 144, 255, .75), 0 1px 5px rgba(0, 0, 0, .9)',
              }}
            >
              <Heading>Add Expense?</Heading>
            </Button>
          </VStack>
        </FormControl>
      </form>
    </>
  );
};

export default ExpenseForm;
