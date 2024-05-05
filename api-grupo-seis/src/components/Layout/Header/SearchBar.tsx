import { Box, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log(value)
    };
  
    return (
        <InputGroup>
            <Input
            value={value}
            onChange={handleChange}
            variant={'baseStyle'}
            placeholder='Buscar...'
            borderRadius={50}
            w={'30vw'}
            />
            <InputRightElement as={'button'} bg={'brand.darkGreen'} borderRightRadius={50} w={'3.5rem'}>
                <Icon as={FaSearch} color={'brand.lightBeige'}></Icon>
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchBar;