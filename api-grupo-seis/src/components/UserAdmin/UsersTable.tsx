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
} from "@chakra-ui/react";
import React from "react";

type UsersTableProps = {
  users: {
    id: number;
    name: string;
    lastName: string;
    email: string;
    creationDate: string;
    role: string;
    isActive: boolean;
  }[];
  toggleUserStatus: (id: number) => void;
  handleUserDelete: (id: number) => void;
};

export const UsersTable = ({
  users,
  toggleUserStatus,
  handleUserDelete,
}: UsersTableProps) => {
  return (
    <TableContainer>
      <Table bg="rgba(115, 144, 114, 0.3)" borderRadius="12" mt="5" size="sm">
        <Thead>
          <Tr>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              NOMBRE
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              APELLIDO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              CORREO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              FECHA DE CREACIÓN
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              ROL
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              ESTADO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="md">
              ELIMINAR
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td textAlign="center">{user.name}</Td>
              <Td textAlign="center">{user.lastName}</Td>
              <Td textAlign="center">{user.email}</Td>
              <Td textAlign="center">{user.creationDate}</Td>
              <Td textAlign="center" id="admin">
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
              <Td textAlign="center">
                <Tooltip>
                  <Switch
                    colorScheme="green"
                    defaultChecked={user.isActive}
                    onChange={() => toggleUserStatus(user.id)}
                  />
                </Tooltip>
              </Td>
              <Td textAlign="center">
                <Button
                  style={{ background: "transparent" }}
                  onClick={() => handleUserDelete(user.id)}
                >
                  ❌
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
