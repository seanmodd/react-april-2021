import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import {
  ColorModeScript,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />

          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
