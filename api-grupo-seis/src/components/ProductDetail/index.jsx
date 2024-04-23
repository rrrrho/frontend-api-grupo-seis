import { Box, Flex, Image, Text } from '@chakra-ui/react';
import data from './data.json';

const ProductDetail = () => {
  const product = data[0];
  
  const { image, nombre , description, price, seller, stock } = product;

  return (
    <Flex justify="center" align="center" mt="2rem">
      <Box maxW="80%" p="2rem" borderWidth="1px" borderRadius="xl" boxShadow="md" backgroundColor="#FFF6EA">
        <Flex justify="center" align="flex-start">
          <Box mr="4rem">
            <Image src={image} alt={description} w="20rem" h="auto" />
          </Box>
          <Box>
            <Text fontSize="2.5rem" fontWeight="bold" mb="2rem">{nombre}</Text>
            <Text fontSize="1.5rem" fontWeight="bold" mb="2rem">{description}</Text>
            <Text fontSize="1.5rem" fontWeight="bold" mb="3rem"><strong>Precio:</strong> ${price}</Text>
            <Text fontSize="1.2rem"><strong>Vendedor:</strong> {seller}</Text>
            <Flex align="center" mt="2rem">
              <Text fontSize="1.5rem" mr="2rem">Cantidad:</Text>
              <input type="number" min="1" max={stock} defaultValue="1" style={{ width: '6rem', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ddd', marginRight: '1rem' }} />
              <Text fontSize="1.5rem" color={stock > 0 ? "green.500" : "red.500"}>{stock > 0 ? `Disponible: ${stock} unidades` : "Agotado"}</Text>
            </Flex>
            <button style={{ backgroundColor: '#7D5A50', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', padding: '1rem 2rem', marginTop: '1rem' }} disabled={stock === 0}>Agregar al carrito</button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDetail;
