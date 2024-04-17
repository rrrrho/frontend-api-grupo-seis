import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { Payment } from "./Payment";
import { PersonalData } from "./PersonalData";
import { Shipping } from "./Shipping";
import { OrderDetails } from "./OrderDetails";
import FinishedCheckoutModal from "./FinishedCheckoutModal";
import React, { useState } from "react";
import { useSelector } from "react-redux";

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
  const products = useSelector((state) => state.products.products);
  const [total, setTotal] = useState<number>(calculateTotal(products));
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [shippingMethod, setShippingMethod] = useState<string>("shipping");

  return (
    <Flex w="90vw" alignItems="center" justifyContent="center" m="3em">
      <Flex direction="column" align="flex-start" mr="4em">
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
        <OrderDetails
          shippingMethod={shippingMethod}
          paymentMethod={paymentMethod}
          total={total}
          setTotal={setTotal}
        />
        <Button
          variant="brandThird"
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
