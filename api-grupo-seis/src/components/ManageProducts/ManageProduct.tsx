import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { generateRating } from "../../utils/card";
import products from "../../json/ManageProducts/manage-products-data.json";
import ProductForm from "../ProductForm/ProductForm";

const ManageProductTable = () => {
  const [editingProduct, setEditingProduct] = useState<number>(0);
  const [productsState, setProductsState] = useState(
    products.map((product) => ({
      ...product,
      quota: product.price / 6,
    }))
  );
  const {
    isOpen: isDeleteOpen,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleEdit = (id: number) => {
    setEditingProduct(id);
  };
  const handleDelete = (id: number) => {
    const newProducts = productsState.filter((product) => product.id !== id);
    setProductsState(newProducts);
    onCloseDelete();
  };

  return (
    <>
      {editingProduct ? (
        <ProductForm
          product={productsState.filter((p) => p.id === editingProduct)[0]}
          setEditingProduct={setEditingProduct}
        />
      ) : (
        <TableContainer mx="2rem" mt="1rem">
          <Table>
            <Thead>
              <Tr>
                <Th color="brand.darkGreen" fontSize={"md"}>
                  Producto
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                >
                  Precio
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                >
                  Stock
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                >
                  Rating
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                >
                  Editar
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                >
                  Eliminar
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {productsState.map((product) => (
                <Tr key={product.id}>
                  <Td>
                    <HStack w="20vw">
                      <Image
                        src={product.image}
                        alt={product.name}
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Text
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"md"}
                      >
                        {product.name}
                      </Text>
                    </HStack>
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                  >
                    {product.price}
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                  >
                    {product.stock}
                  </Td>
                  <Td>
                    <VStack>
                      <HStack>{generateRating(product.rating)}</HStack>
                      <Text
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"md"}
                      >
                        {product.rating}
                      </Text>
                    </VStack>
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                  >
                    <Button
                      variant="brandPrimary"
                      onClick={() => handleEdit(product.id)}
                    >
                      <FaEdit />
                    </Button>
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                  >
                    <Button variant="brandPrimary" onClick={onOpenDelete}>
                      <MdDelete />
                    </Button>
                    <AlertDialog
                      isOpen={isDeleteOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onCloseDelete}
                    >
                      <AlertDialogOverlay bg="rgba(0,0,0,0.3)">
                        <AlertDialogContent
                          bgColor="brand.lightGreen"
                          color={"brand.lightBeige"}
                          justifySelf={"center"}
                          alignSelf={"center"}
                        >
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Eliminar producto
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            ¿Seguro que querés eliminar {product.name}?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button
                              ref={cancelRef}
                              onClick={onCloseDelete}
                              variant="brandFifth"
                            >
                              Cancelar
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => handleDelete(product.id)}
                              ml={3}
                            >
                              Eliminar
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ManageProductTable;
