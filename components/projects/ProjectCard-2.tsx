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
} from '@chakra-ui/react'

import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'

interface ProjectCardProps {
    title: string;
    description: string;
    repoHref: string;
    demoHref: string;
    languages: { name: string; color: string }[];
    starCount: number;
    stargazersUrl: string;
    languageColor?: string;
    language?: string;
    style?: React.CSSProperties;
    height?: string | string[];
}


export default function ProjectCard({
    title,
    description,
    repoHref,
    demoHref,
    languageColor,
    starCount,
    stargazersUrl,
    style,
    languages,
    height
}:


    ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.2)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.7)'
    }

    const textColor = title === "africanledger.com" ? "white" : "black";
    const buttonColorScheme = title === "africanledger.com" ? "blue" : "blue";
    const bgOverlay = title === "africanledger.com"
        ? isHovered ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'
        : isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)';

    return (
        <Flex
            flexDir="column"
            _hover={{ transform: 'scale(1.02)', border: `2px solid ${languageColor}` }}
            transition="all .3s ease-in-out"
            boxShadow={boxShadowColor[colorMode]}
            borderRadius={5}
            border="2px solid transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            mt="20px"
            height={["283px", "335px", "283px"]}
            width="100%"
            style={{
                ...style,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundImage={style?.backgroundImage}
                backgroundSize="cover"
                backgroundPosition="center"
                transition="opacity .3s ease-in-out"
                opacity={1}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundColor={bgOverlay}
                transition="background-color .3s ease-in-out"
            />
            <Flex
                p={[3, 4, 5]}
                flexDir="column"
                justify="space-between"
                h="100%"
                w="100%"
                opacity={isHovered ? 1 : 0}
                transition="opacity .3s ease-in-out"
                position="relative"
                zIndex={1}
            >
                <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" mb={2} color={textColor}>{title}</Heading>
                    <Box h={1} w="100%" bgColor={textColor} transition="background-color .3s ease-in-out" mb={2} mx="auto" />
                    <Text fontSize={["sm", "md"]} color={textColor} mt={2}>{description}</Text>
                </Box>
                <Flex justify="space-between" mt={2} flexWrap="wrap">
                    <Flex align="center" mb={[2, 0]}>
                        {stargazersUrl && (
                            <Link href={stargazersUrl.replace("api.", "").replace("repos/", "")} _hover={{ textDecor: 'none' }} isExternal>
                                <Flex>
                                    <Button colorScheme={buttonColorScheme} variant="outline" size="sm">{starCount}</Button>
                                </Flex>
                            </Link>
                        )}

                        {repoHref && (
                            <Link href={repoHref} isExternal>
                                <IconButton
                                    aria-label="Go to repo href"
                                    icon={<ExternalLinkIcon />}
                                    colorScheme={buttonColorScheme}
                                    variant="outline"
                                    size="sm"
                                />
                            </Link>
                        )}
                        {demoHref && (
                            <Link href={demoHref} isExternal>
                                <IconButton
                                    aria-label="Go to demo href"
                                    icon={<ViewIcon />}
                                    colorScheme={buttonColorScheme}
                                    variant="outline"
                                    size="sm"
                                />
                            </Link>
                        )}
                    </Flex>
                    <Flex align="center" mt={[2, 0]}>
                        {languages.map((lang) => (
                            <Box key={lang.name} w={2} h={2} mr={1} borderRadius="50%" bgColor={lang.color} />
                        ))}
                        <Text fontSize="xs" color={textColor} ml={1}>
                            {languages.length > 0 ? languages[languages.length - 1].name : 'No Language'}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}