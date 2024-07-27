import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/nav/Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
import ModelViewer from "../components/3dmodel/3dModel";
import DarkModeSwitch from "../components/nav/DarkModeSwitch";

export default function Layout({ children }) {
  return (
    <Box as="main">
      <Flex
        direction="column"
        flex="1"
        maxW={{
          xl: "750px",
          "2xl": "750px",
          md: "750px",
          lg: "750px",
        }}
        px={10}
        m="0 auto"
      >
        <Navbar />

        <ModelViewer />
        {children}

        <Footer />
        <Analytics />
      </Flex>
    </Box>
  );
}