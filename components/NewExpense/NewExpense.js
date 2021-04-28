import { FormControl } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useColorMode, Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/layout';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <>
      <Box
        borderWidth="5px"
        boxShadow="xl"
        borderRadius="2xl"
        bg={mode[colorMode]}
        p="5"
        _hover={{ bg: 'red.100' }}
      >
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </Box>
    </>
  );
};

export default NewExpense;
