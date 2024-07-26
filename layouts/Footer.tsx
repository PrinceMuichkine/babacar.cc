import {
  Box,
  Stack,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    m="20px auto"
    width={"100%"}
    maxW="100%"
    p={0}
  >
    <Stack
      direction="row"
      spacing="6"
      align="center"
      justify="space-between" // Align items to the ends
      textAlign="center"
    >
      <Text fontSize="11px" fontWeight={"medium"}>
        &copy; Babacar Diop {new Date().getFullYear()} — {/* Added space before the dash */}
        <Link href="https://github.com/princemuichkine/babacar.cc.git" isExternal>
          This website code is open-source.
        </Link>
      </Text>
      <ButtonGroup variant="default" spacing="0"> {/* Reduced spacing */}
        <IconButton
          as="a"
          href="mailto:bmamour.diop@icloud.com"
          aria-label="Email me"
          icon={<FaEnvelope fontSize="14px" />} // Adjusted size
          borderRadius="0" // Square icon
          background={"none"}
          _hover={{ background: "none" }}
          m={0} // Remove margin
          p={0} // Remove padding
        />
        <IconButton
          as="a"
          href="https://www.x.com/bm_diop"
          aria-label="X/Twitter"
          icon={<FaTwitter fontSize="14px" />} // Adjusted size
          borderRadius="0" // Square icon
          background={"none"}
          _hover={{ background: "none" }}
          m={0} // Remove margin
          p={0} // Remove padding
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/bm_diop"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="14px" />} // Adjusted size
          borderRadius="0" // Square icon
          background={"none"}
          _hover={{ background: "none" }}
          m={0} // Remove margin
          p={0} // Remove padding
        />
        <IconButton
          as={Link}
          borderRadius="0" // Square icon
          background={"none"}
          _hover={{ background: "none" }}
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/princemuichkine"
          isExternal
          icon={<FaGithub fontSize="13px" />}
          m={0} // Remove margin
          p={0} // Remove padding
        />
      </ButtonGroup>
    </Stack>
    <Divider pt={0} w="100%" />
  </Box>
);

export default Footer;