// import { useColorMode, IconButton } from '@chakra-ui/core';
import { useColorMode, IconButton, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.300',
    dark: 'black',
  };
  return (
    <>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor[colorMode]}
        bg={bgColor[colorMode]}
      >
        {children}
      </IconButton>
    </>
  );
};

export default DarkModeSwitch;
