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
import { formatPrice, shipping } from "../index.tsx";
import React from "react";

type TotalizerProps = {
  total: number;
  discount: number;
  freeShipping: boolean;
  subtotal: number;
  shippingMethod: string;
};

export const Totalizer = ({
  total,
  discount,
  freeShipping,
  subtotal,
  shippingMethod,
}: TotalizerProps) => {
  return (
    <TableContainer>
      <Table variant="totalizer">
        <Tbody>
          <Tr>
            <Td fontSize="0.9em" opacity="0.8">
              Subtotal:
            </Td>
            <Td fontSize="0.9em" opacity="0.8">
              {formatPrice(subtotal)}
            </Td>
          </Tr>
          {Boolean(discount) && (
            <Tr>
              <Td fontSize="0.9em" opacity="0.8">
                Descuento:
              </Td>
              <Td fontSize="0.9em" opacity="0.8">
                -{formatPrice(discount)}
              </Td>
            </Tr>
          )}
          {shippingMethod === "shipping" && (
            <Tr>
              <Td fontSize="0.9em" opacity="0.8">
                Envío:
              </Td>
              <Td fontSize="0.9em" opacity="0.8">
                {freeShipping ? "Gratis" : formatPrice(shipping)}
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
            <Th fontSize="1.5em" opacity="0.8">
              Total:
            </Th>
            <Th fontSize="1.5em" opacity="0.8">
              {freeShipping || shippingMethod !== "shipping"
                ? formatPrice(total)
                : formatPrice(total)}
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
