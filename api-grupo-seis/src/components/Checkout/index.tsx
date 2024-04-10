import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { Payment } from "./Payment";
import { PersonalData } from "./PersonalData/PersonalDataForm";
import { Shipping } from "./Shipping";
import { ProductDetails } from "./ProductDetails";
import FinishedCheckoutModal from "./FinishedCheckoutModal";
import React, { useState } from "react";
import { products as initialProducts } from "./checkout-data";

export const shipping = 6500;

export function formatPrice(price: number): string {
  const formattedPrice = parseFloat(String(price)).toFixed(2);

  const [integerPart, decimalPart] = formattedPrice.split(".");

  const integerWithSeparators = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  return `$${integerWithSeparators},${decimalPart}`;
}
export const calculateTotal = (products) => {
  let total = 0;
  products.forEach((product) => {
    const discountedPrice = product.price - product.discount;
    const totalPriceForProduct = discountedPrice * product.quantity;
    total += totalPriceForProduct;
  });
  return total;
};
const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [total, setTotal] = useState<number>(calculateTotal(initialProducts));
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [shippingMethod, setShippingMethod] = useState<string>("shipping");
  // TODO: agregar tipo a este useState
  const [products, setProducts] = useState(initialProducts);
  return (
    <Flex w="90vw" alignItems="center" justifyContent="center" m="3em">
      <Flex direction="column" align="flex-start" mr="3em">
        <PersonalData />
        <Shipping
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
        />
        <Payment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          total={total}
        />
      </Flex>
      <Flex
        direction="column"
        align="center"
        alignSelf="flex-start"
        position="sticky"
        top="0"
      >
        <ProductDetails
          products={products}
          setProducts={setProducts}
          shippingMethod={shippingMethod}
          paymentMethod={paymentMethod}
          total={total}
          setTotal={setTotal}
        />
        <Button
          variant="thirdStyle"
          size="lg"
          w="10em"
          h="3em"
          mt="1em"
          onClick={onOpen}
        >
          Finalizar compra
        </Button>
      </Flex>
      <FinishedCheckoutModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Checkout;
