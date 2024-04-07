import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Heading, Link, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CartItem from './CartItem';
import ShippingMethod from './ShippingMethod';
import CartButton from './CartButton';

const data = [
    {
        id: 1,
        name: "Lata Homemade Delights River Salmon Gato Adulto - 90 gr",
        quantity: 1,
        price: 1800.00,
        img: "https://puppis.vteximg.com.br/arquivos/ids/195409-1000-1000/161007.jpg?v=638358395196870000"

    }
]

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
          <DrawerBody>
              <Stack direction={'column'} spacing={10} py={5} justify={'space-between'}>
                  <Stack spacing={8}>
                    <CartItem id={data[0].id} name={data[0].name} price={data[0].price} quantity={data[0].quantity} img={data[0].img}/>
                    <CartItem id={data[0].id} name={data[0].name} price={data[0].price} quantity={data[0].quantity} img={data[0].img}/>
                    <CartItem id={data[0].id} name={data[0].name} price={data[0].price} quantity={data[0].quantity} img={data[0].img}/>
                    <CartItem id={data[0].id} name={data[0].name} price={data[0].price} quantity={data[0].quantity} img={data[0].img}/>
                  </Stack>
                  <Stack spacing={7} direction={'column'}>
                    <Flex justifyContent={'space-between'}>
                      <Text fontSize={'1.1rem'} fontWeight={600}>Subtotal (sin envio):</Text>
                      <Text fontSize={'1.1rem'} fontWeight={600}>$32.780,00</Text>
                    </Flex>
                    <ShippingMethod />
                    <Flex justifyContent={'space-between'}>
                      <Text fontWeight={600} fontSize={'1.5rem'}>Total:</Text>
                      <Flex flexDir={'column'} alignItems={'flex-end'}>
                        <Text fontWeight={600} fontSize={'1.5rem'}>$40.280,00</Text>
                        <Text fontSize={'0.7rem'}>o hasta 3 cuotas de $21.178,66</Text>
                      </Flex>
                    </Flex>
                    <Flex flexDir={'column'} alignItems={'center'}>
                      <Button variant={'brandPrimary'} w={'fit-content'}>
                        Iniciar compra
                      </Button>
                      <Link fontSize={'0.8rem'} color={'brand.darkGreen'}>Seguir comprando</Link>
                    </Flex>
                  </Stack>
              </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Cart