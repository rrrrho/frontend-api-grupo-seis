import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Wire = () => {
  return (
    <Flex align="center" direction="column" alignSelf="center">
      <Text variant="productPrice" textAlign="center" mb="0.5em">
        Realizá una transferencia bancaria a la siguiente cuenta:
      </Text>

      <Text variant="productTitle" opacity="0.8" textAlign="start">
        PetShop Grupo6 (30-72429961-7)
      </Text>
      <Text variant="productTitle" opacity="0.8" textAlign="start">
        CBU: 0361631410000000621764
      </Text>
      <Text variant="productTitle" opacity="0.8" textAlign="start">
        ALIAS: HACHIKO.GARFIELD.TOM
      </Text>
      <Text variant="productTitle" opacity="0.8" textAlign="start">
        Banco Miau
      </Text>
    </Flex>
  );
};
