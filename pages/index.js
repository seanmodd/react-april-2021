import React, { useState } from 'react';
import { useColorMode, Button, Box, Heading, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Container from '../components/Other/Container';
import ExpenseItem from '../components/ExpenseItem';
import Expenses from '../components/Expenses';
import ExpenseForm from '../components/NewExpense/ExpenseForm';
import NewExpense from '../components/NewExpense/NewExpense';

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log('In index.js');
    console.log(expense);
  };
  return (
    <>
      <VStack>
        <Heading as="u" fontSize="6xl">
          Add New Form Item
        </Heading>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </VStack>
    </>
  );
}
