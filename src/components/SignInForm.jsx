import { Flex, Heading, Button, Stack, chakra, Box, Avatar, useToast } from "@chakra-ui/react";
import { TextField } from "./fields/TextField";
import { PasswordField } from "./fields/PasswordField";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const SignInForm = () => {
  const {register, handleSubmit } = useForm();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const toast = useToast({position: "top"});
  
  const handleSignIn = ({ username, password }) => {
    if (username !== process.env.REACT_APP_AUTH_USERNAME) {
      toast({ title: "Wrong username", status: "error" })
      return;
    }
    
    if (password !== process.env.REACT_APP_AUTH_PASSWORD) {
      toast({ title: "Wrong password", status: "error" })
      return;
    }

    cookies.set("auth", true);
    navigate("/");
  }

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
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <TextField
                id="username"
                register={register}
                placeholder="Username"
                leftElement={<CFaUserAlt color="gray.300" />}
                validation={{ required: true }}
              />
              <PasswordField
                id="password"
                register={register}
                leftElement={<CFaLock color="gray.300" />}
                validation={{ required: true }}
              />
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
