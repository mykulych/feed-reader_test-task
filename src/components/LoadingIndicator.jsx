import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingIndicator = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Spinner size="xl" />
    </Flex>
  );
}