import { Button } from '@chakra-ui/button';
import { Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = (props) => (
  <Card className="expense-item">
    <ExpenseDate date={props.date} />
    <VStack p="100" className="expense-item__description">
      <Text fontSize="30" fontWeight="400" color="white">
        {props.title} The Title Goes Here
      </Text>
      <Button _hover={{ bg: 'red.500' }} bg="black" p="10" boxShadow="2xl">
        <Heading textColor="white">${props.amount} or $666</Heading>
      </Button>
    </VStack>
  </Card>
);

export default ExpenseItem;
