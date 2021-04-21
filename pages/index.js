import React, { useState } from 'react';
import { useColorMode, Button, Heading, VStack } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import Container from '../components/Container';

export default function App() {
  const { colorMode } = useColorMode();
  const color = {
    light: 'gray.900',
    dark: 'gray.100',
  };
  return (
    <VStack spacing="30px" w="100%" mt="50">
      <Container>
        <Heading bg="red.500">Here</Heading>
        <Button bg={color[colorMode]}>Button Test</Button>
      </Container>
    </VStack>
  );
}
