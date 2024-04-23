import { Box, Flex, Input, useNumberInput } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';

interface Props {
  quantity: number,
  stock: number,
  onChange: (value:number) => void
}

const QuantityInput = ({onChange, quantity, stock}: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  useNumberInput({
    step: 1,
    value: quantity,
    defaultValue: 1,
    min: 1,
    max: stock < 10 ? stock : 10,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const handleChange = (operation: 'SUMA' | 'RESTA') => {
    if (operation === 'SUMA' && quantity < 10) {
      onChange(quantity + 1);
    };
    
    if (operation === 'RESTA' && quantity > 1) {
      onChange(quantity - 1);
    };
  };

  useEffect(() => {}, [quantity])

  return (
    <Flex gap={2} alignItems={'center'} h={'1.7rem'} w={'fit-content'} borderRadius={5} bg={'brand.darkBrown'} color="brand.lightBeige">
        <Box as={'button'} px={3} onClick={() => handleChange('RESTA')} {...dec}>-</Box>
        <Input {...input} color={'brand.lightBeige'} border={'none'} w={'2.5rem'} textAlign={'center'} h={'fit-content'} isDisabled _disabled={{ opacity: 1 }}/>
        <Box as={'button'} px={3} onClick={() => handleChange('SUMA')} {...inc}>+</Box>
    </Flex>
  );
};

export default QuantityInput;