import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    borderTop="1px solid" // Add a single border at the top
    borderColor="gray.200" // Use a light gray color for the border
    mt="20px" // Add margin top
    py="10px" // Add padding top and bottom
    width="100%"
    maxW="100%"
  >
    <Stack
      direction={["column", "row"]} // Stack vertically on mobile, horizontally on larger screens
      spacing={["4", "6"]} // Adjust spacing for different screen sizes
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
  </Box>
);

export default Footer;