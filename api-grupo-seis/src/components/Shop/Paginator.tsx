import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const renderButtons = (pages: number, handleClick: (page: number) => void): JSX.Element[] => {
    const buttons: JSX.Element[] = [];

    for (let i = 0; i < pages; i++) {

        buttons.push(
            <Box 
            key={i}
            as="button" 
            fontWeight="600" 
            w="3rem" 
            h="100%" 
            bg="brand.lightBeige" 
            borderRadius={5} 
            color="brand.darkBrown"
            onClick={() => handleClick(i)}>
                {i + 1}
            </Box>
        );
    }

    return buttons;
}

interface Props {
    pages: number,
    handleClick: (page: number) => void
}

const Paginator = ({pages, handleClick}: Props) => {
    const handleButtonClick = (page: number) => {
        handleClick(page);
    };

    return (
        <Flex gap={4} borderRadius="5px" alignItems="center" alignSelf={'center'} m={'3rem'}>
            <Flex as="button" alignItems="center" justifyContent="center" bg="brand.darkBrown" color="brand.lightBeige" borderRadius={5} transition="all .2s ease-in-out" h="3rem" w="3rem" _hover={{bg: "brand.lightBeige", color: "brand.darkBrown", transform: "scale(1.2)"}}>
                <Icon as={FaArrowLeft}/>
            </Flex>
            {renderButtons(pages, handleButtonClick)}
            <Flex as="button" alignItems="center" justifyContent="center" bg="brand.darkBrown" color="brand.lightBeige" transition="all .2s ease-in-out" borderRadius={5} h="3rem" w="3rem" _hover={{bg: "brand.lightBeige", color: "brand.darkBrown", transform: "scale(1.2)"}}>
                <Icon as={FaArrowRight}/>
            </Flex>
        </Flex>
    );
};

export default Paginator;