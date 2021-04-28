import { Button } from '@chakra-ui/button';
import {
  Flex,
  useColorMode,
  Heading,
  HStack,
  VStack,
  Box,
} from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import React from 'react';

const ExpenseDate = (props) => {
  const month = '';
  const day = '';
  const year = '';
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      borderWidth="5px"
      boxShadow="xl"
      borderRadius="2xl"
      bg={mode[colorMode]}
      p="5"
      _hover={{ bg: 'red.100' }}
    >
      <HStack>
        <Heading>The date goes here</Heading>
        <Flex className="expense-date__month">{month}</Flex>

        <Flex className="expense-date__year">{year}</Flex>
        <Flex className="expense-date__day">{day}</Flex>
      </HStack>
    </Box>
  );
};

export default ExpenseDate;
