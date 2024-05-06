import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const PedidosRealizados = () => {
  // Ejemplo de lista de pedidos (simulada)
  const orders = [
    { id: 1, product: 'Comida para gatos', amount: 2, total: 50 },
    { id: 2, product: 'Snacks para perros', amount: 1, total: 20 },
    { id: 3, product: 'Arena para gatos', amount: 3, total: 30 }
  ];

  return (
    <Box p="4">
      <Heading as="h1" size="lg" mb="4">
        Pedidos Realizados
      </Heading>
      <VStack align="start" spacing="4">
        {orders.map((order) => (
          <Box key={order.id} borderWidth="1px" borderRadius="md" p="3" w="100%">
            <Text>
              <strong>Producto:</strong> {order.product}
            </Text>
            <Text>
              <strong>Cantidad:</strong> {order.amount}
            </Text>
            <Text>
              <strong>Total:</strong> ${order.total}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PedidosRealizados;