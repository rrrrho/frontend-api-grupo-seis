import {
  Stack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  InputGroup,
  InputLeftAddon,
  NumberInputField,
  Select,
  Box,
  VStack,
  Heading,
  Button,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import ModalSuccess from "../Modal/ModalSuccess";

const AddProductForm = () => {
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();

  const resetForm = () => {
    setName("");
    setImageUrl("");
    setPrice(0);
    setDiscount(0);
    setStock(0);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    resetForm();
    onOpenSuccess();
  };

  return (
    <Flex w="100%" h="100%" justify={"center"} align={"center"}>
      <Flex
        w="50vw"
        backgroundColor="rgba(78, 110, 82, 0.4)"
        borderRadius="10"
        padding="1em"
        justifyContent="center"
        direction="column"
        gap="0.5rem"
      >
        <Heading variant="sectionTitle" fontSize="4xl" mb="0.5rem">
          Agregar producto
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex flexDir={"column"} gap={5}>
            <Stack gap="1rem">
              <Flex align="center">
                <FormControl isRequired mr="0.5em">
                  <FormLabel mb="0.1em">Nombre del producto</FormLabel>
                  <Input
                    variant="brandSecondary"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mr="0.5em">
                  <FormLabel mb="0.1em">URL de imagen del producto</FormLabel>
                  <Input
                    variant="brandSecondary"
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <Flex direction="row" align="center">
                <FormControl isRequired mr="0.5em" w="49%">
                  <FormLabel mb="0.1em">Precio</FormLabel>
                  <NumberInput
                    value={price}
                    onChange={(value) => setPrice(Number(value))}
                    variant="brandSecondary"
                  >
                    <NumberInputField type="number" />
                  </NumberInput>
                </FormControl>

                <FormControl isRequired mr="0.5em" w="24.2%">
                  <FormLabel mb="0.1em">Descuento</FormLabel>
                  <NumberInput
                    variant="brandSecondary"
                    defaultValue={0}
                    min={0}
                    max={100}
                    value={discount}
                    onChange={(value) => setDiscount(Number(value))}
                  >
                    <NumberInputField type="number" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl isRequired w="24.2%">
                  <FormLabel mb="0.1em">Stock</FormLabel>
                  <NumberInput
                    variant="brandSecondary"
                    defaultValue={0}
                    min={0}
                    max={99}
                    value={stock}
                    onChange={(value) => setStock(Number(value))}
                  >
                    <NumberInputField type="number" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Flex>
            </Stack>
            <Button
              color={"brand.lightBeige"}
              type="submit"
              variant={"brandThird"}
              alignSelf={"center"}
            >
              Agregar producto
            </Button>
            <ModalSuccess
              isOpen={isOpenSuccess}
              onClose={onCloseSuccess}
              title="¡Producto agregado exitosamente!"
            />
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default AddProductForm;
