import { Button, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { addItem } from "../../context/slices/cartSlice";
import { Product } from "../../types/product";
import React from "react";
import ModalSuccess from "../Modal/ModalSuccess";
import ModalError from "../Modal/ModalError";

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
                position="relative" 
                bottom={{base: '46%', xl: "45%"}} 
                top="8rem"
                left="55%" 
                variant={"brandThird"}
                w={{base: '8rem', xl: "10rem"}} 
                h={{base: '3rem', xl: "3.5rem"}} 
                cursor="pointer" 
                onClick={()=> addItemToCart()} 
                borderRadius="10"
            >
                Agregar al carrito
            </Button>

            <ModalSuccess isOpen={isOpenSuccess} onClose={onCloseSuccess} title="¡Se agregó el producto al carrito!" />
            <ModalError isOpen={isOpenError} onClose={onCloseError} title="Ya existe este producto en el carrito." />
        </>
    );
};

export default AddToCart;
