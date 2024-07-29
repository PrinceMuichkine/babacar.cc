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
    languages: { name: string; color: string }[]; // Ensure languages is defined here
    starCount: number;
    stargazersUrl: string;
    languageColor?: string;
    language?: string;
    style?: React.CSSProperties;
}

export default function ProjectCard({
    title,
    description,
    repoHref,
    demoHref,
    languageColor,
    language,
    starCount,
    stargazersUrl,
    style,
    languages // Ensure languages is included here
}: ProjectCardProps) {
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

    // Determine text color and background overlay based on title
    const textColor = title === "africanledger.com" ? "white" : "black";
    const buttonColorScheme = title === "africanledger.com" ? "blue" : "blue";
    const bgOverlay = title === "africanledger.com"
        ? isHovered ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'
        : isHovered ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)';

    return (
        <Flex
            flexDir="column"
            _hover={{ transform: 'scale(1.05)', border: `2px solid ${languageColor}` }}
            transition="all .5s ease-in-out"
            boxShadow={boxShadowColor[colorMode]}
            borderRadius={5}
            border="2px solid transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            mt="20px"
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
                transition="opacity .5s ease-in-out"
                opacity={1}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundColor={bgOverlay}
                transition="background-color .5s ease-in-out"
            />
            <Flex
                p={[5, 15, 25]}
                flexDir="column"
                justify="space-between"
                h="100%"
                minHeight="280px"
                opacity={isHovered ? 1 : 0}
                transition="opacity .5s ease-in-out"
                position="relative"
                zIndex={1}
            >
                <Box>
                    <Heading as="h3" size="md" fontWeight="semibold" mb={2} color={textColor}>{title}</Heading>
                    <Box h={1} w="100%" bgColor={textColor} transition="background-color .5s ease-in-out" mb={4} mx="auto" />
                    <Text fontSize="medium" color={textColor} mt={4}>{description}</Text>
                </Box>
                <Flex justify="space-between" mt={2}>
                    <Flex align="center">
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
                    <Flex align="center" mt={2}>
                        {languages.map((lang) => ( // Loop through languages
                            <Box key={lang.name} w={3} h={3} mr={1} borderRadius="50%" bgColor={lang.color} />
                        ))}
                        <Text fontSize="sm" color={textColor} ml={2}>
                            {languages.length > 0 ? languages[languages.length - 1].name : 'No Language'} {/* Display the last language */}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}