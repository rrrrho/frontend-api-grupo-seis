import {
    Button,
    Flex,
    HStack,
    Heading,
    Link,
    Stack,
    Text,
    VStack,
    useDisclosure,
  } from '@chakra-ui/react';
import OrderSummaryItem from './OrderSummaryItem';
import React, { useState } from 'react';
import ShippingMethod from './ShippingMethod';
import data from './data.json';
  
  interface Props {
    onCloseCart: () => void
  }
  export const CartOrderSummary = ({onCloseCart}: Props) => {
    const [ showShippingMenu, setShowShippingMenu ] = useState(false)
    const { onOpen: onOpenError, isOpen: isOpenError, onClose: onCloseError } = useDisclosure()
  
    const calcSubtotal = () => {
      let subtotal = 0
      data?.map((item) => {
        subtotal += item.total * item.quantity
      })
      return subtotal
    }
  
    const calcTotal = () => {
      let total = calcSubtotal()
  
      total += 6500
      return total
    }
  
    const goToCheckout = () => {
      console.log('checkout');
      onCloseCart();
    }
  
    return (
      <Stack spacing="8" py={8}>
        <Heading size="md">Resumen de compra</Heading>
  
        <Stack spacing="6">
          {/* Subtotal */}
          <OrderSummaryItem label="Subtotal (sin envío)" value={calcSubtotal().toString()} />
  
          {/* Envío */}
          <OrderSummaryItem label="Envío a domicilio">
            <Link href="#" onClick={() => setShowShippingMenu(!showShippingMenu)} textDecor="underline">
              {showShippingMenu ? 'Cerrar' : 'Calcular envío'}
            </Link>
          </OrderSummaryItem>
          {showShippingMenu && (
            <ShippingMethod />
          )}
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {calcTotal().toString()}
            </Text>
          </Flex>
        </Stack>
        <VStack direction="column" align="center">
            <Button onClick={() => goToCheckout()} variant="brandPrimary" px={20}>
                Iniciar compra
            </Button>
            <HStack fontWeight="semibold" color={'brand.darkGreen'}>
                <p>o</p>
            <Link onClick={onCloseCart}>Seguir comprando</Link>
            </HStack>
        </VStack>
      </Stack>
    )
  }