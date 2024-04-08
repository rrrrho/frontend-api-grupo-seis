import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const PersonalDataForm = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dni, setDni] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  return (
    <Flex
      maxW="780px"
      backgroundColor="rgba(78, 110, 82, 0.4)"
      borderRadius="10"
      padding="1em"
      justifyContent="center"
      direction="column"
    >
      <HStack>
        <svg
          width="29"
          height="34"
          viewBox="0 0 29 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 32.1028V30.215C1 22.9165 6.91655 17 14.215 17C21.5134 17 27.4299 22.9165 27.4299 30.215V32.1028"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.215 17C18.3854 17 21.7664 13.619 21.7664 9.44859C21.7664 5.27806 18.3854 1.89718 14.215 1.89718C10.0444 1.89718 6.66354 5.27806 6.66354 9.44859C6.66354 13.619 10.0444 17 14.215 17Z"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Heading variant="sectionTitle" fontSize="2em">
          Datos personales
        </Heading>
      </HStack>
      <form>
        <Flex align="center" w="35rem">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">Correo</FormLabel>
            <Input
              variant="secondary"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Teléfono celular</FormLabel>
            <InputGroup variant="secondary">
              <InputLeftAddon>+54</InputLeftAddon>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </FormControl>
        </Flex>
        <Flex direction="row" align="center">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">Nombre</FormLabel>
            <Input
              variant="secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Apellido</FormLabel>
            <Input
              variant="secondary"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex direction="row" align="center">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">DNI</FormLabel>
            <Input
              variant="secondary"
              type="number"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Género</FormLabel>
            <Select
              placeholder="Seleccionar"
              onChange={(e) => setGender(e.target.value)}
              variant="secondary"
            >
              <option value="masculine">Masculino</option>
              <option value="femenine">Femenino</option>
              <option value="nonBinary">No binario</option>
            </Select>
          </FormControl>
        </Flex>
      </form>
    </Flex>
  );
};
