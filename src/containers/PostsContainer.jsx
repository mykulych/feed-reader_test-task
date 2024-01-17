import { Box, Button, Divider, Flex, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import { PostModal } from "../components/modals/PostModal";
import { useCreatePostMutation, useGetPostsQuery, useRemovePostMutation, useUpdatePostMutation } from "../store/jsonplaceholder.api"
import { ConfirmationModal } from "../components/modals/ConfirmationModal";
import { useRef } from "react";
import { List } from "../components/List";
import { PostItem } from "../components/PostItem";

export const PostsContainer = () => {
  const { data: posts, ...postsState } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [removePost] = useRemovePostMutation();
  const createPostModal = useDisclosure();
  const updatePostModal = useDisclosure();
  const removePostModal = useDisclosure();
  const selectedPost = useRef(null);
  const toast = useToast({ position: "top", colorScheme: "teal" });

  const handlePostCreate = async (data) => {
    try {
      const response = await createPost(data);
      if (response.error) {
        throw response.error
      }
      toast({title: "Post created successfully!", status: "success"})
    } catch(error) {
      toast({title: (error.response && error.response.data) || error.message || JSON.stringify(error), status: "error"})
    } finally {
      createPostModal.onClose();
    }
  }

  const handlePostUpdate = async (data) => {
    try {
      const response = await updatePost({...data, id: selectedPost.current.id});
      if (response.error) {
        throw response.error
      }
      toast({title: "Post updated successfully!", status: "success"})
    } catch(error) {
      toast({title: (error.response && error.response.data) || error.message || JSON.stringify(error), status: "error"})
    } finally {
      selectedPost.current = null;
      updatePostModal.onClose();
    }
  }

  const handleRemovePost = async () => {
    try {
      const response = await removePost(selectedPost.current.id);
      if (response.error) {
        throw response.error
      }
      toast({title: "Post removed successfully!", status: "success"})
    } catch(error) {
      toast({title: (error.response && error.response.data) || error.message || JSON.stringify(error), status: "error"})
    } finally {
      selectedPost.current = null;
      removePostModal.onClose();
    }
  }

  const postItemProps = {
    onEdit: (data) => {
      selectedPost.current = data;
      updatePostModal.onOpen();
    },
    onRemove: (data) => {
      selectedPost.current = data;
      removePostModal.onOpen();
    }
  }

  return (
    <>
      <PostModal {...createPostModal} header="Create new post" onSubmit={handlePostCreate} />
      <PostModal {...updatePostModal} header="Update post" onSubmit={handlePostUpdate} />
      <ConfirmationModal {...removePostModal} text="Are you sure you want to delete this post?" onConfirm={handleRemovePost} />
      <Box p={10}>
        <Flex justifyContent="space-between">
          <Heading as="h1" size="lg">
            Posts
          </Heading>
          <Button colorScheme="teal" onClick={createPostModal.onOpen}>
            Create new post
          </Button>
        </Flex>
        <Divider my={8} />
        <List of={posts} {...postsState} render={(item) => <PostItem item={item} {...postItemProps} />} />
      </Box>
    </>
  );
};