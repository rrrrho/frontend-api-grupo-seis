import { Button, useDisclosure } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { addItem } from "../../context/slices/cartSlice";
import { Product } from "../../types/product";
import React from "react";
import ModalSuccess from "../Modal/ModalSuccess";
import ModalCountdown from "../Modal/ModalCountdown";
import ModalError from "../Modal/ModalError";
import { useNavigate } from "react-router-dom";

const AddToCart = ({
  id,
  title,
  price,
  imageUrl,
  rating,
  voters,
  discount,
  quota,
  stock,
  bestseller,
}: Product) => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const {
    isOpen: isOpenSuccess,
    onOpen: onOpenSuccess,
    onClose: onCloseSuccess,
  } = useDisclosure();
  const {
    isOpen: isOpenError,
    onOpen: onOpenError,
    onClose: onCloseError,
  } = useDisclosure();
  const navigate = useNavigate();

  const addItemToCart = () => {
    const isItemInCart = items.some((item) => item.product.id === id);
    const product = {
      id,
      title,
      price,
      imageUrl,
      rating,
      voters,
      discount,
      quota,
      stock,
      bestseller,
    };

    if (!isItemInCart) {
      dispatch(addItem({ product, quantity: 1 }));
      onOpenSuccess();
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } else {
      onOpenError();
    }
  };

  const handleOnCloseError = () => {
    onCloseError();
    navigate(-1);
  };
  return (
    <>
      <Button
        position="relative"
        bottom={{ base: "46%", xl: "45%" }}
        top="8rem"
        variant={"brandThird"}
        w={{ base: "8rem", xl: "10rem" }}
        h={{ base: "3rem", xl: "3.5rem" }}
        cursor="pointer"
        onClick={addItemToCart}
        borderRadius="10"
      >
        Agregar al carrito
      </Button>

      <ModalCountdown
        isOpen={isOpenSuccess}
        onClose={onCloseSuccess}
        title="¡Se agregó el producto al carrito!"
      />
      <ModalError
        isOpen={isOpenError}
        onClose={handleOnCloseError}
        title="Ya existe este producto en el carrito."
      />
    </>
  );
};

export default AddToCart;
