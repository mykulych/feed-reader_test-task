import { useEffect, useRef, useState, useId } from "react";
import { Box, Button, Divider, Flex, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import { PostModal } from "../components/modals/PostModal";
import { useCreatePostMutation, useGetPostsQuery, useRemovePostMutation, useUpdatePostMutation } from "../store/jsonplaceholder.api"
import { ConfirmationModal } from "../components/modals/ConfirmationModal";
import { List } from "../components/List";
import { PostItem } from "../components/PostItem";
import { getErrorMessage } from "../utils/getErrorMessage.helper";

export const PostsContainer = () => {
  const { data: postsList, ...postsState } = useGetPostsQuery();
  const [posts, setPosts] = useState([])
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [removePost] = useRemovePostMutation();
  const createPostModal = useDisclosure();
  const updatePostModal = useDisclosure();
  const removePostModal = useDisclosure();
  const selectedPost = useRef(null);
  const toast = useToast({ position: "top", colorScheme: "teal" });

  useEffect(() => {
    postsList?.length && setPosts(postsList)
  }, [postsList])

  const handlePostCreate = async (data) => {
    try {
      const response = await createPost(data);
      if (response.error) {
        throw response.error
      }
      const id = Date.now();
      setPosts((prev) => [{...response.data, id}, ...prev])
      toast({title: "Post created successfully!", status: "success"})
    } catch(error) {
      toast({title: getErrorMessage(error), status: "error"})
    } finally {
      createPostModal.onClose();
    }
  }

  const handlePostUpdate = async (data) => {
    try {
      const postId = selectedPost.current.id;
      const response = await updatePost({...data, id: selectedPost.current.id});
      if (response.error) {
        throw response.error;
      }
      setPosts((prev) => prev.map((item) => item.id === postId ? {...item, ...response.data} : item));
      toast({title: "Post updated successfully!", status: "success"});
    } catch(error) {
      toast({title: getErrorMessage(error), status: "error"});
    } finally {
      selectedPost.current = null;
      updatePostModal.onClose();
    }
  }

  const handleRemovePost = async () => {
    try {
      const postId = selectedPost.current.id;
      const response = await removePost(postId);
      if (response.error) {
        throw response.error;
      }
      setPosts((prev) => prev.filter((item) => item.id !== postId));
      toast({title: "Post removed successfully!", status: "success"});
    } catch(error) {
      toast({title: getErrorMessage(error), status: "error"});
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
      <PostModal {...updatePostModal} header="Update post" onSubmit={handlePostUpdate} defaultValues={selectedPost.current} />
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
        <List of={posts} {...postsState} render={(item) => <PostItem key={item.id} item={item} {...postItemProps} />} />
      </Box>
    </>
  );
};