import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
    values: string[],
    onClick: (text: string) => void
};

const renderButtons = ({values, onClick}: Props) => {
    const [activeFilter, setActiveFilter] = useState<string>('Todo')
    const buttons: JSX.Element[] = [];

    const handleClick = (text: string) => {
        setActiveFilter(text);
        onClick(text);
    };
    
    for (let i = 0; i < values.length; i++) {
        buttons.push(
            <Box
            as={'button'}
            key={i}
            disabled={activeFilter === values[i]}
            bg={activeFilter === values[i] ? "brand.lightBeige" : "brand.darkBrown"}
            color={activeFilter === values[i] ? "brand.darkBrown" : "brand.lightBeige"}
            fontWeight="600"
            px={'1rem'}
            h={'3.1rem'}
            borderRadius={8}
            transition="all .2s ease-in-out"
            _hover={activeFilter != values[i] ? {
                bg: "brand.lightBeige",
                color: "brand.darkBrown",
                transform: "scale(1.1)"
            } : ''}
            onClick={() => handleClick(values[i])}>
                {values[i]}
            </Box>
        );
    };

    return buttons;
};

const SortButton = ({values, onClick}: Props) => {
    return (
        <>
            {renderButtons({values, onClick})}
        </>
    )
};

export default SortButton;