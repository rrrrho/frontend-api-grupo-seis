import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import ShippingOption from "../../../Cart/Shipping/ShippingOption";
import options from "../../../Cart/Shipping/options.json";
import { useAppSelector } from "../../../../context/hooks";

type ShippingFormProps = {
  shippingNotSelected: boolean;
};

export const ShippingForm = ({ shippingNotSelected }: ShippingFormProps) => {
  const cartSlice = useAppSelector((state) => state.cart);
  const [address, setAddress] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [zipCode, setZipCode] = useState<number>(
    cartSlice.shipping?.postalCode
  );
  const [city, setCity] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [receiver, setReceiver] = useState<string>("");

  return (
    <Stack gap="1rem" mt="1em">
      <Flex align="center" w="100%">
        <FormControl isRequired w="50%" mr="0.5em">
          <FormLabel mb="0.1em">Dirección</FormLabel>
          <Input
            variant="brandSecondary"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <Flex direction="row" align="center" justify="center" w="50%">
          <FormControl isRequired mr="0.5em">
            <FormLabel mb="0.1em">Número</FormLabel>
            <NumberInput variant="brandSecondary">
              <NumberInputField onChange={(e) => setNumber(e.target.value)} />
            </NumberInput>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb="0.1em">Código postal</FormLabel>
            <NumberInput variant="brandSecondary" value={zipCode}>
              <NumberInputField
                onChange={(e) => setZipCode(Number(e.target.value))}
              />
            </NumberInput>
          </FormControl>
        </Flex>
      </Flex>
      <Flex direction="row" align="center">
        <FormControl isRequired mr="0.5em">
          <FormLabel mb="0.1em">Provincia</FormLabel>
          <Input
            variant="brandSecondary"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel mb="0.1em">Ciudad</FormLabel>
          <Input
            variant="brandSecondary"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
      </Flex>
      <FormControl isRequired w="49.2%">
        <FormLabel mb="0.1em">Nombre del receptor</FormLabel>
        <Input
          variant="brandSecondary"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </FormControl>
      <ShippingOption options={options} postalCode={zipCode} />
      {shippingNotSelected && (
        <p style={{ color: "red", fontSize: "0.8em" }}>
          Debe seleccionar un método de envío
        </p>
      )}
    </Stack>
  );
};
