import { CheckboxGroup, Checkbox, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { formatPrice } from "../../../utils/card.tsx";
import { useAppDispatch, useAppSelector } from "../../../context/hooks";
import { setShippingData, setShippingOption } from "../../../context/slices/cartSlice";

interface Props {
  options: Option[],
  postalCode: number
};

interface Option {
  id: number,
  name: string,
  cost: number
};

const ShippingOption = ({options, postalCode}: Props) => {
  const dispatch = useAppDispatch();
  const shippingData = useAppSelector((state) => state.cart.shipping);
  const [selectedOption, setSelectedOption] = useState([JSON.stringify(shippingData)]);

  const handleCheckboxChange = (value: any) => {
    if (value === undefined) {
      setSelectedOption(['']);
      dispatch(setShippingOption({ id: 0, price: 0 }));
    } else {
      const data = JSON.parse(value);
      setSelectedOption([value]);
      dispatch(setShippingData(data));
    }
  };

  return (
    <VStack gap={4} fontSize={'0.8rem'} mt={5}>
    {options?.map((option) => (
      <HStack justify={'space-between'} w={'100%'} align={'center'} border={'2px'} borderRadius={5} borderColor={'brand.lightGreen'} p={4}>
      <HStack gap={5}>
        <CheckboxGroup
        colorScheme="brand.darkGreen"
        value={selectedOption}
        onChange={(value) => handleCheckboxChange(value[1])}
        >
          <Checkbox
          key={option.id}
          value={JSON.stringify({postalCode: postalCode, option: {id: option.id, price: option.cost}})}
          size="lg"
          color="brand.darkGreen"
          borderColor="brand.darkGreen"
          _checked={{
            "& .chakra-checkbox__control": { background: "brand.darkGreen" },   
          }}/>
        </CheckboxGroup>
        <Flex flexDir={'column'} w={'85%'}>
          <Text fontWeight={600}>{option.name}</Text>
          <Text>Llega el lunes 16/05</Text>
        </Flex>
      </HStack>   
      <Text>${formatPrice(option.cost)}</Text>
    </HStack>
    ))}
    </VStack>
  );
};

export default ShippingOption;