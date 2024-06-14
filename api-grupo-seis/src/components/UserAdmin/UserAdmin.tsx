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
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [unfilteredUsers, setUnfilteredUsers] = useState<User[]>([]);
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
          page: selectedPage,
        },
      });
      console.log("Fetched users:", response.data);
      setFilteredUsers(response.data.content);
      setUnfilteredUsers(response.data.content);
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
    filteredUsers.map((user) => {
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
    setFilteredUsers(unfilteredUsers);
    setQuery("");
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedPage]);

  useEffect(() => {
    orderUsers();
  }, [orderBy]);

  return (
    <Box px="2rem">
      <Search
        query={query}
        onChangeQuery={setQuery}
        filterUsers={filterUsers}
        handleShowAll={handleShowAll}
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
