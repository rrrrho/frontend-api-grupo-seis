import { Heading, Flex, Box, Select, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Filters } from "./Filters";
import { UsersTable } from "./UsersTable";
import { User } from "../../types/user";
import UserAdminPaginator from "./UserAdminPaginator";
import {
  changeUserState,
  deleteUser,
  getUsersFiltered,
} from "../../services/UserService";

const UserAdmin = () => {
  const [filter, setFilter] = useState<string>("email");
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [orderBy, setOrderBy] = useState<string>("");
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isSelectedPagePaginator, setIsSelectedPagePaginator] =
    useState<boolean>(false);
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  const {
    isOpen: isDeleteOpen,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const fetchUsers = async () => {
    try {
      const response = await getUsersFiltered({
        query,
        filter,
        orderBy,
        selectedPage,
      });
      if (response.users.length === 0) {
        return;
      }

      setUsers(response.users);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error(error);
    }
    setIsSelectedPagePaginator(false);
  };

  const fetchUserStateChange = async (id, state) => {
    try {
      await changeUserState(id, state);
      await fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserDelete = async (id) => {
    try {
      await deleteUser(id);
      await fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const setSelectedPagePaginator = (page: number) => {
    setSelectedPage(page);
    setIsSelectedPagePaginator(true);
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
    setIsShowAll(true);
  };

  useEffect(() => {
    if (isShowAll) {
      setIsShowAll(false);
    }
    fetchUsers();
  }, [orderBy, isSelectedPagePaginator, isShowAll]);

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
        setSelectedPage={setSelectedPagePaginator}
      />
    </Box>
  );
};

export default UserAdmin;
