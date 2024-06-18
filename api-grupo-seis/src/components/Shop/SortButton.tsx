import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
    text: string,
    key: number,
    onClick: (text: string)=>void
}

const SortButton = ({text, key, onClick}: Props) => {
    const handleClick = () => {
        onClick(text);
    };

    return (
        <Button 
        key={key}
        variant={'brandPrimary'} 
        h={'fit-content'} 
        py={{ base: "0.6rem", xl: "0.8rem" }} 
        fontSize={{ base: "0.7rem", xl: "1rem" }} 
        pr={{ base: "0.7rem", xl: "1.2rem" }} 
        pl={{ base: "0.7rem", xl: "1.2rem" }}
        onClick={handleClick}>
            {text}
        </Button>
    )
};

export default SortButton;