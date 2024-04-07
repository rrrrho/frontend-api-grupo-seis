import { Box, Container, Flex, Icon, Image, Link, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

type CartItemProps = {
    id:number,
    name: string
    author?: string
    quantity: number,
    price: number,
    img: string
  }

const CartItem = ({ id, name, quantity, price, img }: CartItemProps) => {
    return (
        <Flex gap={5} justifyContent="center" h="10vh" boxSizing='border-box' w="100%">
            <Flex w="9rem" bg="white" borderRadius={15} overflow="hidden">
                <Image src={img} objectFit="contain"></Image>
            </Flex>
            <Flex flexDir={'column'} alignItems={'flex-start'} justifyContent={'space-between'} gap={2}>
                <Box>
                    <Text fontWeight={600} fontSize="0.9rem">{name}</Text>
                    <Text fontSize="0.8rem">Purina Pro Plan</Text>
                </Box>
                <Flex as='button' alignItems={'center'} borderRadius={10} gap={1} fontSize={'0.8rem'} bg={'brand.darkBrown'} color={'brand.lightBeige'} p={'0.1rem 0.5rem'}>
                    <Icon as={FaRegTrashAlt}/>Remover
                </Flex>
            </Flex>
            <Flex flexDir="column" justifyContent={'space-between'}>
                <Flex flexDir={'column'} alignSelf={'flex-end'} alignItems={'flex-end'}>
                    <Text fontWeight={600} color={'grey'} fontSize="0.7rem" textDecoration={'line-through'}>$2000,00</Text>
                    <Text fontWeight={600} fontSize="0.9rem">${price},00</Text>
                </Flex>
                <Flex gap={2} alignItems={'center'} h="1.7rem" borderRadius={5} bg={'brand.darkBrown'} color="brand.lightBeige">
                    <Box as="button" w="2rem" fontWeight={600}>-</Box>
                    <Text color="brand.lightBeige" fontSize={'0.9rem'}>1</Text>
                    <Box as="button" w="2rem" fontWeight={600}>+</Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CartItem;