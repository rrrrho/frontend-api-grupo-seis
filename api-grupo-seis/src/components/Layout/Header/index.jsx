import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Cart from "../../Cart";
import SearchBar from "./SearchBar";
import { IoLocationSharp } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import NavLink from "./NavLink";
import CategoriesMenu from './CategoriesMenu'

const Header = () => {
  return (
    <header>
      <Flex position={'fixed'} zIndex={3} w={'100%'} background={'brand.darkMustard'} h={'10vh'} justifyContent={'space-between'} alignItems={'center'}>
        <Flex color={'brand.darkGreen'} alignItems={'center'} gap={8}>
          <Icon as={FaPaw} boxSize={'3.5rem'} ml={10}/>
          <Flex alignItems={'center'}>
            <Icon as={IoLocationSharp} boxSize={'2.3rem'}/>
            <Flex flexDir={'column'} fontWeight={600}>
              <Text fontSize={'0.8rem'}>Enviar a</Text>
              <Text fontSize={'0.9rem'}>Quilmes, 1878</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={10} mr={10} alignItems={'center'}>
          <SearchBar/>
          <NavLink url={'/profile'}>
            <Text>Cuenta</Text>
          </NavLink>
          <NavLink>
            <CategoriesMenu/>
          </NavLink>
          <Cart/>
        </Flex>
      </Flex>
    </header>
  );
};
  
export default Header;
  