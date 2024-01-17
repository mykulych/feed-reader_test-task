import { Button, Flex, Text } from "@chakra-ui/react";
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
      <Text fontWeight="600">Feed Reader</Text>
      <Flex gap={4}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/news">News</Link>
      </Flex>
      <Button
        type="submit"
        variant="transparent"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
};