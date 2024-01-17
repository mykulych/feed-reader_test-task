import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { TextField } from "../fields/TextField";
import { TextAreaField } from "../fields/TextAreaField";

export const PostModal = ({ isOpen, onClose, onSubmit, header  }) => {
  const { register, handleSubmit } = useForm();
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
              />
              <TextAreaField id="body" register={register} placeholder="Post body" />
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