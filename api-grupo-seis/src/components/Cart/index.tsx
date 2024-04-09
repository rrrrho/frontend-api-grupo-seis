import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Link, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CartItem from './CartItem';
import CartButton from './CartButton';
import items from './data.json'
import { CartOrderSummary } from './CartOrderSummary';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { height } from '@mui/system';

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

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
          <DrawerBody px={2}>

            {items.length === 0 ? 
              <Text h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} fontWeight={700} fontSize={18}>¡Aún no hay productos en el carrito!</Text>
              :
              <Stack direction={'column'} spacing={10} py={5} px={6} justify={'space-between'} minH={'100%'}>
                <Stack spacing={8}>
                  {
                    items.map((item) => <CartItem id={item.id} name={item.title} img={item.img} price={item.total}></CartItem>)
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