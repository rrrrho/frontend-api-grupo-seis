import {
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
  calc,
} from "@chakra-ui/react";
import {
  calcSubtotalCheckout,
  calcTotalCheckout,
} from "../../utils/checkout.tsx";
import { formatPrice } from "../../utils/card.tsx";
import React from "react";
import { useAppSelector } from "../../context/hooks.ts";

type TotalizerProps = {
  paymentMethodDiscount: number;
  shippingMethod: string;
};

export const Totalizer = ({
  paymentMethodDiscount,
  shippingMethod,
}: TotalizerProps) => {
  const cartState = useAppSelector((state) => state.cart);
  const freeShipping =
    calcTotalCheckout(cartState, paymentMethodDiscount) > 50000;

  return (
    <TableContainer>
      <Table variant="totalizer">
        <Tbody>
          <Tr>
            <Td fontSize="sm" opacity="0.8">
              Subtotal (sin envío):
            </Td>
            <Td fontSize="sm" opacity="0.8">
              ${formatPrice(calcSubtotalCheckout(cartState))}
            </Td>
          </Tr>
          {Boolean(paymentMethodDiscount) && (
            <Tr>
              <Td fontSize="sm" opacity="0.8">
                Descuento:
              </Td>
              <Td fontSize="sm" opacity="0.8">
                - $
                {calcSubtotalCheckout(cartState) -
                  calcTotalCheckout(cartState, paymentMethodDiscount) >
                0
                  ? formatPrice(
                      calcSubtotalCheckout(cartState) -
                        calcTotalCheckout(cartState, paymentMethodDiscount)
                    )
                  : formatPrice(
                      calcTotalCheckout(cartState, 0) -
                        calcTotalCheckout(cartState, paymentMethodDiscount)
                    )}
              </Td>
            </Tr>
          )}
          {shippingMethod === "shipping" &&
            cartState.shipping?.option?.id !== 0 && (
              <Tr>
                <Td fontSize="sm" opacity="0.8">
                  Envío:
                </Td>
                <Td fontSize="sm" opacity="0.8">
                  {freeShipping
                    ? "Gratis"
                    : `$${formatPrice(cartState.shipping?.option?.price)}`}
                </Td>
              </Tr>
            )}
        </Tbody>
        <Divider
          borderColor="brand.darkGreen"
          borderWidth="1px"
          w="99.5%"
          mt="2"
        />
        <Tfoot>
          <Tr>
            <Th fontSize="2xl" opacity="0.8">
              Total:
            </Th>
            <Th fontSize="2xl" opacity="0.8">
              $
              {formatPrice(calcTotalCheckout(cartState, paymentMethodDiscount))}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
