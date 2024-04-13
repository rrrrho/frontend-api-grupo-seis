import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { TbCat } from "react-icons/tb";
import { LuDog } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const CategoriesMenu = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/shop');
    }

    return (
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
            <MenuList bg={'brand.lightBeige'} border={'none'} p={0}>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} borderTopRadius={5} p={3} onClick={handleClick} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={TbCat} boxSize={'1.5rem'}/>
                    <Text>
                        Gatos
                    </Text>
                </MenuItem>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} borderBottomRadius={5} p={3} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={LuDog} boxSize={'1.5rem'}/>
                    <Text>
                        Perros
                    </Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default CategoriesMenu;