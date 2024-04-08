import { Heading, Flex, Box, Select } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Filters } from "./Filters";
import { UsersTable } from "./UsersTable";
import { users } from "./user-admin-data";

const UserAdmin = () => {
  const [filter, setFilter] = useState<string>("email");
  const [query, setQuery] = useState<string>("");
  // TODO: agregar tipo a este useState
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [unfilteredUsers, setUnfilteredUsers] = useState(users);
  const [orderBy, setOrderBy] = useState<string>("");

  useEffect(() => {
    orderUsers();
  }, [orderBy, filteredUsers]);

  const filterUsers = () => {
    const newFilteredUsers = query
      ? unfilteredUsers.filter((user) =>
          user[filter].toLowerCase().includes(query.toLowerCase())
        )
      : filteredUsers;
    setFilteredUsers(newFilteredUsers);
  };

  const orderUsers = () => {
    const orderedUsers = [...filteredUsers].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
    setFilteredUsers(orderedUsers);
  };

  const onOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const toggleUserStatus = (id) => {
    const updatedUsers = filteredUsers.map((user) => {
      if (user.id === id) {
        return { ...user, isActive: !user.isActive };
      }
      return user;
    });
    setFilteredUsers(updatedUsers);
  };

  const handleUserDelete = (id) => {
    const newUnfilteredUsers = unfilteredUsers.filter((user) => user.id !== id);
    const newFilteredUsers = filteredUsers.filter((user) => user.id !== id);
    setFilteredUsers(newFilteredUsers);
    setUnfilteredUsers(newUnfilteredUsers);
  };

  const handleShowAll = () => {
    setFilteredUsers(unfilteredUsers);
    setQuery("");
  };

  return (
    <Box padding="3rem">
      <Heading variant="mainTitle">administración de usuarios!</Heading>
      <Search
        query={query}
        onChangeQuery={setQuery}
        filterUsers={filterUsers}
        handleShowAll={handleShowAll}
      />
      <Heading variant="sectionTitle" mt="3">
        Mostrar resultados por:
      </Heading>
      <Flex align="center">
        <Filters onFilter={setFilter} filter={filter} />
        {/* TODO: ver como hacer esto mejor, me quedo horrible :/ */}
        <Select
          placeholder="Ordenar por"
          w="13em"
          ml="1em"
          onChange={onOrderByChange}
        >
          <option value="name">Nombre</option>
          <option value="lastName">Apellido</option>
          <option value="email">Correo</option>
          <option value="creationDate">Fecha de creación</option>
          <option value="role">Rol</option>
          <option value="state">Estado</option>
        </Select>
      </Flex>
      <UsersTable
        users={filteredUsers}
        toggleUserStatus={toggleUserStatus}
        handleUserDelete={handleUserDelete}
      />
    </Box>
  );
};

export default UserAdmin;
