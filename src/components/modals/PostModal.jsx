import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { TextField } from "../fields/TextField";
import { TextAreaField } from "../fields/TextAreaField";
import { useEffect } from "react";

export const PostModal = ({ isOpen, onClose, onSubmit, defaultValues, header  }) => {
  const { register, setValue, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({})
  }, [isOpen])

  useEffect(() => {
    setValue("title", defaultValues?.title);
    setValue("body", defaultValues?.body);
  }, [defaultValues])
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Stack spacing={4}>
              <TextField
                id="title"
                register={register}
                placeholder="Post title"
                validation={{ required: true }}
              />
              <TextAreaField id="body" register={register} placeholder="Post body" validation={{required: true}} />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}