import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import data from './data.json';
import { calculateDiscount, formatPrice } from '../../utils/card';

interface Product {
  image: string;
  name: string;
  rating: number;
  price: number;
  voters: number;
  discount: number;
  stock: number;
  bestseller: boolean;
}

const ProductDetail: React.FC = () => {
  const product: Product = data[0];

  const { image, name, rating, price, voters, discount, stock, bestseller } = product;

  // Calculate discounted price
  const discountedPrice = calculateDiscount(price, discount);

  return (
    <Flex justify="center" align="center" h="80vh"> {/* Alinea en el centro verticalmente y horizontalmente */}
      <Box maxW="60%" p="1rem" borderWidth="1px" borderRadius="xl" boxShadow="md" backgroundColor="#FFF6EA">
        <Flex justify="center" align="flex-start">
          <Box mr="4rem">
            <Image src={image} alt={name} w="60rem" h="auto" />
          </Box>
          <Box>
            <Text fontSize="2.5rem" fontWeight="bold" mb="2rem">{name}</Text>
            <Flex fontSize="1.5rem" fontWeight="bold" mb="1rem">
              {discount > 0 && (
                <>
                  <Text as="s" mr="1rem">${formatPrice(price)}</Text>
                </>
              )}
              <Text>${formatPrice(discountedPrice)}</Text>
            </Flex>
            {discount > 0 && (
              <>
                <Text fontSize="1.2rem"><strong>Descuento:</strong> {discount}%</Text>
              </>
            )}
            <Flex align="center" mt="1rem">
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

