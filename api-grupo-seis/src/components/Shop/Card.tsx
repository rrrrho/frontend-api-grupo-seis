import { Box, Flex, Image, Text, Icon, Button } from "@chakra-ui/react";
import { AiFillShopping } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import React from "react";
import { formatPrice, calculateDiscount } from "../../utils/functions";

function generateRating(rating: number): JSX.Element[] {
    const icons: JSX.Element[] = [];
    const maxRating = 5;
    const roundedRating = Math.round(rating);
    const decimals = rating % 1;

    for (let i = 1; i <= maxRating; i++) {
        if (i < roundedRating || (i === roundedRating && decimals < 0.5)) {
            icons.push(
                <Icon 
                as={FaStar} 
                color="brand.darkMustard"
                key={i}
                />);
        } else if (i === roundedRating) {
            icons.push(
                <Icon 
                as={FaStarHalfAlt} 
                color="brand.darkMustard"
                key={i}
                />);
        } else {
            icons.push(
                <Icon 
                as={FaRegStar} 
                color="brand.darkMustard"
                key={i}
                />);
        }
    }

    return icons;
}

const Card = ({title, img, rating, voters, total, discount, quota, bestseller}) => {
    return (
        <Flex w="15vw" bg="brand.lightBeige" borderRadius="15" flexDir="column" position="relative" transition="all .2s" _hover={{transform: "scale(1.1)"}}>
            <Box bg="white" h="22vh" w="100%" borderTopRadius="15" position="relative" cursor="pointer">
                {
                    bestseller ? (
                        <Text position="absolute" bottom="0" fontWeight="600" color="brand.darkBrown" fontSize="0.8rem" p="0.2rem 0.5rem" bg="brand.darkMustard" borderTopRightRadius={5}>¡Mas vendido!</Text>
                    ) : (
                        <></>
                    )
                }
                <Image src={img} objectFit="contain" w="100%" h="100%" borderTopRadius="15"></Image>
            </Box>
            <Button 
            position="absolute"
            bottom="45%"
            left="77%"
            borderRadius="100%"
            bg="brand.lightBeige"
            w="3rem"
            h="3rem"
            cursor="pointer"
            _hover="none"
            >
                <Icon 
                as={AiFillShopping} 
                color="brand.darkBrown" 
                boxSize={7}>
                </Icon>
            </Button>
            <Box p="1.4rem">
                <Box h="7.6vh">
                    <Text 
                    fontWeight="600" 
                    fontSize="1rem"
                    cursor="pointer"
                    >
                        {title}
                    </Text>
                    <Flex gap={1}>
                        <Text fontSize="0.8rem">{rating}</Text>
                        <Box>
                            {generateRating(rating)}
                        </Box>
                        <Text fontSize="0.8rem">({voters})</Text>
                    </Flex>
                </Box>
                <Flex flexDir="column" mt={2}>
                    { discount ? <Text fontSize="0.7rem" textDecoration="line-through" color="gray">${formatPrice(total)}</Text> : (<Text fontSize="0.7rem" color="brand.lightBeige">aa</Text>)}
                    <Flex alignItems="center">
                        { discount ? (
                        <>
                            <Text fontWeight="600" fontSize="1rem">${formatPrice(calculateDiscount(total, discount))}</Text>
                            <Text fontSize="0.7rem" ml={1} color="brand.darkBrown">{discount}%</Text>
                        </>
                        ) : (
                            <Text fontWeight="600" fontSize="1rem">${formatPrice(total)}</Text>
                        )}
                    </Flex>
                    <Text fontSize="0.7rem">En 6 cuotas de ${quota}</Text>
                </Flex>
                <Text mt={3} p="0.2rem 0.5rem" borderRadius={3} bg="brand.lightBrown" w="fit-content" fontSize="0.7rem" color="brand.cream">Envio gratis</Text>
            </Box>
        </Flex>
    )
};

export default Card;