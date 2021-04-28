import { Button } from '@chakra-ui/button';
import {
  Heading,
  useColorMode,
  HStack,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
import NewExpense from './NewExpense/NewExpense';

const ExpenseItem = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const MyBox = (props) => {
    <Box
      borderWidth="5px"
      boxShadow="xl"
      borderRadius="2xl"
      bg={mode[colorMode]}
      p="10"
      _hover={{ bg: 'red.100' }}
    >
      <Heading>{props.children}</Heading>
    </Box>;
  };
  return (
    <>
      <Card>
        <VStack>
          <VStack p="5" className="expense-item__description">
            <Text fontSize="30" fontWeight="400">
              {props.title}
            </Text>
            <Button px="10" size="xl" colorScheme="pink" variant="outline">
              Change Title
            </Button>

            <ExpenseDate date={props.date} />
            {/* <MyBox>{props.amount}</MyBox> */}
            <Box
              borderWidth="5px"
              boxShadow="xl"
              borderRadius="2xl"
              bg={mode[colorMode]}
              p="10"
              _hover={{ bg: 'red.100' }}
            >
              <Heading>${props.amount} or $666</Heading>
            </Box>
          </VStack>
        </VStack>
      </Card>
    </>
  );
};

export default ExpenseItem;
