import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";

type FiltersProps = {
  onFilter: (filter: string) => void;
  filter: string;
};

export const Filters = ({ onFilter, filter }: FiltersProps) => {
  return (
    <Box>
      <Flex flexDirection="row" alignItems="center" w="full">
        <Button
          variant="thirdStyle"
          m="0.15em"
          isActive={filter === "email" ? true : false}
          onClick={() => onFilter("email")}
        >
          Correo
        </Button>
        <Button
          variant="thirdStyle"
          m="0.15em"
          isActive={filter === "name" ? true : false}
          onClick={() => onFilter("name")}
        >
          Nombre
        </Button>
        <Button
          variant="thirdStyle"
          m="0.15em"
          isActive={filter === "lastName" ? true : false}
          onClick={() => onFilter("lastName")}
        >
          Apellido
        </Button>
      </Flex>
    </Box>
  );
};
