import { Alert, AlertDescription, AlertIcon, AlertTitle, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  isOpen: boolean,
  onClose: ()=>void,
  title: string
};

const ModalCountdown = ({isOpen, onClose, title}: Props) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
      let timer: number | undefined;
  
      if (isOpen) {
        timer = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
      }
  
      return () => clearInterval(timer);
    }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay  />
        <ModalContent bg={"brand.darkGreen"} color={'brand.lightBeige'}>
          <ModalBody py={10}>
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
              <AlertDescription>{`Redirigiendo en ${countdown} segundos...`}</AlertDescription>
            </Alert>
          </ModalBody>
        </ModalContent>
    </Modal>
  );
};

export default ModalCountdown;