import { Flex, HStack, Image, Text, Box, Badge } from "@chakra-ui/react";
import { formatPrice } from "../../utils/card";
import React from "react";
import { Product } from "../../types/product";
import { calculateDiscount } from "../../utils/card";

type ProductProps = {
  product: Product;
  quantity: number;
};

export const ProductItem = ({ product, quantity }: ProductProps) => {
  return (
    <Flex
      direction="row"
      align="center"
      borderColor="brand.darkBeige"
      justify="space-between"
      position="relative"
    >
      <HStack>
        <Box position="relative">
          <Image
            src={product.imageUrl}
            alt={product.title}
            maxW="50px"
            maxH="50px"
            mb="0.5em"
          />
          <Badge
            position="absolute"
            top="-10px"
            right="-10px"
            backgroundColor="brand.darkBrown"
            color="brand.lightBeige"
            borderRadius="full"
            fontSize="xs"
            px="2"
            py="0.5"
            boxShadow="md"
          >
            {quantity}
          </Badge>
        </Box>
        <Text fontWeight="semibold" fontSize="sm" textAlign="start">
          {product.title}
        </Text>
      </HStack>
      <Flex direction="column" align="center">
        {product.discount ? (
          <Text
            fontWeight="semibold"
            fontSize="sm"
            ml="0.5em"
            textAlign="end"
            opacity="0.6"
            textDecoration="line-through"
          >
            ${formatPrice(product.price * quantity)}
          </Text>
        ) : null}
        <Text fontWeight="semibold" fontSize="sm" ml="0.5em" textAlign="end">
          $
          {formatPrice(
            calculateDiscount(product.price * quantity, product.discount)
          )}
        </Text>
      </Flex>
    </Flex>
  );
};
