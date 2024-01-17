import { Flex, Text } from "@chakra-ui/react";

export const ErrorMessage = ({ message }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Text color="#000" fontSize="32px">{message}</Text>
    </Flex>
  );
}