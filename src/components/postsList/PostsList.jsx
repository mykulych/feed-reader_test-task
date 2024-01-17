import { PostsListItem } from './PostsListItem';
import { Stack } from "@chakra-ui/react"
import { Each } from "../Each"

export const PostsList = ({ items, isLoading, isError, ...props }) => {
  if (isLoading) return "Loading...";

  if (isError) return "Error!";

  return (
    <Stack spacing={4}>
      <Each of={items} render={(item) => <PostsListItem item={item} {...props} />} />
    </Stack>
  );
}