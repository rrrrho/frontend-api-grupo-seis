import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
    pages: number;
    handleClick: (page: number) => void;
};

const Paginator: React.FC<Props> = ({ pages, handleClick }: Props) => {
    let activePage = parseInt(localStorage.getItem('page') as string) | 0;

    const handleButtonClick = (page: number) => {
        if (page < pages && page > -1) {
            activePage = page;
            localStorage.setItem('page', JSON.stringify(page)); 
            handleClick(page);
        };
    };

    const renderButtons = () => {
        const buttons: JSX.Element[] = [];

        for (let i = 0; i < pages; i++) {
            buttons.push(
                <Box
                    key={i}
                    as="button"
                    fontWeight="600"
                    w="3rem"
                    h="100%"
                    bg={activePage === i ? "brand.lightBeige" : "brand.darkBrown"}
                    borderRadius={5}
                    color={activePage === i ? "brand.darkBrown" : "brand.lightBeige"}
                    disabled={activePage === i}
                    onClick={() => handleButtonClick(i)}
                    transition="all .2s ease-in-out"
                    _hover={activePage != i ? {
                        bg: "brand.lightBeige",
                        color: "brand.darkBrown",
                        transform: "scale(1.2)"
                    } : ''}
                >
                    {i + 1}
                </Box>
            );
        };
        return buttons;
    };

    return (
        <Flex gap={4} borderRadius="5px" alignItems="center" alignSelf={'center'} m={'3rem'}>
            <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                bg={activePage === 0 ? "brand.lightBeige" : "brand.darkBrown"}
                color={activePage === 0 ? "brand.darkBrown" : "brand.lightBeige"}
                borderRadius={5}
                transition="all .2s ease-in-out"
                h="3rem"
                w="3rem"
                onClick={() => handleButtonClick(activePage - 1)}
                _hover={activePage > 0 ? {
                    bg: "brand.lightBeige",
                    color: "brand.darkBrown",
                    transform: "scale(1.2)"
                } : ''}
            >
                <Icon as={FaArrowLeft} />
            </Flex>
            {renderButtons()}
            <Flex
                as="button"
                alignItems="center"
                justifyContent="center"
                bg={activePage >= pages - 1 ? "brand.lightBeige" : "brand.darkBrown"}
                color={activePage >= pages - 1 ? "brand.darkBrown" : "brand.lightBeige"}
                transition="all .2s ease-in-out"
                borderRadius={5}
                h="3rem"
                w="3rem"
                onClick={() => handleButtonClick(activePage + 1)}
                _hover={activePage < pages - 1 ? {
                    bg: "brand.lightBeige",
                    color: "brand.darkBrown",
                    transform: "scale(1.2)"
                } : ''}
            >
                <Icon as={FaArrowRight} />
            </Flex>
        </Flex>
    );
};

export default Paginator;