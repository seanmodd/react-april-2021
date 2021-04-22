import React, { useState } from 'react';
import { useColorMode, Button, Heading, VStack } from '@chakra-ui/react';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';

import Container from '../components/Container';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const mycolor = {
    light: 'black',
    dark: 'white',
  };

  const textColor = {
    light: 'black',
    dark: 'white',
  };
  return (
    <VStack spacing="30px" w="100%" mt="50">
      <Heading>Here</Heading>
      <Button fontSize="4xl" bg={textColor[mode]}>
        This is: textColor[mode]
      </Button>
      <Button fontSize="4xl" bg={mode[textColor]}>
        This is: mode[textColor]
      </Button>
      <Button fontSize="4xl" bg={mycolor[colorMode]}>
        This is: mycolor[colorMode]
      </Button>
      <Button fontSize="4xl" bg={mycolor[colorMode]}>
        This is: mycolor[colorMode]
      </Button>

      <Button fontSize="4xl" bg={colorMode}>
        This is: colorMode
      </Button>

      <Button
        fontSize="4xl"
        onClick={toggleColorMode}
        bg={mycolor[colorMode]}
        color={textColor[colorMode]}
      >
        This is: colorMode I THINK
      </Button>
      <Button>Button Test</Button>
    </VStack>
  );
}
