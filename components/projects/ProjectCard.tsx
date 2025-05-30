import { useState } from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Box,
    IconButton,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'

interface Language {
    name: string;
    color: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    repoHref: string;
    demoHref: string;
    languages: Language[];
    starCount: number;
    stargazersUrl: string;
    languageColor?: string;
    language?: string;
}

export default function ProjectCard({ title, description, repoHref, demoHref, languageColor, language, starCount, stargazersUrl }: ProjectCardProps) {
    const [opacity, setOpacity] = useState(0)
    const [lineColor, setLineColor] = useState("blue.500")
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.2)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.7)'
    }

    return (
        <Flex
            flexDir="column"
            _hover={{ transform: 'scale(1.05)', border: `2px solid ${languageColor}` }}
            transition="transform .5s ease-in-out, border .5s ease-in-out"
            boxShadow={boxShadowColor[colorMode]}
            borderRadius={5}
            border="2px solid transparent"
            onMouseOver={() => {
                setOpacity(1);
                setLineColor(languageColor || "blue.500");
            }}
            onMouseLeave={() => { setOpacity(0), setLineColor("blue.500") }}
            mt="20px"
            height={["283px", "335px", "283px"]}
            width="100%"
        >
            <Flex p={[5, 15, 25]} flexDir="column" justify="space-between" h="100%" minHeight="280px">
                <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" mb={2}>{title}</Heading>
                    {/* Updated the line style */}
                    <Box
                        h="2px"
                        w="100%"
                        bgColor={useColorModeValue("red.500", "blue.300")}
                        transition="background-color .5s ease-in-out"
                        mt={3}
                        mb={5}
                        mx="auto"
                    />
                    <Text fontSize="medium" color={colorSecondary[colorMode]} mt={4}>{description}</Text> {/* Added margin-top */}
                </Box>
                <Flex justify="space-between" mt={2}>
                    <Flex align="center">
                        {stargazersUrl && (
                            <Link href={stargazersUrl.replace("api.", "").replace("repos/", "")} _hover={{ textDecor: 'none' }} isExternal>
                                <Flex opacity={opacity} transition="opacity .5s ease-in-out">
                                    <Button colorScheme="yellow" variant="default">{starCount}</Button>
                                </Flex>
                            </Link>
                        )}

                        {repoHref && (
                            <Link href={repoHref} isExternal>
                                <IconButton aria-label="Go to repo href" icon={<ExternalLinkIcon />} variant="default" opacity={opacity} transition="opacity .5s ease-in-out" />
                            </Link>
                        )}
                        {demoHref && (
                            <Link href={demoHref} isExternal>
                                <IconButton aria-label="Go to demo href" icon={<ViewIcon />} variant="default" opacity={opacity} transition="opacity .5s ease-in-out" />
                            </Link>
                        )}
                    </Flex>
                    <Flex align="center">
                        <Box w={3} h={3} mr={1} borderRadius="50%" bgColor={languageColor} />
                        <Text fontSize="sm" color={colorSecondary[colorMode]}>{language}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}