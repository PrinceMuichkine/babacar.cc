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
import { motion } from "framer-motion"
import Paragraph from "../layouts/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/projects/ProjectCard-2";
import { useEffect, useState } from "react";
import useSWR from "swr";
import ProjectList from "../components/projects/ProjectList";
import { useColorMode } from "@chakra-ui/react";
import Head from 'next/head';

const url = "https://babacar.cc/";
const title = "Babacar Diop";
const description =
  "Entrepreneur and business operator. I'm passionate about building products and services with code to solve (my) problems.";

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleNotationDisplay = () => {
      if (window.innerWidth > 768) setShowNotation(true);
      else setShowNotation(false);
    };

    handleNotationDisplay();
  }, []);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/github", fetcher);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/sharing.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="K_JJxtrQJWfHvk7iN_vEBb6HL_ZJaVS-7jtH8AyD2oI" />
      </Head>

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
              url: "https://res.cloudinary.com/dzrdlevfn/image/upload/v1722215090/sharing_lt28ax.png",
              width: 450,
              height: 450,
              alt: title,
            },
          ],
          site_name: title,
        }}
        twitter={{
          handle: '@bm_diop',
          site: '@bm_diop',
          cardType: 'summary_large_image',
        }}
      />

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ position: "relative" }}
      >
        <Flex justifyContent="space-around" style={{ position: "relative", zIndex: 10 }}>
          <Flex flexDir="column">
            <Heading as="h1" p="30px 0" fontSize={["1xl", "2xl"]}>
              Hi there, I&#39;m Babacar 👋🏼
            </Heading>
            <Paragraph
              fontSize={["md"]}
              lineHeight={2}
              textAlign="justify"
              color={colorMode === "dark" ? "white" : "black"}
            >
              I'm a 24-year-old self-taught web developer and business professional based in West Africa, where I'm currently volunteering. I build mainly with JavaScript, Go and Python — you can learn more about my work <Link href="/work"><strong>here</strong></Link>.
            </Paragraph>
            <Box height="15px" />
            <Paragraph
              fontSize={["md"]}
              lineHeight={2}
              textAlign="justify"
              color={colorMode === "dark" ? "white" : "black"}
            >
              Off the clock, I surf, travel, read, and discuss art, technology, and business. I also enjoy running, practicing martial arts, and boxing! all of which help me stay disciplined and focused.
            </Paragraph>
          </Flex>
        </Flex>

        <Box as="div" m="30px 0"></Box>
        <Box as="section" mb={20} id="featured-projects">
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
          </Box>

          <SimpleGrid minChildWidth="280px" spacing={["20px", "30px"]} columns={[1, 1, 2]}>
            <ProjectCard
              title="africanledger.com"
              description="The African Ledger is an independent media dedicated to advancing democracy and economic justice."
              repoHref="https://africanledger.com"
              demoHref=""
              languages={[
                { name: "JavaScript", color: "#f7df1e" }
              ]}
              starCount={0}
              stargazersUrl={""}
              style={{
                backgroundImage: "url('/images/africanledger.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />

            <ProjectCard
              title="lomi."
              description="Your all-in-one payment orchestration platform."
              repoHref="https://lomi.africa"
              demoHref=""
              languages={[
                { name: "React", color: "#61dafb" },
                { name: "JavaScript", color: "#f7df1e" }
              ]}
              starCount={0}
              stargazersUrl={""}
              style={{
                backgroundImage: "url('/images/icon.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "none",
              }}
            />
          </SimpleGrid>
        </Box>

        <Box as="section" mb={20} maxWidth="container.xl" mx="auto">
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