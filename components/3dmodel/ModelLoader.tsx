import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);
interface DogContainerProps {
  children?: React.ReactNode;
}

export const ModelContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      m="auto"
      mt={["-20px", "-40px", "-60px"]}
      mb={["-20px", "-40px", "-60px"]}
      w={["90vw", "80vw", "70vw"]}
      h={["90vw", "80vw", "70vw"]}
      maxW={["300px", "500px", "675px"]}
      maxH={["300px", "500px", "700px"]}
      position="relative"
      zIndex="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;