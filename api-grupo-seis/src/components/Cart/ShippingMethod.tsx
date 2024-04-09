import { Box, Button, Flex, Input, Link, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const ShippingMethod = () => {
    const [results, setResults ] = useState({isLoading: false, isShown: false});
    const [ postalCode, setPostalCode ] = useState('');

    const handleSearch = () => {
        if(postalCode.length >= 4) {
          setResults({isShown:false, isLoading: true})
          setTimeout(()=> {
            setResults({isLoading:false, isShown:true})
          }, 1500)
        }
      }

    return (
        <Flex bg={'rgba(78,110,82,0.2)'} borderRadius={10} p={5} flexDir={'column'} gap={8}>
            <Flex flexDir={'column'} w={'100%'}>
                <Text fontWeight={600}>Medios de envio</Text>
                <Flex alignItems={'center'}>
                    <Input variant={'baseStyle'} placeholder='Codigo postal' onChange={(e) => setPostalCode(e.target.value)}/>
                    <Button variant={'brandPrimary'} p={"0"} onClick={handleSearch}>Ok</Button>
                </Flex>
                <Link href='https://www.correoargentino.com.ar/formularios/cpa' color={"brand.darkGreen"} fontSize={'0.8rem'}>No sé mi código postal</Link>
            </Flex>
            <Box fontSize={'0.9rem'} display={results.isLoading || results.isShown ? 'block' : 'none'}>
            {results.isLoading && <Flex justifyContent={'center'}><Spinner alignSelf={'center'} /></Flex>}
            {results.isShown && (
                <>
                    <Text fontWeight={600}>Seleccione una opcion</Text>
                    <Flex justifyContent={'space-between'} alignItems={'center'} border={'2px'} borderRadius={5} borderColor={'brand.lightGreen'} p={5}>
                        <Flex flexDir={'column'}>
                            <Text fontWeight={600}>Andreani estándar “Envío a domicilio”</Text>
                            <Text>Llega el lunes 16/05</Text>
                        </Flex>
                        <Text>$6.500,00</Text>
                    </Flex>
                </>
            )}
            </Box>
        </Flex>
    )    
};

export default ShippingMethod;