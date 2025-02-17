import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AddToCart from './AddToCart';
import { formatPrice, calculateDiscount, generateRating } from "../../../utils/card";
import { Product } from "../../../types/product";
import { Link } from "react-router-dom";

const Card = ({id, name, image, rating, voters, price, discount, quota, stock, bestseller}: Product) => {
    const producto = {
        id: id,
        name: name,
        image: image,
        rating: rating,
        voters: voters,
        price: price,
        discount: discount,
        quota: quota,
        stock: stock,
        bestseller: bestseller
    };
    return (
        <Flex w={{base: '17rem', xl: "18rem"}} bg="brand.lightBeige" borderRadius="15px" flexDir="column" position="relative" transition="all 0.2s" _hover={{transform: "scale(1.1)"}}>
            <Box bg="white" h="22vh" w="100%" borderTopRadius="15px" position="relative" cursor="pointer">
                {bestseller && (
                    <Text position="absolute" bottom="0" fontWeight="600" color="brand.darkBrown" fontSize={{base: '0.6rem', xl: "0.8rem"}} p="0.2rem 0.5rem" bg="brand.darkMustard" borderTopRightRadius="5px">
                        ¡Más vendido!
                    </Text>
                )}
                <Link to= {`/product-detail/${producto.id}`} state = { producto }>

                    <Image
                        src={image}
                        objectFit="contain"
                        w="100%"
                        h="100%"
                        borderTopRadius="15"
                    />
                </Link>
            </Box>
            <AddToCart id={id} name={name} image={image} rating={rating} voters={voters} price={price} discount={discount} quota={quota} stock={stock} bestseller={bestseller}/>
            <Box p="1.4rem">
                <Box h="7.6vh">
                    <Text fontWeight="600" fontSize={{base: '0.8rem', xl: "1rem"}} cursor="pointer">{name}</Text>
                    <Flex gap={1} alignItems={'center'}>
                        <Text fontSize={{base: '0.6rem', xl: "0.8rem"}}>{rating}</Text>
                        <Flex alignItems={'center'}>{generateRating(rating)}</Flex>
                        <Text fontSize={{base: '0.6rem', xl: "0.8rem"}}>({voters})</Text>
                    </Flex>
                </Box>
                <Flex flexDir="column" mt={2}>
                    {discount ? (
                        <Text fontSize={{base: '0.5rem', xl: "0.7rem"}} textDecoration="line-through" color="gray">${formatPrice(price)}</Text>
                    ) : (
                        <Text fontSize={{base: '0.5rem', xl: "0.7rem"}} color="brand.lightBeige">aa</Text>
                    )}
                    <Flex alignItems="center">
                        {discount ? (
                            <>
                                <Text fontWeight="600" fontSize={{base: '0.8rem', xl: "1rem"}}>${formatPrice(calculateDiscount(price, discount))}</Text>
                                <Text fontSize={{base: '0.5rem', xl: "0.7rem"}} ml={1} color="brand.darkBrown">{discount}%</Text>
                            </>
                        ) : (
                            <Text fontWeight="600" fontSize={{base: '0.8rem', xl: "1rem"}}>${formatPrice(price)}</Text>
                        )}
                    </Flex>
                    <Text fontSize={{base: '0.5rem', xl: "0.7rem"}}>En 6 cuotas de ${formatPrice(quota)}</Text>
                </Flex>
                <Text mt={3} p="0.2rem 0.5rem" borderRadius={3} bg="brand.lightBrown" w="fit-content" fontSize={{base: '0.5rem', xl: "0.7rem"}} color="brand.cream">Envío gratis</Text>
            </Box>
        </Flex>
    );
};

export default Card;