import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";

type FiltersProps = {
  onFilter: (filter: string) => void;
  filter: string;
};

export const Filters = ({ onFilter, filter }: FiltersProps) => {
  return (
    <>
      <Button
        variant="brandThird"
        m="0.15em"
        isActive={filter === "email" ? true : false}
        onClick={() => onFilter("email")}
        h="40px"
        paddingTop="0"
        paddingBottom="0"
      >
        Correo
      </Button>
      <Button
        variant="brandThird"
        m="0.15em"
        isActive={filter === "name" ? true : false}
        onClick={() => onFilter("name")}
        h="40px"
        paddingTop="0"
        paddingBottom="0"
      >
        Nombre
      </Button>
      <Button
        variant="brandThird"
        m="0.15em"
        isActive={filter === "lastname" ? true : false}
        onClick={() => onFilter("lastname")}
        h="40px"
        paddingTop="0"
        paddingBottom="0"
      >
        Apellido
      </Button>
    </>
  );
};
