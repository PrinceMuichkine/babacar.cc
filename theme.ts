import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "#202023")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: {
      textUnderlineOffset: "0.2em",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', sans-serif`,
    body: `'IBM Plex Sans', sans-serif`,
  },
  styles,
  components, // Add this line
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, // This disables the system color mode detection
  },
});

export default theme;