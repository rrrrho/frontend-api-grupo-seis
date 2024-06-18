import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
    values: string[],
    onClick: (text: string) => void
};

const renderButtons = ({values, onClick}: Props) => {
    const [activeFilter, setActiveFilter] = useState<string>(localStorage.getItem('filter') || 'none')
    const buttons: JSX.Element[] = [];

    const handleClick = (text: string) => {
        setActiveFilter(text);
        localStorage.setItem('filter', text);
        onClick(text);
    };
    
    for (let i = 0; i < values.length; i++) {
        buttons.push(
            <Button 
            key={i}
            variant={'brandPrimary'}
            bg={activeFilter === values[i] ? "brand.lightBeige" : "brand.darkBrown"}
            color={activeFilter === values[i] ? "brand.darkBrown" : "brand.lightBeige"}
            h={'fit-content'} 
            py={{ base: "0.6rem", xl: "0.8rem" }} 
            fontSize={{ base: "0.7rem", xl: "1rem" }} 
            pr={{ base: "0.7rem", xl: "1.2rem" }} 
            pl={{ base: "0.7rem", xl: "1.2rem" }}
            onClick={() => handleClick(values[i])}>
                {values[i]}
            </Button>
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