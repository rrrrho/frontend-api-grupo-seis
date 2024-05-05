import { Button, Flex, calc, useDisclosure } from "@chakra-ui/react";
import { Payment } from "./Payment";
import { PersonalData } from "./PersonalData";
import { Shipping } from "./Shipping";
import { OrderDetails } from "./OrderDetails";
import FinishedCheckoutModal from "./Modal/FinishedCheckoutModal";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { calculateDiscount } from "../../utils/card";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../../context/slices/cartSlice";

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
    const totalPriceForProduct = product.price * product.quantity;
    total += totalPriceForProduct;
  });
  return total;
};

export const calcTotal = (cartState, discount) => {
  let total = 0;

  cartState.items?.map((item) => {
    total +=
      calculateDiscount(item.product.price, item.product.discount) *
      item.quantity;
  });
  let shipping = 0;
  if (total < 50000) {
    shipping =
      typeof cartState.shipping.option !== "undefined"
        ? cartState.shipping.option.price
        : 0;
  }

  total += shipping;
  total = calculateDiscount(total, discount);
  return total;
};

export const calcSubtotal = (cartState) => {
  let subtotal = 0;

  cartState.items?.map((item) => {
    subtotal += item.product.price * item.quantity;
  });

  return subtotal;
};

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartState = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [shippingMethod, setShippingMethod] = useState<string>("shipping");
  const discount =
    paymentMethod === "card" ? 5 : paymentMethod === "wire" ? 10 : 0;

  useEffect(() => {
    calcTotal(cartState, discount);
  }, [paymentMethod, discount]);

  const handleFinishedCheckout = (e) => {
    e.preventDefault();
    if (cartState.shipping.option.id === 0 && shippingMethod === "shipping") {
      return;
    }
    onOpen();
    cartState.items.map((item) => {
      dispatch(deleteItem({ id: item.product.id }));
    });
    setTimeout(() => {
      onClose();
      navigate("/");
    }, 5000);
  };

  return (
    <form onSubmit={handleFinishedCheckout}>
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
            discount={discount}
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
            discount={discount}
          />
          <Button
            variant="brandThird"
            size="lg"
            w="10em"
            h="3em"
            mt="1em"
            type="submit"
          >
            Finalizar compra
          </Button>
        </Flex>
        <FinishedCheckoutModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </form>
  );
};

export default Checkout;
