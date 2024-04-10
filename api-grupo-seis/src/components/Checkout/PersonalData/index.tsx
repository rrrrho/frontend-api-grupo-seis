import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
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
            <NumberInput>
              <NumberInputField
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </NumberInput>
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
          <NumberInput variant="secondary">
            <NumberInputField
              type="number"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </NumberInput>
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
  );
};
