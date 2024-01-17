import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
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
      <Heading fontWeight="800" size="md" w="33%">Feed Reader</Heading>
      <Flex gap={4} w="33%" justifyContent="center">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/news">News</Link>
      </Flex>
      <Flex w="33%" justifyContent="flex-end">
        <Button
          type="submit"
          variant="transparent"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>      
    </Flex>
  );
};