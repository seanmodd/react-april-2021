import {
  useColorMode,
  ChakraProvider,
  ColorModeProvider,
  Flex,
  Button,
} from '@chakra-ui/react';
import '../styles/globals.css';
import { useColorModeValue as mode } from '@chakra-ui/color-mode';
import { jsx, ThemeProvider, useTheme, Global, css } from '@emotion/react';
import preset from '@rebass/preset';
import { GoogleFonts } from 'next-google-fonts';
import customTheme from '../styles/theme';
import Container from '../components/Container';
import DarkModeSwitch from '../components/DarkModeSwitch';

function MyApp({ Component, pageProps, children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'black',
    dark: 'black',
  };
  const iconColor = {
    light: 'black',
    dark: 'black',
  };
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Container>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
        >
          sTest
          <Component {...pageProps} />
          IDK
        </ColorModeProvider>

        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" /> */}
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
