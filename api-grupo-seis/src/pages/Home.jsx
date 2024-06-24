import { Box, Flex, Heading, Image, Grid, GridItem, Text, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Banner from "/src/components/Home/Banner";
import dogImage from "/src/assets/img/home/dog.png"; 
import catImage from "/src/assets/img/home/cat.png"; 
import pecesImage from "/src/assets/img/home/pez.png";
import hamstersImage from "/src/assets/img/home/hamnster.png";
import Loading from "/src/components/Loading/Loading";
import bestsellers from '../json/Home/bestsellers.json'
import activeMind from '/src/assets/img/home/purinaActiveMind.svg';
import whiskasRes from '/src/assets/img/home/whiskasRes.svg';
import blobOne from '/src/assets/img/home/blob_one.svg';
import blobTwo from '/src/assets/img/home/blob_two.svg';
import blobThree from '/src/assets/img/home/blob_three.svg';
import blobFour from '/src/assets/img/home/blob_four.svg';
import BestSellers from "../components/Home/BestSellers";
import Categories from "../components/Home/Categories";
import InfoCards from "../components/Home/InfoCards";

const categories = [
    {
        image: dogImage,
        href: '/shop/perros',
        alt: 'dog'
    },
    {
        image: catImage,
        href: '/shop/gatos',
        alt: 'cat'
    },
    {
        image: hamstersImage,
        href: '/shop/hamsters',
        alt: 'hamster'
    },
    {
        image: pecesImage,
        href: '/shop/peces',
        alt: 'pez'
    },
];

const cards = [
    {
        title: '2x1',
        description: 'Whiskas - Res en Fillets Humedo',
        subtitle: '¡Solo por hoy!',
        image: whiskasRes
    },
    {
        title: '¿Nuevo?',
        description: 'Disfruta de un 10% en tu primera compra',
        subtitle: 'Valido hasta 25/05/2024'
    },
    {
        title: '20% OFF',
        description: 'Purina Pro Plan - Active Mind 7+ Mediano Y Grande 15KG',
        subtitle: 'OFERTA',
        image: activeMind
    }
];

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            <Flex w={'100vw'} mb="4rem" flexDir={'column'} gap={20}>
                <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                    <Banner/>
                </Skeleton>
                
                <Grid 
                w={'92vw'} 
                templateRows='repeat(2, 1fr)' 
                templateColumns='repeat(14, 1fr)' 
                alignSelf={'center'}
                gap={5}>
                    
                    <Skeleton 
                    as={GridItem} 
                    isLoaded={!isLoading} 
                    startColor='brand.darkGreen' 
                    endColor='brand.lightGreen' 
                    bg={'brand.darkGreen'} 
                    rowSpan={2} 
                    py={10} 
                    colSpan={8} 
                    borderRadius={10} 
                    display={'flex'} 
                    flexDir={'column'} 
                    justifyContent={'center'} 
                    alignItems={'center'}>
                    <Box>
                        <Box w={'28vw'}>
                            <Heading fontSize={'3.5rem'} color={'brand.lightBeige'}>Nuestras categorias</Heading>
                            <Text color={'brand.lightBeige'}>Descubre nuestra variedad de categorías para mascotas y encuentra todo lo que necesitas para consentir a tu compañero peludo en un solo lugar.</Text>
                        </Box>
                        <Categories items={categories}/>
                    </Box>
                    </Skeleton>

                    <Skeleton as={GridItem} rowSpan={2} colSpan={6} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                        <InfoCards cards={cards}/>
                     </Skeleton>
                </Grid>
                
                <Skeleton as={Flex} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen' overflow={'hidden'} py={10} display={'flex'} justifyContent={'center'} pos={'relative'}>
                    <Image src={blobOne} pos={'absolute'} right={'90%'} boxSize={'30rem'} top={5}/>
                    <Image src={blobTwo} pos={'absolute'} left={'87%'} boxSize={'25rem'} bottom={0}/>
                    <Image src={blobThree} pos={'absolute'} left={'75%'} boxSize={'15rem'} top={'5%'}/>
                    <Image src={blobFour} pos={'absolute'} right={'75%'} boxSize={'15rem'} bottom={0}/>
                    <BestSellers products={bestsellers} title={'¡Los mas vendidos!'} description={'Descubre los artículos imprescindibles para tu mascota. Desde juguetes interactivos hasta cómodas camas, encuentra todo lo que necesitas para cuidar y mimar a tu compañero peludo. ¡Calidad garantizada y precios irresistibles!'}/>
                </Skeleton>
            </Flex>  
        </>
    );
};

export default Home;
