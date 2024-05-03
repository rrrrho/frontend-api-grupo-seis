import { Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { TbCat } from "react-icons/tb";
import { LuDog } from "react-icons/lu";
import { MdOutlinePestControlRodent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbFish } from "react-icons/tb";

const CategoriesMenu = () => {
    const navigate = useNavigate();

    const handleDogButtonClick = () => {
        navigate('/shop/dogs');
    }

    const handleCatButtonClick = () => {
        navigate('/shop/cats');
    }

    const handleHamsterButtonClick = () => {
        navigate('/shop/hamsters');
    }

    const handleFishButtonClick = () => {
        navigate('/shop/peces');
    }

    return (
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
            <MenuList bg={'brand.lightBeige'} border={'none'} p={0}>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} borderTopRadius={5} p={3} onClick={handleCatButtonClick} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={TbCat} boxSize={'1.5rem'}/>
                    <Text>
                        Gatos
                    </Text>
                </MenuItem>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} p={3} onClick={handleDogButtonClick} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={LuDog} boxSize={'1.5rem'}/>
                    <Text>
                        Perros
                    </Text>
                </MenuItem>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} p={3} onClick={handleHamsterButtonClick} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={MdOutlinePestControlRodent} boxSize={'1.5rem'}/>
                    <Text>
                        Hamsters
                    </Text>
                </MenuItem>
                <MenuItem display={'flex'} gap={2} bg={'brand.lightBeige'} borderBottomRadius={5} p={3} onClick={handleFishButtonClick} _hover={{bg: 'rgba(78,110,82,0.3)'}}>
                    <Icon as={TbFish} boxSize={'1.5rem'}/>
                    <Text>
                        Peces
                    </Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default CategoriesMenu;