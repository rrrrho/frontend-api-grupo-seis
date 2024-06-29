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
import { formatPrice, generateRating } from "../../utils/card";
import products from "../../json/ManageProducts/manage-products-data.json";
import ProductForm from "../ProductForm/ProductForm";
import { deleteProduct } from "../../services/ProductsService";

const ManageProductTable = () => {
  const [editingProduct, setEditingProduct] = useState<number>(0);
  const [deleteCandidateId, setDeleteCandidateId] = useState<number>(0);
  const [deleteCandidateTitle, setDeleteCandidateTitle] = useState<string>("");
  const [productsState, setProductsState] = useState(products);
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
    fetchDelete(id);
    onCloseDelete();
  };

  const fetchDelete = async (id: number) => {
    try {
      const response = await deleteProduct(id);
      if (response.statusCode === 204) {
        setProductsState(productsState.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnOpenDelete = (id, name) => {
    onOpenDelete();
    setDeleteCandidateId(id);
    setDeleteCandidateTitle(name);
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
                <Th
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Producto
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Precio
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Stock
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Rating
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Editar
                </Th>
                <Th
                  textAlign={"center"}
                  color="brand.darkGreen"
                  fontSize={"md"}
                  borderColor={"brand.darkGreen"}
                >
                  Eliminar
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {productsState.map((product) => (
                <Tr key={product.id}>
                  <Td borderColor={"brand.darkGreen"}>
                    <HStack w="20vw">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Text
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"md"}
                      >
                        {product.title}
                      </Text>
                    </HStack>
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                    borderColor={"brand.darkGreen"}
                  >
                    ${formatPrice(product.price)}
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                    borderColor={"brand.darkGreen"}
                  >
                    {product.stock}
                  </Td>
                  <Td borderColor={"brand.darkGreen"}>
                    <VStack>
                      <HStack>{generateRating(product.score)}</HStack>
                      <Text
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"md"}
                      >
                        {product.score}
                      </Text>
                    </VStack>
                  </Td>
                  <Td
                    textAlign={"center"}
                    color="brand.darkGreen"
                    fontSize={"md"}
                    borderColor={"brand.darkGreen"}
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
                    borderColor={"brand.darkGreen"}
                  >
                    <Button
                      variant="brandPrimary"
                      onClick={() =>
                        handleOnOpenDelete(product.id, product.title)
                      }
                    >
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
                            ¿Seguro que querés eliminar {deleteCandidateTitle}?
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
                              onClick={() => handleDelete(deleteCandidateId)}
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
