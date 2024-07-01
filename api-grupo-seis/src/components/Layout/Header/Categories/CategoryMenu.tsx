import React from "react";
import { Menu, MenuButton, MenuList} from "@chakra-ui/react";
import { TbCat } from "react-icons/tb";
import { LuDog } from "react-icons/lu";
import { MdOutlinePestControlRodent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbFish } from "react-icons/tb";
import CategoryMenuItem from './CategoryMenuItem';

const categories = [
    { name: "Gatos", icon: TbCat, route: "/shop/gatos" },
    { name: "Perros", icon: LuDog, route: "/shop/perros" },
    { name: "Hamsters", icon: MdOutlinePestControlRodent, route: "/shop/hamsters" },
    { name: "Peces", icon: TbFish, route: "/shop/peces" }
];

const CategoryMenu = () => {
    const navigate = useNavigate();

    const handleCategoryButtonClick = (route) => {
        navigate(route);
    };

    return (
        <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList bg={'brand.lightBeige'} border={'none'} p={0} zIndex={999999999}>
                {categories.map((category, index) => (
                    <CategoryMenuItem key={index} {...category} onClick={handleCategoryButtonClick} isFirst={index === 0} isLast={index === categories.length - 1}/>
                ))}
            </MenuList>
      </Menu>
    )
}

export default CategoryMenu;