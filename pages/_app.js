import {
  ChakraProvider,
  ColorModeProvider,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import '../styles/globals.css';
import { jsx, ThemeProvider, useTheme, Global, css } from '@emotion/react';
import preset from '@rebass/preset';
import { GoogleFonts } from 'next-google-fonts';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const { colorMode } = useColorMode();
  return (
    <ThemeProvider theme={preset}>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: 'dark',
            useSystemColorMode: true,
          }}
        >
          <Global
            styles={css`
              ::selection {
                background-color: #90cdf4;
                color: #fefefe;
              }
              ::-moz-selection {
                background: #ffb7b7;
                color: #fefefe;
              }
              html {
                min-width: 356px;
                scroll-behavior: smooth;
              }
              #__next {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                background: ${colorMode === 'dark' ? 'light' : '#000000'};
              }
            `}
          />
          <Flex w="100vw" h="100vh">
            <Component {...pageProps} />
          </Flex>
        </ColorModeProvider>
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" /> */}
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
