import { Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  [key: string]: any;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;