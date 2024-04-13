import { Divider, Flex, Heading } from "@chakra-ui/react";
import { shipping } from "../index.tsx";
import React, { useEffect, useState } from "react";
import { Product } from "./Product.tsx";
import { AppliedDiscounts } from "./AppliedDiscounts.tsx";
import { Totalizer } from "./Totalizer.tsx";

type OrderDetailsProps = {
  products: {
    id: number;
    productName: string;
    price: number;
    discount: number;
    quantity: number;
    imgUrl: string;
  }[];
  setProducts: (products: any) => void;
  shippingMethod: string;
  total: number;
  setTotal: (total: number) => void;
  paymentMethod: string;
};
export const OrderDetails = ({
  products,
  setProducts,
  shippingMethod,
  paymentMethod,
  total,
  setTotal,
}: OrderDetailsProps) => {
  const [subtotal, setSubtotal] = useState<number>(total);
  const [freeShipping, setFreeShipping] = useState<boolean>(subtotal > 50000);
  const discount =
    paymentMethod === "card"
      ? subtotal * 0.05
      : paymentMethod === "wire"
      ? subtotal * 0.1
      : 0;

  useEffect(() => {
    let updatedTotal = subtotal - discount;
    if (!freeShipping && shippingMethod === "shipping") {
      updatedTotal += shipping;
    }
    setTotal(updatedTotal);
    setFreeShipping(subtotal > 50000);
  }, [subtotal, discount, freeShipping, shippingMethod, setTotal]);

  return (
    <Flex
      direction="column"
      maxW="620px"
      w="35vw"
      backgroundColor="rgba(78, 110, 82, 0.4)"
      borderRadius="10"
      padding="1em"
      gap="0.5rem"
    >
      <Heading variant="sectionTitle" fontSize="2em">
        Detalles del pedido
      </Heading>
      {products.map((product) => (
        <Product
          key={product.productName}
          product={product}
          products={products}
          setProducts={setProducts}
          setSubtotal={setSubtotal}
        />
      ))}
      <Heading variant="sectionTitle" fontSize="1.7em">
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
        total={total}
        discount={discount}
        freeShipping={freeShipping}
        subtotal={subtotal}
        shippingMethod={shippingMethod}
      />
    </Flex>
  );
};
