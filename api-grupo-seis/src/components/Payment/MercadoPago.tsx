import { Flex, Image, Text } from "@chakra-ui/react";
import paymentMethodImages from "../../assets/img/checkout/payment-methods-img.json";
import React from "react";

export const MercadoPago = () => {
  return (
    <Flex direction="column" gap="0.5rem">
      <Text fontWeight="semibold" fontSize="lg">
        Serás redirigido a Mercado Pago y podrás pagar con:
      </Text>
      <Text fontWeight="semibold" fontSize="lg" opacity="0.8">
        Tarjeta de crédito
      </Text>
      <Flex mb="0.5em" wrap="wrap">
        {paymentMethodImages.credit.map((creditCard) => (
          <Image
            key={creditCard.alt}
            src={creditCard.src}
            alt={creditCard.alt}
            m="0.1em"
          />
        ))}
      </Flex>
      <Text fontWeight="semibold" fontSize="lg" opacity="0.8">
        Tarjeta de débito
      </Text>
      <Flex mb="0.5em" wrap="wrap">
        {paymentMethodImages.debit.map((debitCard) => (
          <Image
            key={debitCard.alt}
            src={debitCard.src}
            alt={debitCard.alt}
            m="0.1em"
          />
        ))}
      </Flex>
      <Text fontWeight="semibold" fontSize="lg" opacity="0.8">
        Efectivo en puntos de pago
      </Text>
      <Image
        src={paymentMethodImages.cash.src}
        alt={paymentMethodImages.cash.alt}
        mb="0.5em"
        w="34px"
        h="24px"
      />
      <Text fontWeight="semibold" fontSize="lg" opacity="0.8">
        Mercado Crédito
      </Text>
      <Image
        src={paymentMethodImages.mercadoCredito.src}
        alt={paymentMethodImages.mercadoCredito.alt}
        mb="0.5em"
        w="103px"
        h="34px"
      />
      <Text fontWeight="semibold" fontSize="lg" opacity="0.8">
        Dinero en cuenta de MercadoPago
      </Text>
    </Flex>
  );
};
