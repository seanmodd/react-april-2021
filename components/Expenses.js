import React, { useState } from 'react';
import { useColorMode, Button, Box, Heading, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import ExpenseItem from './ExpenseItem';
import NewExpense from './NewExpense/NewExpense';
import ExpenseForm from './NewExpense/ExpenseForm';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <VStack w="100vw" spacing="100px">
      <VStack spacing="5px" />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        d
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </VStack>
  );
};

export default Expenses;
