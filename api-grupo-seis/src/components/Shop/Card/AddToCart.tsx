import { Button, Icon, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../context/hooks";
import { addItem } from "../../../context/slices/cartSlice";
import { Product } from "../../../types/product";
import React from "react";
import { AiFillShopping } from "react-icons/ai";
import ModalSuccess from "../../Modal/ModalSuccess";
import ModalError from "../../Modal/ModalError";

const AddToCart = ({id, name, price, image, rating, voters, discount, quota, stock, bestseller}: Product) => {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();
    const { isOpen: isOpenError, onOpen: onOpenError, onClose: onCloseError } = useDisclosure();

    const addItemToCart = () => {
        const isItemInCart = items.some((item) => item.product.id === id);
        const product = {id, name, price, image, rating, voters, discount, quota, stock, bestseller};
    
        if (!isItemInCart) {
            dispatch(addItem({ product, quantity: 1 }));
            onOpenSuccess();
        } else {
            onOpenError();
        };
        
    };

    return (
        <>
            <Button 
            position="absolute"
            bottom="45%"
            left="77%"
            borderRadius="100%"
            bg="brand.lightBeige"
            w="3rem"
            h="3rem"
            cursor="pointer"
            onClick={()=> addItemToCart()}
            _hover="none"
            >
                <Icon 
                as={AiFillShopping} 
                color="brand.darkBrown" 
                boxSize={7}>
                </Icon>
            </Button>
            <ModalSuccess isOpen={isOpenSuccess} onClose={onCloseSuccess} title="¡Se agregó el producto al carrito!" />
            <ModalError isOpen={isOpenError} onClose={onCloseError} title="Ya existe este producto en el carrito." />
        </>
    );
};

export default AddToCart;