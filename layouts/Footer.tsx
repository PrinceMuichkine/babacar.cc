import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Link,
  Image,
  useColorMode // Import useColorMode
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <Box
      as="footer"
      role="contentinfo"
      borderTop="1px solid"
      borderColor="gray.200"
      mt="10px"
      py="10px"
      width="100%"
      maxW="100%"
    >
      <Stack
        direction={["column", "row"]}
        spacing={["4", "6"]}
        align="center"
        justify="space-between"
        textAlign="center"
      >
        <Text fontSize="11px" fontWeight="medium">
          &copy; Babacar Diop {new Date().getFullYear()} —{" "}
          <Link href="https://github.com/princemuichkine/babacar.cc.git" isExternal>
            This website's code is public.
          </Link>
        </Text>
        <ButtonGroup variant="ghost" spacing="0">
          <IconButton
            as="a"
            href="mailto:bmamour.diop@icloud.com"
            aria-label="Feel free to contact me anytime !"
            icon={<FaEnvelope fontSize="15px" />}
            borderRadius="0"
            background={"none"}
            _hover={{ background: "none" }}
            m={0}
            p={0}
          />
          <IconButton
            as="a"
            href="https://www.x.com/bm_diop"
            aria-label="X/Twitter"
            icon={<FaTwitter fontSize="14px" />}
            borderRadius="0.2"
            background={"none"}
            _hover={{ background: "none" }}
            m={0}
            p={0}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/bmdiop"
            aria-label="Follow me on Linkedin !"
            icon={<FaLinkedin fontSize="14px" />}
            borderRadius="0"
            background={"none"}
            _hover={{ background: "none" }}
            m={0}
            p={0}
          />
          <IconButton
            as={Link}
            borderRadius="0.2"
            background={"none"}
            _hover={{ background: "none" }}
            aria-label="Follow me on Github !"
            rel="noopener"
            href="https://github.com/princemuichkine"
            isExternal
            icon={<FaGithub fontSize="13px" />}
            m={0}
            p={0}
          />
          <IconButton
            as="a"
            href="https://lomi.africa"
            aria-label="lomi. website"
            icon={
              <Image
                src={colorMode === "dark" ? "images/transparent.png" : "images/transparent2.png"}
                alt="lomi."
                boxSize="18.5px"
              />
            }
            borderRadius="0.3"
            background={"none"}
            _hover={{ background: "none" }}
            m={0}
            p={0}
          />
          <IconButton
            as="a"
            href="https://africanledger.com"
            aria-label="The African Ledger"
            icon={
              <Image
                src={colorMode === "dark" ? "images/gold.png" : "images/black.png"}
                alt="The African Ledger"
                boxSize="24.5px"
              />
            }
            borderRadius="0.2"
            background={"none"}
            _hover={{ background: "none" }}
            m={0}
            p={0}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default Footer;