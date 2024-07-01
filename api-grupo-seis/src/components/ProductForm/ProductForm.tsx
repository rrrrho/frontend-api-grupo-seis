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
import ModalSuccess from "../Modal/ModalSuccess";
import { createProduct, updateProduct } from "../../services/ProductsService";
import { ProductRequest } from "../../types/product";

// TODO: eliminar esta y usar la que quede como definitiva en /types
export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  brand: string;
  petCategory: string;
  petStage: string;
  score: number;
  scoreVoters: number;
  price: number;
  discount: number;
  stock: number;
  bestseller: boolean;
}

type AddProductFormProps = {
  product: ProductRequest;
  setEditingProduct: (id: number) => void;
  productId: number;
};
const ProductForm = ({
  product = {
    userId: Number(localStorage.getItem("userId")),
    title: "",
    description: "",
    imageUrl: "",
    brand: "",
    petCategory: "",
    petStage: "",
    price: 0,
    discount: 0,
    stock: 0,
  },
  setEditingProduct,
  productId,
}: AddProductFormProps) => {
  const [title, setTitle] = useState<string>(product.title);
  const [description, setDescription] = useState<string>(product.description);
  const [imageUrl, setImageUrl] = useState<string>(product.imageUrl);
  const [brand, setBrand] = useState<string>(product.brand);
  const [petCategory, setPetCategory] = useState<string>(product.petCategory);
  const [petStage, setPetStage] = useState<string>(product.petStage);
  const [price, setPrice] = useState<number>(product.price);
  const [discount, setDiscount] = useState<number>(product.discount);
  const [stock, setStock] = useState<number>(product.stock);
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setBrand("");
    setPetCategory("");
    setPetStage("");
    setPrice(0);
    setDiscount(0);
    setStock(0);
  };

  const handleAddSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchCreateProduct();
    resetForm();
    onOpenSuccess();
  };

  const handleEditSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchEditProduct();
    setEditingProduct(0);
    resetForm();
  };

  const handleCancel = () => {
    setEditingProduct(0);
    resetForm();
  };

  // TODO: mandar un product request en vez de un product
  const fetchCreateProduct = async () => {
    try {
      await createProduct({
        userId: product.userId,
        title: title,
        description: description,
        imageUrl: imageUrl,
        brand: brand,
        petCategory: petCategory,
        petStage: petStage ? petStage : null,
        price: price,
        discount: discount,
        stock: stock,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: mandar un product request en vez de un product
  const fetchEditProduct = async () => {
    try {
      await updateProduct(
        {
          userId: product.userId,
          title: title,
          description: description,
          imageUrl: imageUrl,
          brand: brand,
          petCategory: petCategory,
          petStage: petStage ? petStage : null,
          price: price,
          discount: discount,
          stock: stock,
        },
        productId
      );
    } catch (error) {
      console.log;
    }
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
          {product.id ? `Editando ${product.title}` : "Agregar producto"}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>

                <FormControl isRequired mr="0.5em">
                  <FormLabel mb="0.1em">Descripción</FormLabel>
                  <Input
                    variant="brandSecondary"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <Flex align="center">
                <FormControl isRequired mr="0.5em">
                  <FormLabel mb="0.1em">Marca</FormLabel>
                  <Input
                    variant="brandSecondary"
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
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
              <Flex align="center">
                <FormControl isRequired mr="0.5em">
                  <FormLabel mb="0.1em">Categoría</FormLabel>
                  <Select
                    placeholder="Seleccionar"
                    value={petCategory}
                    onChange={(e) => setPetCategory(e.target.value)}
                    variant="brandSecondary"
                    sx={{
                      option: {
                        backgroundColor: "brand.lightBeige",
                      },
                    }}
                  >
                    <option value={"CAT"}>Gatos</option>
                    <option value={"DOG"}>Perros</option>
                    <option value={"HAMSTER"}>Hamster</option>
                    <option value={"FISH"}>Peces</option>
                  </Select>
                </FormControl>

                <FormControl mr="0.5em">
                  <FormLabel mb="0.1em">Edad</FormLabel>
                  <Select
                    placeholder="Seleccionar"
                    value={petStage}
                    onChange={(e) => setPetStage(e.target.value)}
                    variant="brandSecondary"
                    sx={{
                      option: {
                        backgroundColor: "brand.lightBeige",
                      },
                    }}
                  >
                    <option value={"BABY"}>Cachorro</option>
                    <option value={"ADULT"}>Adulto</option>
                    <option value={"SENIOR"}>Adulto senior</option>
                  </Select>
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
