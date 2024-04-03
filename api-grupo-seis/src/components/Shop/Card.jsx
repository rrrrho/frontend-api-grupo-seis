import { Box, Flex, Image, Text, Icon, Button } from "@chakra-ui/react";
import { AiFillShopping } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Card = () => {
    return (
        <Flex h="fit-content" w="15vw" bg="brand.lightBeige" borderRadius="15" flexDir="column" position="relative" transition="all .2s" _hover={{transform: "scale(1.1)"}}>
            <Box bg="white" h="22vh" w="100%" borderRadius="15" position="relative" cursor="pointer">
                <Text position="absolute" bottom="0" fontWeight="600" color="brand.darkBrown" fontSize="0.8rem" p="0.2rem 0.5rem" bg="brand.darkMustard" borderTopRightRadius={5}>¡Mas vendido!</Text>
                <Image src="src/assets/img/lataDelightsTurkey.webp" objectFit="cover" w="100%" h="100%" borderTopRadius="15"></Image>
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
                <Text 
                fontWeight="600" 
                fontSize="1rem"
                cursor="pointer"
                >
                    Alimento Old Prince Indoor Gato Adulto - 3 Kg
                </Text>
                <Flex gap={1}>
                    <Text fontSize="0.8rem">4.5</Text>
                    <Box>
                        <Icon 
                        as={FaStar} 
                        color="brand.darkMustard"
                        >
                        </Icon>
                        <Icon 
                        as={FaStar} 
                        color="brand.darkMustard" 
                        >
                        </Icon>
                        <Icon 
                        as={FaStar} 
                        color="brand.darkMustard" 
                        >
                        </Icon>
                        <Icon 
                        as={FaStar} 
                        color="brand.darkMustard" 
                        >
                        </Icon>
                        <Icon 
                        as={FaStarHalfAlt} 
                        color="brand.darkMustard" 
                        >
                        </Icon>
                    </Box>
                    <Text fontSize="0.8rem">(405)</Text>
                </Flex>
                <Flex flexDir="column" mt={2}>
                    <Text fontSize="0.7rem" textDecoration="line-through" color="gray">$20.000,00</Text>
                    <Flex alignItems="center">
                        <Text fontWeight="600" fontSize="1rem">$16.890,00</Text>
                        <Text fontSize="0.7rem" ml={1} color="brand.darkBrown">25%</Text>
                    </Flex>
                    <Text fontSize="0.7rem">En 6 cuotas de $2.500,00</Text>
                </Flex>
                <Text mt={3} p="0.2rem 0.5rem" borderRadius={3} bg="brand.lightBrown" w="fit-content" fontSize="0.7rem" color="brand.cream">Envio gratis</Text>
            </Box>
        </Flex>
    )
};

export default Card;