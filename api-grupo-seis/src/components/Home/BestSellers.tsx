import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import ProductsCarrousel from "../Carrousel/ProductsCarrousel";
import titleForm from '/src/assets/img/home/titleForm.svg';
import { Product } from "../../types/product";

interface Props {
    title: string,
    description: string,
    products: Product[]
}

const BestSellers = ({title, description, products}: Props) => {
    return (
        <Flex w={'75%'} flexDir={'column'}>
            <Box w={'55rem'} alignSelf={'center'} textAlign={'center'} pos={'relative'}>
                <Image src={titleForm} pos={'absolute'} w={'53rem'} zIndex={-1} />
                <Heading fontSize={'3rem'}>
                    {title}
                </Heading>
                <Text w={'95%'}>{description}</Text>
            </Box>
        <ProductsCarrousel products={products} />
    </Flex>
    );
};

export default BestSellers;