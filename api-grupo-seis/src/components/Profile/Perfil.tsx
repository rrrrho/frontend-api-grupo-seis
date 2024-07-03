import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { editUser, getUserByEmail } from "../../services/UserService";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { selectUser, setUser } from "../../context/slices/userSlice";
import { FaEdit } from "react-icons/fa";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { loginUser } from "../../services/LoginService";
import { decodeJwt } from "jose";
import React from "react";
import { Form } from "react-router-dom";

const SeccionPerfil = () => {
  const userSlice = useAppSelector(selectUser);
  const [editing, setEditing] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newField, setNewField] = useState("");
  const [updateIndicator, setUpdateIndicator] = useState(0);
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const setEdit = (field) => {
    setEditing(field);
    onOpen();
  };

  const translateField = (field) => {
    switch (field) {
      case "name":
        return "Nombre";
      case "lastname":
        return "Apellido";
      case "dni":
        return "DNI";
      case "email":
        return "Correo Electronico";
      case "phoneNumber":
        return "Teléfono";
      case "password":
        return "Contraseña";
      default:
        return "";
    }
  };

  const fetchUser = async () => {
    try {
      const response = await getUserByEmail(userSlice.email);
      setName(response.user.name);
      setLastname(response.user.lastname);
      setDni(response.user.dni);
      setEmail(response.user.email);
      setPhoneNumber(response.user.phoneNumber);
    } catch (error) {
      console.error(error);
    }
  };

  const changeEditing = async () => {
    switch (editing) {
      case "name":
        setName(newField);
        break;
      case "lastname":
        setLastname(newField);
        break;
      case "dni":
        setDni(newField);
        break;
      case "email":
        setEmail(newField);
        break;
      case "phoneNumber":
        setPhoneNumber(newField);
        break;
      default:
        break;
    }
    setConfirmedEmail("");
    setConfirmedPassword("");
    setUpdateIndicator((prev) => prev + 1);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (editing === "email" && newField !== confirmedEmail) {
      alert("Los correos no coinciden");
      return;
    }
    if (editing === "password" && newField !== confirmedPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    changeEditing();
    onClose();
  };

  const handleCancel = () => {
    setNewField("");
    setConfirmedEmail("");
    setConfirmedPassword("");
    onClose();
  };

  useEffect(() => {
    const fetchEdit = async () => {
      const user = {
        name,
        lastname,
        dni,
        phoneNumber,
        email,
        password: editing === "password" ? newField : null,
      };
      setNewField("");
      try {
        const response = await editUser(
          Number(localStorage.getItem("userId")),
          user
        );
        if (response.status === 200) {
          const token = response.data.token;
          const claims = decodeJwt(token);
          const user = {
            email: claims.sub as string,
            role: claims.authority as string,
          };
          const userId = response.data.id;
          console.log(response);
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(setUser(user));
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("userId", userId.toString());
        }
      } catch (error) {
        console.error("Failed to edit user:", error);
      }
    };
    if (updateIndicator) {
      fetchEdit();
    }
  }, [updateIndicator, name, lastname, dni, phoneNumber, email]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box p="4" w={"100%"}>
      <Box
        bg="rgba(115, 144, 114, 0.3)"
        w={"25%"}
        margin={"auto"}
        p={"2rem"}
        borderRadius={12}
      >
        <Heading as="h1" size="lg" mb="4" align="center">
          Perfil
        </Heading>
        <VStack align="center" spacing="2">
          <VStack align={"start"}>
            <HStack>
              <Button
                variant="transparent"
                onClick={() => setEdit("name")}
                size={"xs"}
                w={"20px"}
                h={"20px"}
                p={0}
              >
                <FaEdit />
              </Button>
              <Text>
                <strong>Nombre:</strong> {name}
              </Text>
            </HStack>
            <HStack>
              <Button
                variant="transparent"
                onClick={() => setEdit("lastname")}
                size={"xs"}
                w={"20px"}
                h={"20px"}
                p={0}
              >
                <FaEdit />
              </Button>
              <Text>
                <strong>Apellido:</strong> {lastname}
              </Text>
            </HStack>
            <HStack>
              <Button
                variant="transparent"
                onClick={() => setEdit("dni")}
                size={"xs"}
                w={"20px"}
                h={"20px"}
                p={0}
              >
                <FaEdit />
              </Button>
              <Text>
                <strong>DNI:</strong> {dni}
              </Text>
            </HStack>
            <HStack>
              <Button
                variant="transparent"
                onClick={() => setEdit("email")}
                size={"xs"}
                w={"20px"}
                h={"20px"}
                p={0}
              >
                <FaEdit />
              </Button>
              <Text>
                <strong>Correo Electronico:</strong> {email}
              </Text>
            </HStack>
            <HStack>
              <Button
                variant="transparent"
                onClick={() => setEdit("phoneNumber")}
                size={"xs"}
                w={"20px"}
                h={"20px"}
                p={0}
              >
                <FaEdit />
              </Button>
              <Text>
                <strong>Teléfono:</strong> {phoneNumber}
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"brand.lightBeige"}>
          <ModalHeader>Cambiar {translateField(editing)}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={(e) => handleConfirm(e)}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                {editing !== "email" && editing !== "password" ? (
                  <>
                    <FormLabel>{translateField(editing)}</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder={translateField(editing)}
                      variant={"brandSecondary"}
                      value={newField}
                      onChange={(e) => setNewField(e.target.value)}
                    />
                  </>
                ) : editing === "email" ? (
                  <>
                    <FormLabel>{"Correo electronico"}</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder={"Correo electronico"}
                      variant={"brandSecondary"}
                      value={newField}
                      onChange={(e) => setNewField(e.target.value)}
                      type="email"
                    ></Input>
                    <FormLabel mt="4">
                      {"Confirmar correo electronico"}
                    </FormLabel>
                    <Input
                      value={confirmedEmail}
                      onChange={(e) => setConfirmedEmail(e.target.value)}
                      placeholder={"Confirmar correo electronico"}
                      variant={"brandSecondary"}
                      type="email"
                    ></Input>
                  </>
                ) : (
                  <>
                    <FormLabel>{"Contraseña"}</FormLabel>
                    <Input
                      ref={initialRef}
                      placeholder={"Contraseña"}
                      variant={"brandSecondary"}
                      value={newField}
                      onChange={(e) => setNewField(e.target.value)}
                      type="password"
                    ></Input>
                    <FormLabel mt="4">{"Confirmar contraseña"}</FormLabel>
                    <Input
                      value={confirmedPassword}
                      onChange={(e) => setConfirmedPassword(e.target.value)}
                      placeholder={"Confirmar contraseña"}
                      variant={"brandSecondary"}
                      type="password"
                    ></Input>
                  </>
                )}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="brandFifth" mr={3} type="submit">
                Confirmar
              </Button>
              <Button
                onClick={handleCancel}
                bg="brand.lightBrown"
                color={"brand.lightBeige"}
                _hover={{
                  bg: "brand.lightBrown",
                }}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Flex justifyContent="center" width="100%">
        <Button variant="brandThird" mt="4" onClick={() => setEdit("password")}>
          Cambiar contraseña
        </Button>
      </Flex>
    </Box>
  );
};

export default SeccionPerfil;
