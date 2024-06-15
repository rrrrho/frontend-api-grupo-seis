import { Heading, Flex, Box, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Filters } from "./Filters";
import { UsersTable } from "./UsersTable";
import axios from "axios";
import { User } from "../../types/user";
import UserAdminPaginator from "./UserAdminPaginator";

const UserAdmin = () => {
  const [filter, setFilter] = useState<string>("email");
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [orderBy, setOrderBy] = useState<string>("");
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const {
    isOpen: isDeleteOpen,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        params: {
          name: query && filter === "name" ? query : undefined,
          lastname: query && filter === "lastname" ? query : undefined,
          email: query && filter === "email" ? query : undefined,
          sort: orderBy ? orderBy : undefined,
          page: selectedPage,
        },
      });
      if (response.data.content.length === 0) {
        return;
      }

      setUsers(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserStateChange = async (id, state) => {
    try {
      await axios.patch(`http://localhost:8080/api/user/${id}?state=${state}`);
      await fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/${id}`);
      await fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const filterUsers = () => {
    setSelectedPage(0);
    setQuery("");
    fetchUsers();
  };

  const onOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const toggleUserStatus = (id) => {
    users.map((user) => {
      if (user.id === id) {
        console.log("User state changed:", user.state);

        fetchUserStateChange(id, !user.state);
        return { ...user, state: !user.state };
      }
      return user;
    });
  };

  const handleUserDelete = (id) => {
    fetchUserDelete(id);
    onCloseDelete();
    fetchUsers();
  };

  const handleShowAll = () => {
    setQuery("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedPage, orderBy]);

  return (
    <Box px="2rem">
      <Search
        query={query}
        onChangeQuery={setQuery}
        handleShowAll={handleShowAll}
        filterUsers={filterUsers}
      />
      <Heading variant="sectionTitle" mt="3" fontSize="2xl">
        Mostrar resultados por:
      </Heading>
      <Flex alignItems="center" mt="0.5em">
        <Filters onFilter={setFilter} filter={filter} />
        <Select
          placeholder="Ordenar por"
          w="13em"
          ml="1em"
          onChange={onOrderByChange}
          sx={{
            option: {
              backgroundColor: "brand.darkBrown",
            },
          }}
        >
          <option value="id">ID</option>
          <option value="name">Nombre</option>
          <option value="lastname">Apellido</option>
          <option value="dni">DNI</option>
          <option value="phone">Teléfono</option>
          <option value="email">Correo</option>
          <option value="role">Rol</option>
          <option value="state">Estado</option>
        </Select>
      </Flex>
      <UsersTable
        users={users}
        toggleUserStatus={toggleUserStatus}
        handleUserDelete={handleUserDelete}
        isDeleteOpen={isDeleteOpen}
        onOpenDelete={onOpenDelete}
        onCloseDelete={onCloseDelete}
      />
      <UserAdminPaginator
        alignSelf={"alignSelf"}
        m="2rem"
        totalPages={totalPages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </Box>
  );
};

export default UserAdmin;
