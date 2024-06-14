import { Button, Flex, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { CardPaymentForm } from "./CardPaymentForm.tsx";
import { MercadoPago } from "./MercadoPago.tsx";
import { Wire } from "./Wire.tsx";

type PaymentProps = {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  paymentMethodDiscount: number;
  setLastFourDigits: (digits: string) => void;
};

export const Payment = ({
  paymentMethod,
  setPaymentMethod,
  paymentMethodDiscount: discount,
  setLastFourDigits,
}: PaymentProps) => {
  return (
    <Flex
      maxW="800px"
      w="35vw"
      bg="rgba(78, 110, 82, 0.4)"
      borderRadius="10"
      padding="1.2rem"
      justifyContent="center"
      direction="column"
      mt="1em"
      gap="0.5rem"
    >
      <HStack mb="0.2em">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7111 28.7169C22.2867 28.7169 28.428 22.5755 28.428 15C28.428 7.42434 22.2867 1.28308 14.7111 1.28308C7.13549 1.28308 0.994232 7.42434 0.994232 15C0.994232 22.5755 7.13549 28.7169 14.7111 28.7169Z"
            stroke="#394C38"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.8262 10.1991C17.8866 9.25946 16.232 8.6059 14.7112 8.56499M14.7112 8.56499C12.9018 8.51629 11.2819 9.33486 11.2819 11.5708C11.2819 15.6858 18.8262 13.6283 18.8262 17.7433C18.8262 20.0903 16.8184 21.0988 14.7112 21.023M14.7112 8.56499V6.08398M10.5961 19.115C11.4801 20.2937 13.1238 20.966 14.7112 21.023M14.7112 21.023V23.9159"
            stroke="#394C38"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Heading variant="sectionTitle" fontSize="4xl">
          Pago
        </Heading>
      </HStack>
      <Flex align="center" mb="0.5em">
        <Button
          w="33.33%"
          variant={
            paymentMethod === "CREDIT_CARD" ? "brandFifth" : "brandFourth"
          }
          padding="0"
          h="5em"
          onClick={() => setPaymentMethod("CREDIT_CARD")}
          m="0"
          isActive={paymentMethod === "CREDIT_CARD"}
        >
          <Flex
            align="center"
            direction="column"
            justify="space-evenly"
            w="100%"
            h="100%"
          >
            <img
              src="/src/assets/img/checkout/card.png"
              width="50px"
              height="50px"
            ></img>
            Tarjeta de crédito
          </Flex>
        </Button>
        <Button
          w="33.33%"
          variant={
            paymentMethod === "MERCADO_PAGO" ? "brandFifth" : "brandFourth"
          }
          padding="0"
          h="5em"
          onClick={() => setPaymentMethod("MERCADO_PAGO")}
          m="0"
          isActive={paymentMethod === "MERCADO_PAGO"}
        >
          <Flex
            align="center"
            direction="column"
            justify="space-evenly"
            w="100%"
            h="100%"
          >
            <img
              src="/src/assets/img/checkout/mp.png"
              width="50px"
              height="50px"
            ></img>
            Mercado Pago
          </Flex>
        </Button>
        <Button
          w="33.33%"
          variant={paymentMethod === "WIRE" ? "brandFifth" : "brandFourth"}
          padding="0"
          h="5em"
          onClick={() => setPaymentMethod("WIRE")}
          m="0"
          isActive={paymentMethod === "WIRE"}
        >
          <Flex
            align="center"
            direction="column"
            justify="space-evenly"
            w="100%"
            h="100%"
          >
            <img
              src="/src/assets/img/checkout/wire.png"
              width="50px"
              height="50px"
            ></img>
            Transferencia
          </Flex>
        </Button>
      </Flex>
      {paymentMethod === "CREDIT_CARD" ? (
        <CardPaymentForm
          discount={discount}
          setLastFourDigits={setLastFourDigits}
        />
      ) : paymentMethod === "MERCADO_PAGO" ? (
        <MercadoPago />
      ) : (
        <Wire />
      )}
    </Flex>
  );
};
