import React from 'react';
import { HStack, Heading, VStack, Button, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

const Card = (props) => {
  const classes = `card ${props.className}`;

  return (
    <>
      <VStack
        boxShadow="dark-lg"
        _hover={{ bg: 'blue.400', borderColor: 'black', borderWidth: '2px' }}
        pt="10"
        className={classes}
      >
        <Heading color="white" fontSize="60px">
          This font is not Karla
        </Heading>

        <HStack px="10">{props.children}</HStack>
      </VStack>
    </>
  );
};

export default Card;
