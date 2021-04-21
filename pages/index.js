import React, { useState } from 'react';
import { useColorMode, Button, Heading, VStack } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import Container from '../components/Container';

export default function App() {
  const { colorMode } = useColorMode();
  const color = {
    light: 'gray.100',
    dark: 'gray.500',
  };
  return (
    <VStack spacing="30px" w="100%" mt="50">
      <Container>
        <Heading>Here</Heading>
        <Button bg={color[colorMode]}>Button Test</Button>
        <Button>Button Test</Button>
      </Container>
    </VStack>
  );
}
