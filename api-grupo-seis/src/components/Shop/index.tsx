import { Box, Button, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import Card from "./Card";
import Paginator from "./Paginator";
import { formatPrice, cutTitle, calculateDiscount } from "../../utils/functions";
import React from "react";
import Filter from "./Filter";

const data = [
    {
        img: "src/assets/img/lataDelightsTurkey.webp",
        title: "Alimento Old Prince Indoor Gato Adulto - 3 Kg",
        rating: "4.5",
        voters: "405",
        total: 16890.00,
        discount: "25"
    },
    {
        img: "src/assets/img/pouchHomemadeDelightsTurkey.webp",
        title: "Pouch Homemade Delights Country Turkey Gato Adulto - 100 Gr",
        rating: "5.0",
        voters: "1029",
        total: 1900.00,
        bestseller: true
    },
    {
        img: "src/assets/img/catChowCarneYPollo.webp",
        title: "Cat Chow Adulto Carne y Pollo - 15 Kg",
        rating: "4.3",
        voters: "1269",
        total: 56640.25
    },
    {
        img: "src/assets/img/lataHomemadeDelightsWhiteCroaker.webp",
        title: "Lata Homemade Delights White Croaker Gato Adulto - 340 gr",
        rating: "3.7",
        voters: "127",
        total: 4450.50
    },
    {
        img: "src/assets/img/royalCaninFit.webp",
        title: "Alimento Royal Canin Fit 32 - 1,5 Kg",
        rating: "5.0",
        voters: "346",
        total: 20750.00,
        discount: 10
    },
    {
        img: "src/assets/img/oldPrinceNovel.png",
        title: "Alimento Old Prince Novel Gato Adulto - 3 Kg",
        rating: "4.3",
        voters: "14",
        total: 23950.00,
        discount: 30,
        bestseller: true
    },
    {
        img: "src/assets/img/wildSalmonMerluzaCorvina.webp",
        title: "Lata Wild Salmón, Merluza Y Corvina Gato Adulto - 340 Gr",
        rating: "2.9",
        voters: "107",
        total: 4450.00
    },
    {
        img: "src/assets/img/monAmi.webp",
        title: "Alimento Mon Ami para Gatos - 6 Kg",
        rating: "4.8",
        voters: "54",
        total: 62350.00,
        bestseller: true
    },
    {
        img: "src/assets/img/royalCaninVeterinaryUrinary.webp",
        title: "Alimento Royal Canin Cat Veterinary Urinary - 7.5 Kg",
        rating: "5.0",
        voters: "340",
        total: 82016.50
    },
    {
        img: "src/assets/img/excellentSterilized.webp",
        title: "Alimento Excellent Gato Sterilized Pollo - 1 kg",
        rating: "3.2",
        voters: "18",
        total: 9248.00
    },
    {
        img: "src/assets/img/catChowPescadoPollo.webp",
        title: "Cat Chow Adulto Pescado y Pollo - 15 Kg",
        rating: "4.6",
        voters: "202",
        total: 56640.00
    },
    {
        img: "src/assets/img/whiskasCarne.webp",
        title: "Pouch Whiskas para Gatos Adultos Carne - 85G",
        rating: "2.7",
        voters: "1067",
        total: 500.00
    }
]

const brands: string[] = ['Fancy Feast', 'Gentle Giants', 'Purina Pro Plan', 'Cat Chow', 'Mon Ami'];
const age: string[] = ['Cachorro', 'Adulto', 'Adulto senior'];
const type: string[] = ['Seco', 'Humedo', 'Medicado', 'Natural'];
const size: string[] = ['Mini', 'Pequeño', 'Grande', 'Gigante'];

const Shop = () => {
    return (
        <Box mb="5rem">
            <Box bg="brand.lightGreen" h="35vh" position="relative">
                <Box position="absolute" bottom="-5" left={{"lg": "3%", "xl": "11%"}} h={{"lg": "120%", "xl": "130%"}} >
                    <Image src="src/assets/img/shop-banner.svg" objectFit="cover" h="100%" w="100%"></Image>
                </Box>
            </Box>
            <Flex justifyContent="center" mt="3rem" gap={20}>
                <Flex gap={5} w="22vw" flexDir="column">
                    <Filter title="Marca" options={brands}></Filter>
                    <Filter title="Edad" options={age}></Filter>
                    <Filter title="Tipo" options={type}></Filter>
                    <Filter title="Tamaño" options={size}></Filter>
                    <Box>
                        <Image src="src/assets/img/poster.png" w="22vw"  objectFit="cover"></Image>
                    </Box>
                </Flex>
                <Flex flexDir="column">
                    <Flex justifyContent="space-between">
                        <Heading fontSize="3.5rem" fontWeight="900">Comida</Heading>
                        <Flex gap={4} alignSelf="flex-end">
                            <Button variant="brandPrimary">Todo</Button>
                            <Button variant="brandPrimary">Mas relevante</Button>
                            <Button variant="brandPrimary">Mayor precio</Button>
                            <Button variant="brandPrimary">Menor precio</Button>
                        </Flex>
                        </Flex>
                        <Text fontSize="1.1rem" ml="0.5rem">863 resultados</Text>
                    <SimpleGrid columns={3} spacing={9} mt="2rem">
                        {data?.map((product) => (
                        <Card 
                        title={cutTitle(product.title)} 
                        img={product.img} 
                        rating={product.rating} 
                        voters={product.voters} 
                        total={product.total} 
                        quota={formatPrice(product.total / 6)} 
                        discount={product.discount}
                        bestseller={product.bestseller}></Card>))}
                    </SimpleGrid>
                    <Paginator alignSelf="center" m="3rem"></Paginator>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Shop;