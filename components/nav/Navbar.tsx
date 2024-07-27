import {
  Flex,
  Stack,
  useColorModeValue,
  Link,
  Container,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuHamburguer from "./Menu";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const color = useColorModeValue("black", "white");

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      color={color}
      fontWeight={active ? "bold" : "normal"}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const color = useColorModeValue("black", "white");

  const menuItems = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/#featured-projects", label: "projects" },
  ];

  return (
    <>
      <Stack
        as="nav"
        spacing={8}
        w="100%"
        px={[4, 4, 4, 4]}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={2}
        css={{ backdropFilter: "blur(10px)" }}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          justifyContent="space-between"
          alignItems="center"
        >
          <MenuHamburguer menuItems={menuItems} color={color} />
          <Flex align="center">
            <Stack
              direction="row"
              display={{ base: "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
              color={color}
            >
              {menuItems.map((item) => (
                <LinkItem key={item.href} href={item.href} path={path} target="_self">
                  {item.label}
                </LinkItem>
              ))}
            </Stack>
          </Flex>
          <DarkModeSwitch color={color} />
        </Container>
      </Stack>

      {/* Spacer to push content below the navbar */}
      <Box height={{ base: "60px", md: "80px" }} />
    </>
  );
};

export default Navbar;