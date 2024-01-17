import { Card, CardBody, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NewsItem = ({ item }) => {
  return (
    <Link to={item.link} target="_blank">
      <Card>
        <CardBody>
          <Box key={item.id} p={5}>
            <Heading fontSize="xl">{item.title}</Heading>
            <Text mt={4}>{item.description}</Text>
            <Text mt={4} color="#7E869E">
              {item.pubDate}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};
