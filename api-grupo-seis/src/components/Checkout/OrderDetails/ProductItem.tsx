import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { calculateTotal, formatPrice } from "../index.tsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../../types/product.ts";
import { calculateDiscount } from "../../../utils/card.tsx";

type ProductProps = {
  product: Product;
  quantity: number;
};

export const ProductItem = ({ product, quantity }: ProductProps) => {
  return (
    <Flex
      direction="row"
      align="center"
      borderBottom="1px solid"
      borderColor="brand.darkBeige"
      justify="space-between"
    >
      <HStack>
        <Image
          src={product.image}
          alt={product.name}
          maxW="50px"
          maxH="50px"
          mb="0.5em"
        />
        <Text fontWeight="semibold" fontSize="sm" textAlign="start">
          {product.name}
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
            {formatPrice(product.price * quantity)}
          </Text>
        ) : null}
        <Text fontWeight="semibold" fontSize="sm" ml="0.5em" textAlign="end">
          {formatPrice(
            calculateDiscount(product.price * quantity, product.discount)
          )}
        </Text>
      </Flex>
    </Flex>
  );
};
