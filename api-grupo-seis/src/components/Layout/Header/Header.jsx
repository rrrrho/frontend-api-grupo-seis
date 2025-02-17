import { Flex, Text, Icon } from "@chakra-ui/react";
import Cart from "/src/components/Cart/Cart";
import SearchBar from "./SearchBar";
import { IoLocationSharp } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import NavLink from "./NavLink";
import CategoryMenu from "./Categories/CategoryMenu";
import { Link, useNavigate } from "react-router-dom";
import ActionLink from "./ActionLink";
import { useAppDispatch, useAppSelector } from "../../../context/hooks";
import { logoutUser } from "../../../context/slices/userSlice";
import { deleteItem } from "../../../context/slices/cartSlice";

const Header = () => {
  const isLogged = JSON.parse(localStorage.getItem("isLogged"));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartState = useAppSelector((state) => state.cart);

  const handleLogOut = () => {
    cartState.items.map((item) => {
      dispatch(deleteItem({ id: item.product.id }));
    });

    dispatch(logoutUser());

    localStorage.removeItem("user");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("isLoggedAdmin");
    navigate("/");
    location.reload();
  };

  return (
    <header>
      <Flex
        w={"100%"}
        background={"brand.darkMustard"}
        h={"10vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex color={"brand.darkGreen"} alignItems={"center"} gap={8}>
          <Link to={"/"}>
            <Icon as={FaPaw} boxSize={"3.5rem"} ml={10} />
          </Link>
          <Flex alignItems={"center"}>
            <Icon as={IoLocationSharp} boxSize={"2.3rem"} />
            <Flex flexDir={"column"} fontWeight={600}>
              <Text fontSize={"0.8rem"}>Enviar a</Text>
              <Text fontSize={"0.9rem"}>Quilmes, 1878</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={10} mr={10} alignItems={"center"}>
          <SearchBar />
          <NavLink>
            <CategoryMenu />
          </NavLink>
          {isLogged ? (
            <>
              <NavLink url={"/profile"}>
                <Text>Cuenta</Text>
              </NavLink>
              <ActionLink onClick={handleLogOut}>
                <Text>Salir</Text>
              </ActionLink>
            </>
          ) : (
            <>
              <NavLink url={"/register"}>
                <Text>Registrarse</Text>
              </NavLink>
              <NavLink url={"/login"}>
                <Text>Loguearse</Text>
              </NavLink>
            </>
          )}
          <Cart />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
