import React, { useState } from 'react';
import { useColorMode, Button, Heading, VStack, Flex } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import Container from '../components/Container';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'black',
    dark: 'white',
  };
  return (
    <VStack spacing="30px" w="100%" mt="50">
      <Heading>Here</Heading>

      <Button
        color={mode('red.100', 'gray.900')}
        bg={mode('gray.700', 'red.300')}
      >
        {`color={mode('gray.100', 'gray.900')}
        bg={mode('gray.700', 'gray.300')}`}
      </Button>
      <Button>NONE OF THAT</Button>
      <Button bg={mode[colorMode]}>{`bg={mode[colorMode]}`}</Button>
      <Flex color={color[colorMode]} onClick={toggleColorMode}>
        Test
      </Flex>
      <Flex>Test More</Flex>
    </VStack>
  );
}
