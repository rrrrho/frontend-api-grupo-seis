import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export type CartItemMetaProps = {
    name: string
    image: string,
    price: string
  }

const CartItemMeta = ({name, image, price}: CartItemMetaProps) => {
    return (
        <Flex gap={4}>
            <Image src={image} boxSize={'6rem'} borderRadius={10}/>
            <Flex flexDir={'column'} alignItems={'flex-start'} justifyContent={'space-between'}>
                <Box>
                    <Text fontWeight={600} fontSize="0.8rem">{name}</Text>
                    <Text fontSize="0.7rem">Purina Pro Plan</Text>
                </Box>
            </Flex>
            <Flex flexDir={'column'} alignSelf={'flex-end'} alignItems={'flex-end'}>
                <Text fontWeight={600} color={'grey'} fontSize="0.7rem" textDecoration={'line-through'}>$2000,00</Text>
                <Text fontWeight={600} fontSize="0.9rem">${price},00</Text>
            </Flex>
        </Flex>
    )
}

export default CartItemMeta;