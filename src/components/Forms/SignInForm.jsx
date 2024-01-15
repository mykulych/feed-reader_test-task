import { Flex, Heading, Button, Stack, chakra, Box, Avatar } from "@chakra-ui/react";
import { TextField } from "../Fields/TextField";
import { PasswordField } from "../Fields/PasswordField";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const SignInForm = () => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        gap={6}
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome to Feed Reader</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <TextField leftElement={<CFaUserAlt color="gray.300" />} />
              <PasswordField leftElement={<CFaLock color="gray.300" />} />
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
