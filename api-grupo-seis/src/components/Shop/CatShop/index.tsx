import { Box, Button, Flex, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react';
import Card from '../Card';
import Paginator from '../Paginator';
import { cutTitle } from '../../../utils/card';
import React, { useEffect, useState } from 'react';
import Filter from '../Filter';
import data from './data.json';
import Loading from '../../Loading';

const buttons = ['Todo', 'Mas relevante', 'Mayor precio', 'Menor precio'];
const filters = [
    {
        name: 'Marca',
        values: ['Fancy Feast', 'Gentle Giants', 'Purina Pro Plan', 'Cat Chow', 'Mon Ami']
    },
    {
        name: 'Edad',
        values: ['Cachorro', 'Adulto', 'Adulto senior']
    },
    {
        name: 'Tipo',
        values: ['Seco', 'Humedo', 'Medicado', 'Natural']
    },
    {
        name: 'Tamaño',
        values: ['Mini', 'Pequeño', 'Grande', 'Gigante']
    }
];

const CatShop = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, []);

    return (
        <>
            {isLoading && (<Loading/>)}
            <Box my="5rem">
                <Box bg="brand.lightGreen" h="35vh" position="relative">
                    <Box position="absolute" bottom="-5" left={{"lg": "3%", "xl": "12%"}} h={{"lg": "120%", "xl": "130%"}} >
                        <Image src="src/assets/img/cat-banner.svg" objectFit="cover" h="100%" w="100%"></Image>
                    </Box>
                </Box>
                <Flex justifyContent="center" mt="3rem" gap={20}>
                    <Flex gap={5} w="22vw" flexDir="column">
                        {filters.map((filter) => <Filter name={filter.name} options={filter.values}/>)}
                        <Box>
                            <Image src="src/assets/img/poster.png" w="22vw"  objectFit="cover"></Image>
                        </Box>
                    </Flex>
                    <Flex flexDir="column">
                        <Flex justifyContent="space-between">
                            <Heading fontSize="3.5rem" fontWeight="900">Resultados</Heading>
                            <Flex gap={4} alignSelf="flex-end">
                                {buttons.map((value) => <Button variant={'brandPrimary'}>{value}</Button>)}
                            </Flex>
                        </Flex>
                        <Text fontSize="1.1rem" ml="0.5rem">10345 productos</Text>
                        <SimpleGrid columns={3} spacing={9} mt="2rem">
                            {data?.map((product) => (
                                <Card
                                id={product.id}
                                name={cutTitle(product.name)}
                                image={product.image}
                                rating={product.rating}
                                voters={product.voters}
                                price={product.price}
                                quota={product.price / 6} 
                                discount={product.discount}
                                stock={product.stock}
                                bestseller={product.bestseller}
                                />
                            ))}
                        </SimpleGrid>
                        <Paginator alignSelf="center" m="3rem"></Paginator>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default CatShop;