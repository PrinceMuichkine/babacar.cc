import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

// Add color prop
const DarkModeSwitch = ({ color }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        color={color} // Use the passed color prop
        variant="ghost"
        _hover={{ background: "none" }}
        _focus={{ background: "none", border: "none" }}
      />
      {colorMode === "dark" ? (
        <style jsx global>{`
          .notion {
            color: var(--chakra-colors-gray-400);
          }
        `}</style>
      ) : (
        <style jsx global>{`
          .notion {
            color: var(--chakra-colors-gray-600);
          }
        `}</style>
      )}
    </>
  );
};

export default DarkModeSwitch;
