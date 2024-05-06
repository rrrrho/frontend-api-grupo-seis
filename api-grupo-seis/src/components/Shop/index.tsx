import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, Text, Image, Skeleton } from '@chakra-ui/react';
import Card from './Card';
import Paginator from './Paginator';
import { cutTitle } from '../../utils/card';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import Loading from '../Loading';

import catBanner from '/src/assets/img/cat-banner.svg';
import catPoster from '/src/assets/img/cats/sales-poster.png';
import dogBanner from '/src/assets/img/dog-banner.svg';
import dogPoster from '/src/assets/img/dogs/dog-poster.png';
import hamsterBanner from '/src/assets/img/hamster-banner.svg';
import pezBanner from '/src/assets/img/pez-banner.svg';
import catshop from './catshop.json';
import dogshop from './dogshop.json';
import hamstershop from './hamstershop.json';
import fishshop from './fishshop.json';

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

const getShopInfo = (pathname: string) => {
    switch (pathname) {
        case '/shop/gatos':
            return { image: catBanner, poster: catPoster, data: catshop, results: 10345 };
        case '/shop/perros':
            return { image: dogBanner, poster: dogPoster, data: dogshop, results: 12453 };
        case '/shop/hamsters':
            return { image: hamsterBanner, data: hamstershop, results: 9546 };
        case '/shop/peces':
            return { image: pezBanner, data: fishshop, results: 6023 };
        default:
            return {};
    }
};

const Shop = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [info, setInfo] = useState<any>({});
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);

        const shopInfo = getShopInfo(location.pathname);
        setInfo(shopInfo);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    }, [location]);

    return (
        <>
            {isLoading && <Loading />}
            <Box my="5rem">
                <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                    <Box bg="brand.lightGreen" h="35vh" position="relative">
                        <Box position="absolute" bottom="-5" left={{ "lg": "3%", "xl": "12%" }} h={{ "lg": "120%", "xl": "130%" }} >
                            <Image src={info.image} objectFit="cover" h="100%" w="100%" />
                        </Box>
                    </Box>
                </Skeleton>
                <Flex justifyContent="center" mt="3rem" gap={20}>
                    <Flex gap={5} w={{base: '28vw', xl: "22vw"}} flexDir="column">
                        {filters.map((filter, index) =>
                            <Skeleton key={index} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                                <Filter name={filter.name} options={filter.values} />
                            </Skeleton>
                        )}
                        <Box>
                            <Image src={info.poster} w="22vw" objectFit="cover" />
                        </Box>
                    </Flex>
                    <Flex flexDir="column">
                        <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                            <Flex justifyContent="space-between" gap={10}>
                                <Heading fontSize={{ base: "2rem", xl: "3.5rem" }} fontWeight="900">Resultados</Heading>
                                <Flex gap={4} alignSelf="flex-end">
                                    {buttons.map((value, index) => <Button key={index} variant={'brandPrimary'} h={'fit-content'} py={{ base: "0.6rem", xl: "0.8rem" }} fontSize={{ base: "0.7rem", xl: "1rem" }} pr={{ base: "0.7rem", xl: "1.2rem" }} pl={{ base: "0.7rem", xl: "1.2rem" }}>{value}</Button>)}
                                </Flex>
                            </Flex>
                            <Text fontSize={{ base: "0.8rem", xl: "1.1rem" }} ml={{ base: "0.2rem", xl: "0.5rem" }}>{info.results} productos</Text>
                        </Skeleton>
                        <SimpleGrid columns={{base: '2', xl: '3'}} spacing={9} mt="2rem">
                            {info.data?.map((product: any, index: number) =>
                                <Skeleton key={index} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
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
                                </Skeleton>
                            )}
                        </SimpleGrid>
                        <Paginator alignSelf="center" m="3rem" />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Shop;
