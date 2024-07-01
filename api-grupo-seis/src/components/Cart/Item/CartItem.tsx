import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { calculateDiscount, formatPrice } from '../../../utils/card';
import QuantityInput from './QuantityInput';
import { useAppDispatch } from '../../../context/hooks';
import { updateItem } from '../../../context/slices/cartSlice';
import DeleteButton from './DeleteButton';

type CartItemProps = {
    id: number,
    name: string,
    price: number,
    image: string,
    discount: number,
    stock: number,
    quantity: number
}

const CartItem = ({ id, name, price, image, discount, stock, quantity }: CartItemProps) => {
    const [ itemQty, setItemQty ] = useState(quantity);
    const dispatch = useAppDispatch();
  
    useEffect(() => {    
      dispatch(updateItem({ id: id, orderQty: itemQty }));
    }, [itemQty])

    return (
        <Flex gap={5} justifyContent="space-between" h="10vh" boxSizing='border-box'>
            <Flex gap={5}>
                <Image src={image} bg={'white'} boxSize={'6rem'} borderRadius={10}/>
                <Flex flexDir={'column'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontWeight={600} fontSize="0.8rem">{name}</Text>
                        <Text fontSize="0.7rem">Purina Pro Plan</Text>
                    </Box>
                    <DeleteButton id={id}/>
                </Flex>
            </Flex>
            <Flex flexDir="column" justifyContent={'space-between'}>
                <Flex flexDir={'column'} alignSelf={'flex-end'} alignItems={'flex-end'}>
                    {
                        discount ? (
                            <Text fontWeight={600} color={'grey'} fontSize="0.7rem" textDecoration={'line-through'}>${formatPrice(price * itemQty)}</Text>
                        ) : ''
                    }
                    <Text fontWeight={600} fontSize="0.9rem">${formatPrice(calculateDiscount(price * itemQty, discount))}</Text>
                </Flex>
                <QuantityInput stock={stock} quantity={itemQty} onChange={setItemQty}/>
            </Flex>
        </Flex>
    )
}

export default CartItem;
