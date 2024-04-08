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
            {/* TODO: no pude aplicar estos estilos en el theme.js :( */}
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              NOMBRE
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              APELLIDO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              CORREO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              FECHA DE CREACIÓN
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              ROL
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
              ESTADO
            </Th>
            <Th textAlign="center" color="brand.darkGreen" fontSize="1em">
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
                <Button onClick={() => handleUserDelete(user.id)}>❌</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
