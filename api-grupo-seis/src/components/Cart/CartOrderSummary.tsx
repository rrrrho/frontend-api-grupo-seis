import {
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import OrderSummaryItem from "./OrderSummaryItem";
import React, { useState } from "react";
import ShippingMethod from "./Shipping/ShippingMethod";
import { formatPrice } from "../../utils/card.tsx";
import { useAppSelector } from "../../context/hooks";
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface Props {
  onCloseCart: () => void;
}

export const CartOrderSummary = ({ onCloseCart }: Props) => {
  const navigate = useNavigate();
  const cartState = useAppSelector((state) => state.cart);
  const [showShippingMenu, setShowShippingMenu] = useState(
    cartState.shipping.postalCode > 0
  );

  const calcSubtotal = () => {
    let subtotal = 0;

    cartState.items?.map((item) => {
      subtotal += item.product.price * item.quantity;
    });

    return subtotal;
  };

  const calcTotal = () => {
    let total = calcSubtotal();
    let shipping =
      typeof cartState.shipping.option !== "undefined"
        ? cartState.shipping.option.price
        : 0;

    total += shipping;
    return total;
  };

  const goToCheckout = () => {
    navigate("/checkout");
    onCloseCart();
  };

  return (
    <Stack spacing="8" py={8}>
      <Heading size="md">Resumen de compra</Heading>
      <Stack spacing="6">
        <OrderSummaryItem
          label="Subtotal (sin envío)"
          value={`$${formatPrice(calcSubtotal())}`}
        />
        <OrderSummaryItem label="Envío a domicilio">
          <Link
            onClick={() => setShowShippingMenu(!showShippingMenu)}
            textDecor="underline"
          >
            {showShippingMenu ? "Cerrar" : "Calcular envío"}
          </Link>
        </OrderSummaryItem>
        {showShippingMenu && <ShippingMethod />}
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            ${formatPrice(calcTotal())}
          </Text>
        </Flex>
      </Stack>
      <VStack direction="column" align="center">
        <Button onClick={() => goToCheckout()} variant="brandPrimary" px={20}>
          Iniciar compra
        </Button>
        <HStack
          fontWeight="semibold"
          color={"brand.darkGreen"}
          fontSize={"0.9rem"}
        >
          <p>o</p>
          <Link onClick={onCloseCart}>Seguir comprando</Link>
        </HStack>
      </VStack>
    </Stack>
  );
};
