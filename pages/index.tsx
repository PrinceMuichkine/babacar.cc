import {
  Heading,
  Box,
  Flex,
  Link,
  SimpleGrid,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Paragraph from "../layouts/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/projects/ProjectCard-2";
import { useEffect, useState } from "react";
import useSWR from "swr";
import ProjectList from "../components/projects/ProjectList";
import { useColorMode } from "@chakra-ui/react";

const url = "https://babacar.cc/";
const title = "Babacar Diop";
const description =
  "Entrepreneur, Business operator, self-taught web developer; passionate about building products and services with code to solve my problems.";

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);
  const { colorMode } = useColorMode(); // Get the current color mode

  useEffect(() => {
    const handleNotationDisplay = () => {
      if (window.innerWidth > 768) setShowNotation(true);
      else setShowNotation(false);
    };

    handleNotationDisplay();
  }, []);

  // Fetcher function for SWR
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/github", fetcher);

  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />

      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "/images/vintagepc.png",
              width: 800,
              height: 420,
              alt: title,
            },
          ],
        }}
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ position: "relative" }} // Add inline style
      >
        <Flex justifyContent="space-around" style={{ position: "relative", zIndex: 10 }}> {/* Add inline style */}
          <Flex flexDir="column">
            <Heading as="h1" p="30px 0" fontSize={["1xl", "2xl"]}>
              Hi there, I&#39;m Babacar 👋🏼
            </Heading>
            <Paragraph
              fontSize={["sm", "md"]}
              lineHeight={2}
              textAlign="justify"
              color={colorMode === "dark" ? "white" : "black"} // Set color based on color mode
            >
              I'm a 24-year-old self-taught web developer currently based in West Africa, where I am volunteering. Passionate about open-source development, I enjoy building projects using JavaScript, Go, and Python. These languages, along with their communities and ecosystems, drive my enthusiasm for coding and continuous learning.
            </Paragraph>
            <Box height="10px" />
            <Paragraph
              fontSize={["sm", "md"]}
              lineHeight={2}
              textAlign="justify"
              color={colorMode === "dark" ? "white" : "black"} // Set color based on color mode
            >
              As an entrepreneur, I thrive on solving problems and exploring new ideas. My previous experience as a business operator in Europe, working for{" "}
              <Link href="https://telnyx.com/" target="_blank">
                Telnyx
              </Link> (start-up, Amsterdam),{" "}
              <Link href="https://iziwork.com/" target="_blank">
                iziwork
              </Link> (start-up, Paris),{" "}
              <Link href="https://afridoctor.com/" target="_blank">
                Afridoctor
              </Link> (start-up, Ghana), and{" "}
              <Link href="https://www.pageexecutive.com/" target="_blank">
                Page Executive
              </Link> (not-a-start-up, Brussels), has given me a diverse skill set.
            </Paragraph>
            <Box height="10px" />
            <Paragraph
              fontSize={["sm", "md"]}
              lineHeight={2}
              textAlign="justify"
              color={colorMode === "dark" ? "white" : "black"} // Set color based on color mode
            >
              When I'm not working on my projects, I love surfing, traveling, volunteering, reading, and engaging in conversations about art, music, history, and philosophy.
              <Box height="10px" /> {/* Use Box for spacing */}
              In my spare time, I enjoy practicing martial arts and boxing, which keep me disciplined and focused.
            </Paragraph>
          </Flex>
        </Flex>

        <Box as="div" m="30px 0"></Box>
        <Box as="section" mb={20}>
          <Box
            as="div"
            m="30px 0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={8}
          >
            <Heading
              letterSpacing="tight"
              mt={8}
              fontSize="2xl"
              as="h2"
              w="100%"
            >
              Featured
            </Heading>
            {/* <ModelViewerMid /> */}
          </Box>

          <SimpleGrid minChildWidth="280px" spacing="30px">
            <ProjectCard
              title="africanledger.com"
              description="The African Ledger is an independent media dedicated to advancing democracy and economic justice."
              repoHref="https://africanledger.com"
              demoHref=""
              languages={[
                { name: "JavaScript", color: "#f7df1e" },
                { name: "Go", color: "#00ADD8" }
              ]}
              starCount={0}
              stargazersUrl={""}
              style={{
                backgroundImage: "url('/images/africanledger.png')", // Corrected path
                backgroundSize: "cover", // Ensure the image covers the entire card
                backgroundPosition: "center", // Center the image
                color: "white" // Ensure text is always white
              }}
            />

            <ProjectCard
              title="lomi."
              description="Your all-in-one payment orchestration platform."
              repoHref="https://lomi.africa"
              demoHref=""
              languages={[
                { name: "JavaScript", color: "#f7df1e" }, // Correct color for JavaScript
                { name: "React", color: "#61dafb" } // Correct color for React
              ]}
              starCount={0}
              stargazersUrl={""}
              style={{
                backgroundImage: "url('/images/icon.png')", // Corrected path
                backgroundSize: "cover", // Ensure the image covers the entire card
                backgroundPosition: "center", // Center the image
                color: "white", // Ensure text is always white
                border: "none" // Remove border
              }}
            />
          </SimpleGrid>
        </Box>

        {/* New Code Section */}
        <Box as="section" mb={20}>
          <Box
            as="div"
            m="30px 0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={8}
          >
            <Heading
              letterSpacing="tight"
              mt={8}
              fontSize="2xl"
              as="h2"
              w="100%"
            >
              Code
            </Heading>
          </Box>

          <Text fontSize="medium" mt={4}>
            Here you can find and search all my projects stored on GitHub, in addition to the ones I build on.
          </Text>

          <Flex flexDir="column" m="30px 0">
            {!data && !error && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
              >
                <Spinner />
              </Box>
            )}
            {error && (
              <Text>Failed to load projects!</Text>
            )}
            {data && <ProjectList />}
          </Flex>
        </Box>
      </motion.div>
    </>
  );
}