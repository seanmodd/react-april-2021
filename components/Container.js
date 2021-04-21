import React from 'react';
import { useColorMode, Button, Flex, Box, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  // const bgColor = {
  //   light: '#171717',
  //   dark: 'white',
  // };

  const color = {
    light: 'gray.100',
    dark: 'gray.900',
  };

  // const navHoverBg = {
  //   light: 'gray.100',
  //   dark: 'gray.700',
  // };

  // const StickyNav = styled(Flex)`
  //   position: sticky;
  //   z-index: 10;
  //   top: 0;
  //   backdrop-filter: saturate(180%) blur(20px);
  //   transition: height 0.5s, line-height 0.5s;
  // `;

  return (
    <div>
      {/* <StickyNav
        className="SEANNAV"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        // py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      > */}
      {/* <Box className="SEANBOX">
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              textColor={navHoverBg[!colorMode]}
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </NextLink>
          <NextLink href="/sean" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Sean
            </Button>
          </NextLink>
        </Box> */}

      <DarkModeSwitch />
      {/* </StickyNav> */}
      <VStack
        flexDirection="column"
        // bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {children}
      </VStack>
    </div>
  );
};

export default Container;
