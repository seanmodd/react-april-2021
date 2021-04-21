import { Button } from '@chakra-ui/button';
import { Flex, Heading, HStack, VStack } from '@chakra-ui/layout';
import React from 'react';

const ExpenseDate = (props) => {
  const month = '';
  const day = '';
  const year = '';

  return (
    <Button p="10" bg="black" _hover={{ bg: 'red.500' }}>
      <HStack>
        <Heading color="white">The date goes here</Heading>
        <Flex className="expense-date__month">{month}</Flex>

        <Flex className="expense-date__year">{year}</Flex>
        <Flex className="expense-date__day">{day}</Flex>
      </HStack>
    </Button>
  );
};

export default ExpenseDate;
