import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { calculateTotal, formatPrice } from "../index.tsx";
import React, { useEffect } from "react";

type ProductProps = {
  product: {
    productName: string;
    price: number;
    discount: number;
    quantity: number;
    imgUrl: string;
  };
  // TODO: agregar tipo
  products: {
    productName: string;
    price: number;
    discount: number;
    quantity: number;
    imgUrl: string;
  }[];
  setProducts: (products: any) => void;
  setSubtotal: (subtotal: number) => void;
};

export const Product = ({
  product,
  setProducts,
  products,
  setSubtotal,
}: ProductProps) => {
  const finalPrice = (product.price - product.discount) * product.quantity;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: product.quantity,
      min: 1,
      max: 99,
      onChange: (valueAsString, valueAsNumber) => {
        product.quantity = valueAsNumber;
        setProducts([...products]);
      },
    });

  useEffect(() => {
    setSubtotal(calculateTotal(products));
  }, [products]);

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleProductDelete = () => {
    const updatedProducts = products.filter((p) => p !== product);
    setProducts(updatedProducts);
    setSubtotal(calculateTotal(updatedProducts));
  };

  return (
    <Flex
      direction="row"
      align="center"
      borderBottom="1px solid"
      borderColor="brand.darkBeige"
      justify="space-between"
    >
      <Image
        src={product.imgUrl}
        alt={product.productName}
        maxW="50px"
        maxH="50px"
        mb="0.5em"
      />
      <Text fontWeight="semibold" fontSize="sm" textAlign="start" w="14em">
        {product.productName}
      </Text>
      <Flex justify="center" align="center">
        <Button
          variant="brandThird"
          size="xs"
          ml="1em"
          {...inc}
          m="0 0.5em"
          padding="0.5em"
        >
          +
        </Button>
        <Input
          variant="brandSecondary"
          {...input}
          size="xs"
          textAlign="center"
          w="2.5em"
          m="-0.2em"
          padding="0"
        />
        <Button
          variant="brandThird"
          size="xs"
          {...dec}
          m="0 0.5em"
          padding="0.5em"
        >
          −
        </Button>
      </Flex>
      <Button
        m="0"
        onClick={handleProductDelete}
        style={{ background: "transparent" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0,0,256,256"
        >
          <g
            fill="#394c38"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <g transform="scale(10.66667,10.66667)">
              <path d="M10,2l-1,1h-5v2h1v15c0,0.52222 0.19133,1.05461 0.56836,1.43164c0.37703,0.37703 0.90942,0.56836 1.43164,0.56836h10c0.52222,0 1.05461,-0.19133 1.43164,-0.56836c0.37703,-0.37703 0.56836,-0.90942 0.56836,-1.43164v-15h1v-2h-5l-1,-1zM7,5h10v15h-10zM9,7v11h2v-11zM13,7v11h2v-11z"></path>
            </g>
          </g>
        </svg>
      </Button>
      <Flex direction="column" align="center" w="7em">
        {product.discount ? (
          <Text
            fontWeight="semibold"
            fontSize="sm"
            ml="0.5em"
            textAlign="end"
            opacity="0.6"
            textDecoration="line-through"
          >
            {formatPrice(product.price * product.quantity)}
          </Text>
        ) : null}
        <Text fontWeight="semibold" fontSize="sm" ml="0.5em" textAlign="end">
          {formatPrice(finalPrice)}
        </Text>
      </Flex>
    </Flex>
  );
};
