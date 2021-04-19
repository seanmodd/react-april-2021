import {
  ChakraProvider,
  ColorModeProvider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import { GoogleFonts } from 'next-google-fonts';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Flex w="100vw" h="100vh">
          <div>Hello!</div>
          <Heading fontFamily="Menlo">What's up</Heading>
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
