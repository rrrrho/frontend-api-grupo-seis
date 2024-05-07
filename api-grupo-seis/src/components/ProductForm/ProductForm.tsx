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
import { Product } from "../../types/product";

type AddProductFormProps = {
  product: Product;
  setEditingProduct: (id: number) => void;
};

const ProductForm = ({
  product = {
    id: 0,
    name: "",
    image: "",
    price: 0,
    discount: 0,
    stock: 0,
    rating: 0,
    voters: 0,
    quota: 0,
    bestseller: false,
  },
  setEditingProduct,
}: AddProductFormProps) => {
  const [name, setName] = useState<string>(product.name);
  const [imageUrl, setImageUrl] = useState<string>(product.image);
  const [price, setPrice] = useState<number>(product.price);
  const [discount, setDiscount] = useState<number>(product.discount);
  const [stock, setStock] = useState<number>(product.stock);
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

  const handleAddSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    resetForm();
    onOpenSuccess();
  };

  const handleEditSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setEditingProduct(0);
    resetForm();
  };

  const handleCancel = () => {
    setEditingProduct(0);
    resetForm();
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
          {product.id ? `Editando ${product.name}` : "Agregar producto"}
        </Heading>
        <form onSubmit={product.id ? handleEditSubmit : handleAddSubmit}>
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
            {product.id ? (
              <Flex justifyContent={"center"}>
                <Button
                  color={"brand.lightBeige"}
                  type="submit"
                  variant={"brandThird"}
                  alignSelf={"center"}
                  mr="0.6rem"
                >
                  Confirmar
                </Button>
                <Button
                  color={"brand.lightBeige"}
                  onClick={handleCancel}
                  variant={"brandThird"}
                  alignSelf={"center"}
                >
                  Cancelar
                </Button>
              </Flex>
            ) : (
              <Button
                color={"brand.lightBeige"}
                type="submit"
                variant={"brandThird"}
                alignSelf={"center"}
              >
                Agregar producto
              </Button>
            )}
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

export default ProductForm;
