import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

type AppliedDiscountsProps = {
  paymentMethod: string;
  freeShipping: boolean;
};

export const AppliedDiscounts = ({
  paymentMethod,
  freeShipping,
}: AppliedDiscountsProps) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      borderBottom="1px solid"
      borderColor="brand.darkBeige"
      gap="0.5em"
    >
      <Heading
        variant="brandSecondary"
        fontSize="1.3em"
        opacity="0.8"
        mb="0.1em"
        mt="0.2em"
      >
        Descuentos aplicados
      </Heading>
      {paymentMethod === "card" ? (
        <Text fontWeight="semibold" fontSize="sm" opacity="0.8">
          5% por pago con tarjeta
        </Text>
      ) : paymentMethod === "wire" ? (
        <Text fontWeight="semibold" fontSize="sm" opacity="0.8">
          10% por pago con transferencia
        </Text>
      ) : null}
      {freeShipping && (
        <Text fontWeight="semibold" fontSize="sm" opacity="0.8">
          Envío gratis a partir de $50.000
        </Text>
      )}
    </Flex>
  );
};
