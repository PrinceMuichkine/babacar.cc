import {
  Box,
  Text,
  Link,
  VStack,
  Heading,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Metadata } from "next";
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  // Define the divider color based on the color mode
  const dividerColor = useColorModeValue("gray.400", "gray.600");

  // Define the color for the bold text based on the color mode
  const boldTextColor = useColorModeValue("black", "white");

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      style={{ position: "relative", width: "100%", minHeight: "100vh", overflowY: "auto" }}
    >
      <Box as="section" style={{ position: "relative", zIndex: 10 }}>
        <Heading as="h1" fontSize="2xl" fontWeight="medium">
          work
        </Heading>
        <Box
          height="4px"
          w="60px"
          m="10px 0"
          bottom="-1px"
          display="block"
          backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );"
        ></Box>
        <VStack spacing={6} align="stretch">
          <Text fontSize="md" mt={4} textAlign="justify">
            I've been working as a <Text as="span" fontWeight="bold" color={boldTextColor}>tech and business operator</Text> for the past 4 years. My experience spans multiple industries, where I've gained expertise in business operations, sales & marketing, recruitment, finance, software engineering, and design.
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            <Link href="https://www.telnyx.com" isExternal>
              Telnyx
            </Link>
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            <Text as="span" color={useColorModeValue("white", "white")}>Account Executive</Text>{" "}
            | Amsterdam, Netherlands | 2022 - 2023
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            <Link href="https://www.afridoctor.com" isExternal>
              AfriDoctor
            </Link>
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            <Text as="span" color={useColorModeValue("white", "white")}>Account Manager</Text>{" "}
            | Accra, Ghana | 2022
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            <Link href="https://www.iziwork.com" isExternal>
              iziwork
            </Link>
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            <Text as="span" color={useColorModeValue("white", "white")}>Intern — Partnerships</Text>{" "}
            | Paris, France | 2021
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            <Link href="https://www.pageexecutive.com" isExternal>
              Page Executive
            </Link>
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            <Text as="span" color={useColorModeValue("white", "white")}>Intern — Projects</Text>{" "}
            | Brussels, Belgium | 2020 - 2021
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            <Link href="https://au.int" isExternal>
              African Union
            </Link>
          </Heading>
          <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
            <Text as="span" color={useColorModeValue("white", "white")}>Intern — Infrastructure and Energy</Text>{" "}
            | Addis Ababa, Ethiopia | 2019
          </Text>
          <Divider borderColor={dividerColor} />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            and more...
          </Heading>
          <Text fontSize="md" color={useColorModeValue("black", "whiteAlpha.900")}>
            Other experience includes volunteering in Ghana for <Link href="https://www.undp.org" isExternal>UNDP</Link>, working on <Link href="/#featured-projects">my own products</Link> and other indie projects.
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
}