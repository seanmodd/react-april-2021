import React from 'react';
import {
  useColorMode,
  Button,
  Flex,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = {
    light: 'red.1=900',
    dark: 'ebebeb',
  };
  const bgColor = {
    dark: 'gray.900',
    light: 'ebebeb',
  };

  return (
    <>
      <VStack h="100vh" spacing="0">
        <HStack
          flexDirection="row"
          color={color[colorMode]}
          w="100vw"
          bg={bgColor[colorMode]}
          p="10"
        >
          <DarkModeSwitch />
        </HStack>
        <VStack
          w="100vw"
          h="100%"
          color={color[colorMode]}
          bg={bgColor[colorMode]}
        >
          {children}
        </VStack>
      </VStack>
    </>
  );
};

export default Container;
