import { Button, Flex, HStack, Heading } from "@chakra-ui/react";
import { Pickup } from "./Pickup";
import React from "react";
import { ShippingForm } from "./ShippingForm";

type ShippingProps = {
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
};

export const Shipping = ({
  shippingMethod,
  setShippingMethod,
}: ShippingProps) => {
  return (
    <Flex
      maxW="800px"
      w="35vw"
      bg="rgba(78, 110, 82, 0.4)"
      borderRadius="10"
      padding="1em"
      justifyContent="center"
      direction="column"
      mt="1em"
      gap="0.5rem"
    >
      <HStack>
        <svg
          width="42"
          height="28"
          viewBox="0 0 42 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8575 26.8147C13.0352 26.8147 14.8005 25.0495 14.8005 22.8717C14.8005 20.694 13.0352 18.9287 10.8575 18.9287C8.67986 18.9287 6.91452 20.694 6.91452 22.8717C6.91452 25.0495 8.67986 26.8147 10.8575 26.8147Z"
            stroke="#394C38"
            strokeWidth="2"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.5724 26.8147C32.7502 26.8147 34.5154 25.0495 34.5154 22.8717C34.5154 20.694 32.7502 18.9287 30.5724 18.9287C28.3947 18.9287 26.6295 20.694 26.6295 22.8717C26.6295 25.0495 28.3947 26.8147 30.5724 26.8147Z"
            stroke="#394C38"
            strokeWidth="2"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.658 22.8717V2.36817C24.658 1.71488 24.1284 1.18527 23.4751 1.18527H2.1829C1.5296 1.18527 1 1.71488 1 2.36817V21.6888C1 22.3422 1.5296 22.8717 2.1829 22.8717H6.22447"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.658 22.8717H14.8992"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.658 7.09976H35.7183C36.1858 7.09976 36.6094 7.37506 36.7993 7.80225L40.3281 15.742C40.3953 15.8934 40.43 16.0571 40.43 16.2225V21.6888C40.43 22.3422 39.9004 22.8717 39.2471 22.8717H35.5013"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.658 22.8717H26.6295"
            stroke="#394C38"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <Heading variant="sectionTitle" fontSize="2em">
          Envío
        </Heading>
      </HStack>
      <Flex
        w="100%"
        bg="rgba(125, 90, 80, 0.5)"
        m="0"
        borderRadius="8"
        mb="0.5em"
      >
        <Button
          variant={shippingMethod === "shipping" ? "brandThird" : "brandFourth"}
          color="brand.cream"
          onClick={() => setShippingMethod("shipping")}
          w="50%"
          m="0"
          isActive={shippingMethod === "shipping"}
        >
          Envío a domicilio
        </Button>
        <Button
          variant={shippingMethod === "pickup" ? "brandThird" : "brandFourth"}
          color="brand.cream"
          onClick={() => setShippingMethod("pickup")}
          w="50%"
          m="0"
          isActive={shippingMethod === "pickup"}
        >
          Retiro en punto
        </Button>
      </Flex>
      {shippingMethod === "shipping" ? <ShippingForm /> : <Pickup />}
    </Flex>
  );
};
