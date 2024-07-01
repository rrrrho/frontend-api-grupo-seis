import { Button, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { Payment } from "../components/Payment/Payment";
import { Shipping } from "../components/Shipping/Shipping";
import { OrderDetails } from "../components/OrderDetails/OrderDetails";
import FinishedCheckoutModal from "../components/Modal/FinishedCheckoutModal";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../context/slices/cartSlice";
import { calcTotalCheckout } from "../utils/checkout";
import Loading from "../components/Loading/Loading";
import { createInvoice } from "../services/InvoiceService";
import ModalError from "../components/Modal/ModalError";

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartState = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<string>("CREDIT_CARD");
  const [shippingMethod, setShippingMethod] = useState<string>("shipping");
  const [shippingNotSelected, setShippingNotSelected] =
    useState<boolean>(false);
  const paymentMethodDiscount =
    paymentMethod === "CREDIT_CARD" ? 5 : paymentMethod === "WIRE" ? 10 : 0;
  const [shippingData, setShippingData] = useState("");
  const [lastFourDigits, setLastFourDigits] = useState("");
  const {
    isOpen: isOpenError,
    onOpen: onOpenError,
    onClose: onCloseError,
  } = useDisclosure();

  useEffect(() => {
    calcTotalCheckout(cartState, paymentMethodDiscount);
  }, [paymentMethod, paymentMethodDiscount]);

  const handleFinishedCheckout = async (e) => {
    e.preventDefault();
    if (cartState.shipping.option.id === 0 && shippingMethod === "shipping") {
      setShippingNotSelected(true);
      return;
    }
    const products = cartState.items.map((item) => ({
      product_id: item.product.id,
      quantity: item.quantity,
    }));
    try {
      const response = await createInvoice({
        products: products,
        user_id: Number(localStorage.getItem("userId")),
        payment_method: paymentMethod,
        shipping_method:
          shippingMethod === "shipping"
            ? cartState.shipping.option.id === 1
              ? "ANDREANI"
              : "CORREO_ARGENTINO"
            : "PICKUP",
        shipping_data: shippingData,
        last_four_digits: lastFourDigits,
      });
      if (response.status === 201) {
        onOpen();
      }
    } catch (error) {
      onOpenError();
      console.error("Error en el checkout:", error);
    } finally {
      setTimeout(() => {
        cartState.items.map((item) => {
          dispatch(deleteItem({ id: item.product.id }));
        });
        onClose();
        onCloseError();
        navigate("/");
      }, 3000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <form onSubmit={handleFinishedCheckout}>
        <Flex w="90vw" alignItems="start" justifyContent="center" m="3em">
          <Flex direction="column" align="flex-start" mr="4em">
            <Skeleton
              isLoaded={!isLoading}
              startColor="brand.lightGreen"
              endColor="brand.lightGreen"
            ></Skeleton>
            <Skeleton
              isLoaded={!isLoading}
              startColor="brand.lightGreen"
              endColor="brand.lightGreen"
            >
              <Shipping
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
                shippingNotSelected={shippingNotSelected}
                setShippingData={setShippingData}
              />
            </Skeleton>
            <Skeleton
              isLoaded={!isLoading}
              startColor="brand.lightGreen"
              endColor="brand.lightGreen"
            >
              <Payment
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                paymentMethodDiscount={paymentMethodDiscount}
                setLastFourDigits={setLastFourDigits}
              />
            </Skeleton>
          </Flex>
          <Skeleton
            isLoaded={!isLoading}
            startColor="brand.lightGreen"
            endColor="brand.lightGreen"
            alignContent="center"
            alignSelf="flex-start"
            position="sticky"
            top="0"
          >
            <Flex direction="column" align="center" top="0">
              <OrderDetails
                shippingMethod={shippingMethod}
                paymentMethod={paymentMethod}
                paymentMethodDiscount={paymentMethodDiscount}
              />
              <Button
                variant="brandThird"
                size="lg"
                w="10em"
                h="3em"
                mt="1em"
                type="submit"
              >
                Finalizar compra
              </Button>
            </Flex>
          </Skeleton>
          <FinishedCheckoutModal isOpen={isOpen} onClose={onClose} />
          <ModalError
            isOpen={isOpenError}
            onClose={onCloseError}
            title="No hay suficiente stock para un producto."
          />
        </Flex>
      </form>
    </>
  );
};

export default Checkout;
