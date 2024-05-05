import {
  Divider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
} from "@chakra-ui/react";
import { calcSubtotal, calcTotal, formatPrice } from "../index.tsx";
import React from "react";
import { useAppSelector } from "../../../context/hooks.ts";

type TotalizerProps = {
  discount: number;
  shippingMethod: string;
};

export const Totalizer = ({ discount, shippingMethod }: TotalizerProps) => {
  const cartState = useAppSelector((state) => state.cart);
  const freeShipping = calcTotal(cartState, discount) > 50000;

  return (
    <TableContainer>
      <Table variant="totalizer">
        <Tbody>
          <Tr>
            <Td fontSize="sm" opacity="0.8">
              Subtotal (sin envío):
            </Td>
            <Td fontSize="sm" opacity="0.8">
              {formatPrice(calcSubtotal(cartState))}
            </Td>
          </Tr>
          {Boolean(discount) && (
            <Tr>
              <Td fontSize="sm" opacity="0.8">
                Descuento:
              </Td>
              <Td fontSize="sm" opacity="0.8">
                -
                {formatPrice(
                  calcSubtotal(cartState) - calcTotal(cartState, discount)
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
                    : formatPrice(cartState.shipping?.option?.price)}
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
              {formatPrice(calcTotal(cartState, discount))}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
