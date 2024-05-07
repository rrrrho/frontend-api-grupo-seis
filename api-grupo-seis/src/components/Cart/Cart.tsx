import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import CartItem from './Item/CartItem';
import CartButton from './CartButton';
import { CartOrderSummary } from './CartOrderSummary';
import { useAppDispatch, useAppSelector } from '../../context/hooks';
import { setShippingData } from '../../context/slices/cartSlice';

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));

    if (items.length === 0) {
      dispatch(setShippingData({ postalCode: 0, option: { id:0, price: 0 } }));
    };
  }, [items]);
  
  return (
    <>
      <CartButton onClick={onOpen} ref={btnRef} />
      <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      size={'md'}
      >
      <DrawerOverlay />
        <DrawerContent bg='brand.cream'>
          <DrawerCloseButton zIndex={5} size="lg" color="brand.lightBeige" />
          <DrawerHeader bg="brand.lightGreen">
            <Heading color="brand.lightBeige" fontSize="1.5rem">Carrito de compras</Heading>
          </DrawerHeader>
          <DrawerBody px={2} overflowY={'scroll'}>
            {items.length === 0 ? 
              <Text h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={700} fontSize={18}>¡Aún no hay productos en el carrito!</Text>
              :
              <Stack direction={'column'} spacing={10} py={5} px={6} justify={'space-between'} minH={'100%'}>
                <Stack spacing={8}>
                  {
                    items.map((item) => <CartItem id={item.product.id} name={item.product.name} image={item.product.image} price={item.product.price} discount={item.product.discount} stock={item.product.stock} quantity={item.quantity}></CartItem>)
                  }
                </Stack> 
                <CartOrderSummary onCloseCart={onClose}/>       
              </Stack>
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart