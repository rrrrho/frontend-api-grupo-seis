import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tooltip,
  Switch,
  Button,
  Badge,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useDisclosure,
  Box,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { User } from "../../types/user";

type UsersTableProps = {
  users: User[];
  toggleUserStatus: (id: number) => void;
  handleUserDelete: (id: number) => void;
  isDeleteOpen: boolean;
  onOpenDelete: () => void;
  onCloseDelete: () => void;
};

export const UsersTable = ({
  users,
  toggleUserStatus,
  handleUserDelete,
  isDeleteOpen,
  onOpenDelete,
  onCloseDelete,
}: UsersTableProps) => {
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const [deleteCandidateId, setDeleteCandidateId] = useState<number>(0);
  const [deleteCandidateName, setDeleteCandidateName] = useState<string>("");

  const handleOnOpenDelete = (id, name) => {
    onOpenDelete();
    setDeleteCandidateId(id);
    setDeleteCandidateName(name);
  };

  return (
    <TableContainer>
      <Box
        bg="rgba(115, 144, 114, 0.3)"
        mt="5"
        borderColor={"brand.darkGreen"}
        borderWidth={"0.1rem"}
        borderRadius="12"
        overflow={"hidden"}
      >
        <Table size="sm">
          <Thead>
            <Tr>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                ID
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                NOMBRE
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                APELLIDO
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                DNI
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                TELÉFONO
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                CORREO
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                ROL
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                ESTADO
              </Th>
              <Th
                textAlign="center"
                color="brand.darkGreen"
                fontSize="md"
                borderColor={"brand.darkGreen"}
                padding={3.5}
              >
                ELIMINAR
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.id}
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.name}
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.lastname}
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.dni}
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.phoneNumber}
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  {user.email}
                </Td>
                <Td
                  textAlign="center"
                  borderColor={"brand.darkGreen"}
                  id="admin"
                >
                  <Badge
                    colorScheme={
                      user.role === "BUYER"
                        ? "green"
                        : user.role === "SELLER"
                        ? "blue"
                        : "red"
                    }
                  >
                    {user.role}
                  </Badge>
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  <Tooltip>
                    <Switch
                      colorScheme="green"
                      defaultChecked={user.state}
                      onChange={() => toggleUserStatus(user.id)}
                    />
                  </Tooltip>
                </Td>
                <Td textAlign="center" borderColor={"brand.darkGreen"}>
                  <Button
                    variant="brandPrimary"
                    onClick={() =>
                      handleOnOpenDelete(
                        user.id,
                        user.name + " " + user.lastname
                      )
                    }
                  >
                    <MdDelete />
                  </Button>
                  <AlertDialog
                    isOpen={isDeleteOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onCloseDelete}
                  >
                    <AlertDialogOverlay bg="rgba(0,0,0,0.3)">
                      <AlertDialogContent
                        bgColor="brand.lightGreen"
                        color={"brand.lightBeige"}
                        justifySelf={"center"}
                        alignSelf={"center"}
                      >
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Eliminar usuario
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          ¿Seguro que querés eliminar a {deleteCandidateName}?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button
                            ref={cancelRef}
                            onClick={onCloseDelete}
                            variant="brandFifth"
                          >
                            Cancelar
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => handleUserDelete(deleteCandidateId)}
                            ml={3}
                          >
                            Eliminar
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </TableContainer>
  );
};
