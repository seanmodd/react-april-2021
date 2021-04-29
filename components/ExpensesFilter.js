import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React from 'react';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <VStack bg="green.100" boxShadow="base" borderRadius="15" p="10">
        <Flex h="auto" w="auto">
          <Heading color="blue.400" pr="5">
            Filter by year
          </Heading>
          <Select
            color="red.400"
            h="auto"
            w="auto"
            value={props.selected}
            onChange={dropdownChangeHandler}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </Select>
        </Flex>
      </VStack>
    </div>
  );
};

export default ExpensesFilter;
