import { Box, Icon, Text } from '@chakra-ui/react';
import { FaCartShopping } from "react-icons/fa6";
import React from 'react';
import { useAppSelector } from '../../context/hooks';

interface Props {
  onClick: () => void,
  ref: any
};

const CartButton = ({onClick, ref}: Props) => {
  const cartItems = useAppSelector((state) => state.cart.items.length);
  
  return (
    <Box pos={'relative'} h={'fit-content'} w={'fit-content'}>
      {cartItems > 0 && (
        <Text 
          bg={'brand.lightBeige'} 
          color={'brand.darkGreen'} 
          fontWeight={600}
          fontSize={15} 
          pos={'absolute'} 
          bottom={'15%'}
          right={'0%'} 
          w={'22px'} 
          h={'22px'} 
          textAlign={'center'} 
          borderRadius={'full'}
          zIndex={1}
        >
          {cartItems}
        </Text>)
      }
      
      <Box
        as={'button'}
        ref={ref}
        onClick={onClick}
      >
        <Icon as={FaCartShopping} color={'brand.darkGreen'} boxSize={'2.8rem'} />
      </Box>
    </Box>
  );
};

export default CartButton;