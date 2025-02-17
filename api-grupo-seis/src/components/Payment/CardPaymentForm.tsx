import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { calcTotalCheckout } from "../../utils/checkout.tsx";
import { formatPrice } from "../../utils/card.tsx";
import { useAppSelector } from "../../context/hooks.ts";

type CardPaymentFormProps = {
  discount: number;
};

export const CardPaymentForm = ({ discount }: CardPaymentFormProps) => {
  const cartState = useAppSelector((state) => state.cart);
  const total = calcTotalCheckout(cartState, discount);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [expirationMonth, setExpirationMonth] = useState<number>(0);
  const [expirationYear, setExpirationYear] = useState<number>(0);
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardHolderDni, setCardHolderDni] = useState<string>("");
  const [installments, setInstallments] = useState<number>(1);
  return (
    <Stack gap="1rem">
      <Flex align="center" w="100%">
        <FormControl isRequired mr="0.5rem" w="49%">
          <FormLabel mb="0.1em">Número de tarjeta</FormLabel>
          <NumberInput variant="brandSecondary">
            <NumberInputField onChange={(e) => setCardNumber(e.target.value)} />
          </NumberInput>
        </FormControl>
        <Flex direction="row" align="center" justify="center" w="50%">
          <FormControl isRequired w="25%" mr="0.5em">
            <FormLabel mb="0.1em">CVV</FormLabel>
            <NumberInput variant="brandSecondary">
              <NumberInputField
                onChange={(e) => setSecurityCode(e.target.value)}
                padding="0"
                textAlign="center"
              />
            </NumberInput>
          </FormControl>
          <FormControl isRequired w="75%" mr="0.5em">
            <FormLabel mb="0.1em">Fecha de vencimiento</FormLabel>
            <Flex align="center">
              <Select
                placeholder="Mes"
                onChange={(e) => setExpirationMonth(Number(e.target.value))}
                variant="brandSecondary"
                sx={{
                  option: {
                    backgroundColor: "brand.lightBeige",
                  },
                }}
              >
                {[...Array(12).keys()].map((month) => (
                  <option key={month} value={month + 1}>
                    {month + 1}
                  </option>
                ))}
              </Select>
              <Text mx="0.5em">/</Text>
              <Select
                placeholder="Año"
                onChange={(e) => setExpirationYear(Number(e.target.value))}
                variant="brandSecondary"
                sx={{
                  option: {
                    backgroundColor: "brand.lightBeige",
                  },
                }}
              >
                {[...Array(10).keys()].map((year) => (
                  <option key={year} value={2024 + year}>
                    {2024 + year}
                  </option>
                ))}
              </Select>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
      <Flex direction="row" align="center">
        <FormControl isRequired mr="0.5em">
          <FormLabel mb="0.1em">Titular de la tarjeta</FormLabel>
          <Input
            variant="brandSecondary"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired mr="0.5em">
          <FormLabel mb="0.1em">DNI del titular</FormLabel>
          <NumberInput variant="brandSecondary">
            <NumberInputField
              onChange={(e) => setCardHolderDni(e.target.value)}
            />
          </NumberInput>
        </FormControl>
      </Flex>

      <FormControl isRequired w="48.5%">
        <FormLabel mb="0.1em">Cuotas</FormLabel>
        <Select
          placeholder="Seleccionar"
          onChange={(e) => setInstallments(Number(e.target.value))}
          variant="brandSecondary"
          sx={{
            option: {
              backgroundColor: "brand.lightBeige",
            },
          }}
        >
          <option value="1">1 cuota de ${formatPrice(total)}</option>
          <option value="3">3 cuotas ${formatPrice(total / 3)}</option>
          <option value="6">6 cuotas ${formatPrice(total / 6)}</option>
          <option value="12">12 cuotas ${formatPrice(total / 12)}</option>
        </Select>
      </FormControl>
    </Stack>
  );
};
