import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

interface ViewTransition {
  startViewTransition(updateCallback: () => void): void;
}

interface DarkModeSwitchProps extends Omit<IconButtonProps, 'aria-label'> {
  color?: string;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ color, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.documentElement.dataset.theme = colorMode;
  }, [colorMode]);

  const handleSync = () => {
    if (!('startViewTransition' in document)) {
      toggleColorMode();
      return;
    }
    (document as unknown as ViewTransition).startViewTransition(() => {
      toggleColorMode();
    });
  };

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={handleSync}
      variant="ghost"
      color={color || "current"}
      _hover={{ background: "none" }}
      _focus={{ background: "none", border: "none" }}
      {...props}
    />
  );
};

export default DarkModeSwitch;