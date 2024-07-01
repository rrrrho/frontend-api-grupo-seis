import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  TableContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { getInvoicesByUser } from "../../services/InvoiceService";
import { formatPrice } from "../../utils/card";
import UserAdminPaginator from "../UserAdmin/UserAdminPaginator";

const PedidosRealizados = () => {
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [isSelectedPagePaginator, setIsSelectedPagePaginator] = useState(false);

  const setSelectedPagePaginator = (page: number) => {
    setSelectedPage(page);
    setIsSelectedPagePaginator(true);
  };

  const formatPaymentMethod = (method) => {
    switch (method) {
      case "CREDIT_CARD":
        return "Tarjeta de crédito";
      case "MERCADO_PAGO":
        return "Mercado Pago";
      default:
        return "Transferencia bancaria";
    }
  };

  const formatShippingMethod = (method) => {
    switch (method) {
      case "CORREO_ARGENTINO":
        return "Correo Argentino";
      case "ANDREANI":
        return "Andreani";
      default:
        return "Retiro";
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await getInvoicesByUser(
        Number(localStorage.getItem("userId")),
        selectedPage
      );
      if (response.invoices.lenght === 0) {
        return;
      }
      setOrders(response.invoices);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error(error);
    }
    setIsSelectedPagePaginator(false);
  };

  useEffect(() => {
    fetchOrders();
  }, [isSelectedPagePaginator]);

  return (
    <Box
      p="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="66%"
      m="auto"
      gap={4}
    >
      <Heading as="h1" size="lg" mb="4">
        Pedidos Realizados
      </Heading>
      {orders.map((order, index) => (
        <>
          <Box
            key={index}
            borderWidth="1px"
            borderColor="brand.darkGreen"
            borderRadius="md"
            w="100%"
            p="3"
          >
            <Text fontSize="2xl" fontWeight="bold">
              Pedido N° {index + 1 + 12 * selectedPage}
            </Text>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th
                      textAlign={"center"}
                      color="brand.darkGreen"
                      fontSize={"sm"}
                      borderColor={"brand.darkGreen"}
                    >
                      Producto
                    </Th>
                    <Th
                      textAlign={"center"}
                      color="brand.darkGreen"
                      fontSize={"sm"}
                      borderColor={"brand.darkGreen"}
                    >
                      Cantidad
                    </Th>
                    <Th
                      textAlign={"center"}
                      color="brand.darkGreen"
                      fontSize={"sm"}
                      borderColor={"brand.darkGreen"}
                    >
                      Precio unitario
                    </Th>
                    <Th
                      textAlign={"center"}
                      color="brand.darkGreen"
                      fontSize={"sm"}
                      borderColor={"brand.darkGreen"}
                    >
                      Descuento
                    </Th>
                    <Th
                      textAlign={"center"}
                      color="brand.darkGreen"
                      fontSize={"sm"}
                      borderColor={"brand.darkGreen"}
                    >
                      Total
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order.products.map((product) => (
                    <Tr key={product.product}>
                      <Td
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"sm"}
                        borderColor={"brand.darkGreen"}
                      >
                        {product.product}
                      </Td>
                      <Td
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"sm"}
                        borderColor={"brand.darkGreen"}
                      >
                        {product.quantity}
                      </Td>
                      <Td
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"sm"}
                        borderColor={"brand.darkGreen"}
                      >
                        ${formatPrice(product.price)}
                      </Td>
                      <Td
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"sm"}
                        borderColor={"brand.darkGreen"}
                      >
                        {product.discount ? `${product.discount}%` : "N/A"}
                      </Td>
                      <Td
                        textAlign={"center"}
                        color="brand.darkGreen"
                        fontSize={"sm"}
                        borderColor={"brand.darkGreen"}
                      >
                        $
                        {formatPrice(
                          product.price *
                            (1 - product.discount / 100) *
                            product.quantity
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex justify={"space-around"}>
              <VStack>
                <Text fontSize="xl" fontWeight="bold" mt="4">
                  Resumen
                </Text>
                <Flex direction={"column"} align={"start"}>
                  <HStack>
                    <Text fontSize="md" fontWeight="bold">
                      Costo de envio:
                    </Text>
                    <Text fontSize="md">
                      {order.shippingCost === 0
                        ? "Gratis"
                        : `$${formatPrice(order.shippingCost)}`}
                    </Text>
                  </HStack>
                  {order.discount ? (
                    <HStack>
                      <Text fontSize="md" fontWeight="bold">
                        Descuento:
                      </Text>
                      <Text fontSize="md">{order.discount}%</Text>
                    </HStack>
                  ) : null}

                  <HStack>
                    <Text fontSize="md" fontWeight="bold">
                      Total:
                    </Text>
                    <Text fontSize="md">${formatPrice(order.total)}</Text>
                  </HStack>
                </Flex>
              </VStack>
              <VStack>
                <Text fontSize="xl" fontWeight="bold" mt="4">
                  Pago
                </Text>
                <Flex direction={"column"} align={"start"}>
                  <HStack>
                    <Text fontSize="md" fontWeight="bold">
                      Método de pago:
                    </Text>
                    <Text fontSize="md">
                      {formatPaymentMethod(order.paymentMethod)}
                    </Text>
                  </HStack>
                  {order.paymentMethod === "CREDIT_CARD" && (
                    <HStack>
                      <Text fontSize="md" fontWeight="bold">
                        Últimos 4 dígitos de la tarjeta:
                      </Text>
                      <Text fontSize="md">{order.lastFourDigits}</Text>
                    </HStack>
                  )}
                </Flex>
              </VStack>
              <VStack>
                <Text fontSize="xl" fontWeight="bold" mt="4">
                  Envío
                </Text>
                <Flex direction={"column"} align={"start"}>
                  <HStack>
                    <Text fontSize="md" fontWeight="bold">
                      Método de envío:
                    </Text>
                    <Text fontSize="md">
                      {formatShippingMethod(order.shippingMethod)}
                    </Text>
                  </HStack>

                  {order.shippingData &&
                    order.shippingData.split(",").map((item, index) => (
                      <HStack key={index}>
                        <Text fontSize="md" fontWeight="bold">
                          {index === 0
                            ? "Dirección:"
                            : index === 1
                            ? "Número:"
                            : index === 2
                            ? "Código Postal:"
                            : index === 3
                            ? "Provincia:"
                            : "Ciudad:"}
                        </Text>
                        <Text fontSize="md">{item.trim()}</Text>
                      </HStack>
                    ))}
                </Flex>
              </VStack>
            </Flex>
          </Box>
        </>
      ))}
      <UserAdminPaginator
        alignSelf={"alignSelf"}
        m="2rem"
        totalPages={totalPages}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPagePaginator}
      />
    </Box>
  );
};

export default PedidosRealizados;
