import { Box, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = React.useState('');
    const navigate = useNavigate();

    const handleClick = (value: string) => {
        localStorage.setItem('keywords', value);
        navigate(`/shop/${value}`);
        setValue('');
    };
  
    return (
        <InputGroup>
            <Input
            value={value}
            onChange={(event) => {setValue(event.target.value)}}
            variant={'baseStyle'}
            placeholder='Buscar...'
            borderRadius={50}
            w={'30vw'}
            />
            <InputRightElement as={'button'} bg={'brand.darkGreen'} borderRightRadius={50} w={'3.5rem'} onClick={() => handleClick(value)}>
                <Icon as={FaSearch} color={'brand.lightBeige'}></Icon>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchBar;