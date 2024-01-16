import { Box, Divider, Heading, Stack, Text, Card, CardBody } from "@chakra-ui/react";
import { useGetNewsReleaseQuery } from "../../store/nasa.api";
import { Each } from "../Each";

export const NewsList = () => {
  const { data, isLoading, isError } = useGetNewsReleaseQuery();

  if (isLoading) return "Loading...";

  if (isError) return "Error!";

  return (
    <Box p={10}>
      <Heading as="h1" size="lg">
        NASA Breaking news
      </Heading>
      <Divider />
      <Stack spacing={4}>
        <Each of={data} render={(item) => (
            <Card>
              <CardBody>
                <Box key={item.id} p={5}>
                  <Heading fontSize="xl">{item.title}</Heading>
                  <Text mt={4}>{item.description}</Text>
                </Box>
              </CardBody>
            </Card>
          )}
        />
      </Stack>
    </Box>
  );
};
