import React from 'react';
import { HStack, Heading, VStack, Button, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

const Card = (props) => {
  const classes = `card ${props.className}`;

  return (
    <>
      <Box
        boxShadow="base"
        _hover={{ bg: 'blue.100', borderColor: 'black', borderWidth: '2px' }}
        px="50"
        borderRadius="2xl"
      >
        {props.children}
      </Box>
    </>
  );
};

export default Card;
