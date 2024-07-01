import { Divider, Flex, Heading } from "@chakra-ui/react";
import { calcSubtotalCheckout } from "../../utils/checkout.tsx";
import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem.tsx";
import { AppliedDiscounts } from "./AppliedDiscounts.tsx";
import { Totalizer } from "./Totalizer.tsx";
import { useAppSelector } from "../../context/hooks.ts";

type OrderDetailsProps = {
  shippingMethod: string;
  paymentMethod: string;
  paymentMethodDiscount: number;
};
export const OrderDetails = ({
  shippingMethod,
  paymentMethod,
  paymentMethodDiscount: discount,
}: OrderDetailsProps) => {
  const cartState = useAppSelector((state) => state.cart);
  const subtotal = calcSubtotalCheckout(cartState);
  const items = useAppSelector((state) => state.cart.items);
  const [freeShipping, setFreeShipping] = useState<boolean>(subtotal > 50000);
  useEffect(() => {
    setFreeShipping(subtotal > 50000);
  }, [subtotal]);

  return (
    <Flex
      direction="column"
      maxW="620px"
      w="35vw"
      backgroundColor="rgba(78, 110, 82, 0.4)"
      borderRadius="10"
      padding="1.2em"
      gap="0.5rem"
    >
      <Heading variant="sectionTitle" fontSize="4xl">
        Detalles del pedido
      </Heading>
      {items.map((item) => (
        <ProductItem
          key={item.product.id}
          product={item.product}
          quantity={item.quantity}
        />
      ))}
      <Heading variant="sectionTitle" fontSize="3xl">
        Resumen
      </Heading>
      <AppliedDiscounts
        paymentMethod={paymentMethod}
        freeShipping={freeShipping}
      />
      <Divider
        borderColor="brand.darkGreen"
        borderWidth="1px"
        mb="-2"
        w="99.5%"
      />
      <Totalizer
        paymentMethodDiscount={discount}
        shippingMethod={shippingMethod}
      />
    </Flex>
  );
};
