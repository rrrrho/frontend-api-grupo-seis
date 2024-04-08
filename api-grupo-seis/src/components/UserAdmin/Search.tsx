import { Button, Input, Flex, FormControl } from "@chakra-ui/react";
import React from "react";

type SearchProps = {
  query: string;
  onChangeQuery: (query: string) => void;
  filterUsers: () => void;
  handleShowAll: () => void;
};

export const Search = ({
  query,
  onChangeQuery,
  filterUsers,
  handleShowAll,
}: SearchProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeQuery("");
    filterUsers();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl mt="5">
          <Input
            placeholder="Buscar"
            width="22em"
            variant="secondary"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
          />
          <Button variant="fourthStyle" type="submit" m="0.5em">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ECE3D0"
                d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
              ></path>
            </svg>
          </Button>
          <Button variant="fourthStyle" onClick={handleShowAll} m="0">
            Mostrar todo
          </Button>
        </FormControl>
      </form>
    </>
  );
};
