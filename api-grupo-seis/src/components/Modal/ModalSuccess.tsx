import { Alert, AlertIcon, AlertTitle, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean,
  onClose: ()=>void,
  title: string
};

const ModalSuccess = ({isOpen, onClose, title}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay  />
        <ModalContent bg={"brand.darkGreen"} color={'brand.lightBeige'}>
          <ModalCloseButton  />
          <ModalBody mt={8} py={10}>
            <Alert
              bg={"brand.darkGreen"}
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="auto"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                {title}
              </AlertTitle>
            </Alert>
          </ModalBody>
        </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;