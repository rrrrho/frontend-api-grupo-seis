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
    >
      <Heading variant="brandSecondary" fontSize="1.5em" opacity="0.8">
        Descuentos aplicados
      </Heading>
      {paymentMethod === "card" ? (
        <Text variant="productTitle" fontSize="0.9em" opacity="0.8">
          5% por pago con tarjeta
        </Text>
      ) : paymentMethod === "wire" ? (
        <Text variant="productTitle" fontSize="0.9em" opacity="0.8">
          10% por pago con transferencia
        </Text>
      ) : null}
      {freeShipping && (
        <Text variant="productTitle" fontSize="0.9em" opacity="0.8">
          Envío gratis a partir de $50.000
        </Text>
      )}
    </Flex>
  );
};
