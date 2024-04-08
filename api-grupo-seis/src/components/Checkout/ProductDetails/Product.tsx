import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { calculateTotal, formatPrice } from "../index.tsx";
import { products } from "../checkout-data.ts";
import React from "react";

type ProductProps = {
  product: {
    productName: string;
    price: number;
    discount: number;
    quantity: number;
    imgUrl: string;
  };
  setProducts: (products: any) => void;
  setSubtotal: (subtotal: number) => void;
};

export const Product = ({
  product,
  setProducts,
  setSubtotal,
}: ProductProps) => {
  const finalPrice = (product.price - product.discount) * product.quantity;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: product.quantity,
      min: 1,
      max: 99,
    });

  const onChangeQuantity = (e) => {
    product.quantity = e.target.value;
    setProducts([...products]);
    setSubtotal(calculateTotal(products));
  };

  const inc = {
    onClick: () => {
      product.quantity++;
      setProducts([...products]);
      setSubtotal(calculateTotal(products));
    },
    ...getIncrementButtonProps(),
  };

  const dec = {
    onClick: () => {
      if (product.quantity > 0) {
        product.quantity--;
        setProducts([...products]);
        setSubtotal(calculateTotal(products));
      }
    },
    ...getDecrementButtonProps(),
  };

  const input = {
    onChange: (e) => onChangeQuantity(e),
    value: product.quantity,
    ...getInputProps(),
  };

  return (
    <Flex
      direction="row"
      align="center"
      borderBottom="1px solid"
      borderColor="brand.darkBeige"
      maxW="25vw"
      justify="space-between"
    >
      <Image
        src={product.imgUrl}
        alt={product.productName}
        maxW="50px"
        maxH="50px"
        mb="0.5em"
      />
      <Text variant="productTitle" fontSize="0.9em" textAlign="start" w="15em">
        {product.productName}
      </Text>
      <Flex justify="center" align="center">
        <Button
          variant="fourthStyle"
          size="xs"
          ml="1em"
          {...inc}
          m="0 0.5em"
          padding="0.5em"
        >
          +
        </Button>
        <Input
          variant="secondary"
          {...input}
          size="xs"
          textAlign="center"
          w="2.5em"
          m="-0.2em"
          padding="0"
        />
        <Button
          variant="fourthStyle"
          size="xs"
          {...dec}
          m="0 0.5em"
          padding="0.5em"
        >
          −
        </Button>
      </Flex>
      <Flex direction="column" align="center" w="7em">
        {product.discount ? (
          <del>
            <Text
              variant="productPrice"
              fontSize="0.9em"
              ml="0.5em"
              textAlign="end"
              opacity="0.6"
            >
              {formatPrice(product.price * product.quantity)}
            </Text>
          </del>
        ) : null}
        <Text
          variant="productPrice"
          fontSize="0.9em"
          ml="0.5em"
          textAlign="end"
        >
          {formatPrice(finalPrice)}
        </Text>
      </Flex>
    </Flex>
  );
};
