import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Stack } from "@chakra-ui/react"

export const ConfirmationModal = ({ isOpen, onClose, text, onConfirm  }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmation modal</ModalHeader>
        <ModalCloseButton />
          <ModalBody>
            {text}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={onConfirm}>
              Confirm
            </Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  );
}