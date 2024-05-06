import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import data from './data.json';
import { formatPrice, calculateDiscount, generateRating } from "../../utils/card";
import AddToCart from './AddToCart2';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state;
    const {id, name, image, rating, voters, price, quota, discount, stock, bestseller} = product;

  return (
    <Flex justify="center" align="center" w="100vw" h="80vh">
      <Flex w={{ base: '30rem', xl: "50rem" }} bg="brand.lightBeige" borderRadius="15px" position="relative" transition="all 0.2s">
          <Box bg="white" h="60vh" w="100%" borderTopRadius="15px" position="relative" cursor="pointer">
              {bestseller && (
                  <Text position="absolute" bottom="0" fontWeight="600" color="brand.darkBrown" fontSize={{ base: '0.6rem', xl: "0.8rem" }} p="0.2rem 0.5rem" bg="brand.darkMustard" borderTopRightRadius="5px">
                      ¡Más vendido!
                  </Text>
              )}
              <Image src={image} objectFit="contain" w="100%" h="100%" borderTopRadius="15px" />
    
          </Box>
          
          <Box p="1.4rem">
              <Box h="18.6vh">
                  <Text fontWeight="600" fontSize={{ base: '2.8rem', xl: "2rem" }} cursor="pointer">{name}</Text>
                  <Flex gap={1} alignItems={'center'}>
                      <Text fontSize={{ base: '0.6rem', xl: "1.8rem" }}>{rating}</Text>
                      <Flex alignItems={'center'}>{generateRating(rating)}</Flex>
                      <Text fontSize={{ base: '0.6rem', xl: "1.8rem" }}>({voters})</Text>
                  </Flex>
              </Box>
              <Flex flexDir="column" mt={2} >
                  {discount ? (
                      <Text fontSize={{ base: '0.5rem', xl: "1.7rem" }} textDecoration="line-through" color="gray">${formatPrice(price)}</Text>
                  ) : (
                      <Text fontSize={{ base: '0.5rem', xl: "1.7rem" }} color="brand.lightBeige">aa</Text>
                  )}
                  <Flex alignItems="center">
                      {discount ? (
                          <>
                              <Text fontWeight="600" fontSize={{ base: '0.8rem', xl: "2rem" }}>${formatPrice(calculateDiscount(price, discount))}</Text>
                              <Text fontSize={{ base: '0.5rem', xl: "1.7rem" }} ml={1} color="brand.darkBrown">{discount}%</Text>
                          </>
                      ) : (
                          <Text fontWeight="600" fontSize={{ base: '0.8rem', xl: "1rem" }}>${formatPrice(price)}</Text>
                      )}
                  </Flex>
                  <Text fontSize={{ base: '0.5rem', xl: "1.1rem" }}>En 6 cuotas de ${formatPrice(quota)}</Text>
                  <Text mt={3} p="0.4rem 1.5rem" borderRadius={3} bg="brand.lightBrown" w="fit-content" fontSize={{ base: '0.5rem', xl: "0.7rem" }} color="brand.cream">Envío gratis</Text>
              </Flex>
              <AddToCart id={id} name={name} image={image} rating={rating} voters={voters} price={price} discount={discount} quota={quota} stock={stock} bestseller={bestseller} />
          </Box>
      </Flex>
    </Flex>
  );
};
export default ProductDetail;

