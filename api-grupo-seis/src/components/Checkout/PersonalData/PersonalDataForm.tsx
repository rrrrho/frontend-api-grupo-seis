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
  Stack,
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
      <Stack gap="1rem">
        <Flex align="center">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">Correo</FormLabel>
            <Input
              variant="brandSecondary"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Teléfono celular</FormLabel>
            <NumberInput variant="brandSecondary">
              <InputGroup variant="brandSecondary">
                <InputLeftAddon>+54</InputLeftAddon>
                <NumberInputField
                  type="number"
                  value={dni}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </NumberInput>
          </FormControl>
        </Flex>
        <Flex direction="row" align="center">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">Nombre</FormLabel>
            <Input
              variant="brandSecondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Apellido</FormLabel>
            <Input
              variant="brandSecondary"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex direction="row" align="center">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">DNI</FormLabel>
            <NumberInput variant="brandSecondary">
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
              variant="brandSecondary"
              sx={{
                option: {
                  backgroundColor: "brand.lightBeige",
                },
              }}
            >
              <option value="masculine">Masculino</option>
              <option value="femenine">Femenino</option>
              <option value="nonBinary">No binario</option>
            </Select>
          </FormControl>
        </Flex>
      </Stack>
    </form>
  );
};
