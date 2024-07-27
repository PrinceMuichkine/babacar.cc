import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => {
    return {
      body: {
        bg: mode("#white", "#202023")(props),
      },
    };
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', sans-serif`,
    body: `'IBM Plex Sans', sans-serif`,
  },
  styles,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, // This disables the system color mode detection
  },
});

export default theme;
