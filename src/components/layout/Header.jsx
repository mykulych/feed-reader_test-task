import { Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const Header = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("auth");
    navigate("/signin");
  };
  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Text fontWeight="600">Feed Reader</Text>
      <Button
        type="submit"
        variant="solid"
        colorScheme="teal"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
};