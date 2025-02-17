import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const pages = [
    {
        number: 1,
        selected: true
    },
    {
        number: 2,
        selected: false
    },
    {
        number: 3,
        selected: false
    },
    {
        number: 4,
        selected: false
    },
    {
        number: 5,
        selected: false
    }
];

const Paginator = ({alignSelf, m}) => {
    return (
        <Flex gap={4} borderRadius="5px" alignItems="center" alignSelf={alignSelf} m={m}>
            <Flex as="button" alignItems="center" justifyContent="center" bg="brand.darkBrown" color="brand.lightBeige" borderRadius={5} transition="all .2s ease-in-out" h="3rem" w="3rem" _hover={{bg: "brand.lightBeige", color: "brand.darkBrown", transform: "scale(1.2)"}}>
                <Icon as={FaArrowLeft}/>
            </Flex>
            {pages.map((page) => page.selected ? (
                    <Box as="button" fontWeight="600" w="3rem" h="100%" bg="brand.lightBeige" borderRadius={5} color="brand.darkBrown">{page.number}</Box>
                ) :
                (
                    <Box as="button" fontWeight="600" w="3rem" h="100%" color="brand.lightBeige" transition="all .2s ease-in-out" borderRadius={5} bg="brand.darkBrown" _hover={{bg: "brand.lightBeige", color: "brand.darkBrown", transform: "scale(1.2)"}}>{page.number}</Box>)
                )}
            <Flex as="button" alignItems="center" justifyContent="center" bg="brand.darkBrown" color="brand.lightBeige" transition="all .2s ease-in-out" borderRadius={5} h="3rem" w="3rem" _hover={{bg: "brand.lightBeige", color: "brand.darkBrown", transform: "scale(1.2)"}}>
                <Icon as={FaArrowRight}/>
            </Flex>
        </Flex>
    );
};

export default Paginator;