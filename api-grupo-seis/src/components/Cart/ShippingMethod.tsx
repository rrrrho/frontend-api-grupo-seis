import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import React from "react";

const ShippingMethod = () => {
    return ( 
        <Flex bg={'rgba(78,110,82,0.2)'} borderRadius={10} p={5} flexDir={'column'} gap={8}>
            <Flex flexDir={'column'} w={'100%'}>
                <Text fontSize={'1.1rem'} fontWeight={600}>Medios de envio</Text>
                <Flex alignItems={'center'}>
                    <Input variant={'baseStyle'} placeholder='Codigo postal' />
                    <Button variant={'brandPrimary'} p={"0"}>Ok</Button>
                </Flex>
                <Link color={"brand.darkGreen"} fontSize={'0.8rem'}>No se mi codigo postal</Link>
            </Flex>
            <Flex fontSize={'0.9rem'} flexDir={'column'} gap={1}>
                <Text fontWeight={600}>Envio a domicilio</Text>
                <Flex justifyContent={'space-between'} alignItems={'center'} border={'2px'} borderRadius={5} borderColor={'brand.lightGreen'} p={5}>
                    <Flex flexDir={'column'}>
                        <Text fontWeight={600}>Andreani estándar “Envío a domicilio”</Text>
                        <Text>Llega el lunes 16/05</Text>
                    </Flex>
                    <Text>$6.500,00</Text>
                </Flex>
            </Flex>
        </Flex>
    )    
};

export default ShippingMethod;