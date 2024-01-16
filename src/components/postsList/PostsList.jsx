import { Box, Divider, Heading, Stack, Text, Card, CardBody } from "@chakra-ui/react"
import { useGetPostsQuery } from "../../store/jsonplaceholder.api"
import { Each } from "../Each"

export const PostsList = () => {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return "Loading...";

  if (isError) return "Error!";

  return (
    <Box p={10}>
      <Heading as="h1" size="lg">
        Posts
      </Heading>
      <Divider />
      <Stack spacing={4}>
        <Each
          of={data}
          render={(item) => (
            <Card>
              <CardBody>
                <Box key={item.id} p={5}>
                  <Heading fontSize="xl">{item.title}</Heading>
                  <Text mt={4}>{item.body}</Text>
                </Box>
              </CardBody>
            </Card>
          )}
        />
      </Stack>
    </Box>
  );
}