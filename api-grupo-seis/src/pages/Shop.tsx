import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Image, Skeleton, Spinner } from '@chakra-ui/react';
import Card from '/src/components/Shop/Card';
import Paginator from '/src/components/Shop/Paginator';
import Filter from '/src/components/Shop/Filter';
import { useLocation } from 'react-router-dom';
import { cutTitle } from '/src/utils/card';
import Loading from '/src/components/Loading/Loading';
import catBanner from '/src/assets/img/cat-banner.svg';
import catPoster from '/src/assets/img/cats/sales-poster.png';
import dogBanner from '/src/assets/img/dog-banner.svg';
import dogPoster from '/src/assets/img/dogs/dog-poster.png';
import hamsterPoster from '/src/assets/img/hamsters/hamster-poster.png'
import hamsterBanner from '/src/assets/img/hamster-banner.svg';
import pezBanner from '/src/assets/img/pez-banner.svg';
import { getProductsByCategory, getProductsSortedByPopularity, getProductsSortedByPrice } from '../services/ProductsService';
import { Product } from '../types/product';
import SortButton from '../components/Shop/SortButton';

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

interface Decoration {
    banner: string,
    poster?: string
}

const Shop = () => {
    const extractCategory = (url: string): string => {
        return url.substring(url.lastIndexOf('/') + 1);
    }

    const translateSpanishCategory = (animal: string): string => {
        const counterparts: Record<string, string> = {
            'gatos': 'cat',
            'perros': 'dog',
            'hamsters': 'hamster',
            'peces': 'fish'
        };
        return counterparts[animal.toLowerCase()];
    }

    const getProducts = async (category: string, page: number) => {
        setIsProductsLoading(true);
        try {
            const response = await getProductsByCategory({ category, page });
            if (response.status === 200) {
                setProducts(response.data.content);
                setCurrentPage(response.data.currentPage);
                setTotalElements(response.data.totalElements);
                setTotalPages(response.data.totalPages);
            } else {
                console.error("Failed to fetch products:", response.data.errorMessage);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setTimeout(() => {
                setIsProductsLoading(false);
            }, 2000);
        }
    };

    const getProductsSorted = async (category: string, page: number, sortType: string, sortValue: string) => {
        setIsProductsLoading(true);
        try {
            let response;
            if (sortType === 'Mayor precio' || sortType === 'Menor precio') {
                response = await getProductsSortedByPrice({ category, page, price: sortValue });
            } else if (sortType === 'Mas relevante') {
                response = await getProductsSortedByPopularity({ category, page, bestseller: sortValue });
            } else {
                getProducts(category, page);
                return;
            }
            if (response.status === 200) {
                setProducts(response.data.content);
                setCurrentPage(response.data.currentPage);
                setTotalElements(response.data.totalElements);
                setTotalPages(response.data.totalPages);
            } else {
                console.error("Failed to fetch products:", response.data.errorMessage);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setTimeout(() => {
                setIsProductsLoading(false);
            }, 2000);
        }
    };
    
    // loading
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // loading
    const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);

    // products
    const [products, setProducts] = useState<Product[]>([]);

    // page info
    const [currentPage, setCurrentPage] = useState<number>(localStorage.getItem('page') || 0);
    const [totalElements, setTotalElements] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    // decoration
    const [decoration, setDecoration] = useState<Decoration>();

    // pathname
    const location = useLocation();

    // category ex. cat
    const category = translateSpanishCategory(extractCategory(location.pathname));

    // sort button state
    interface Sort {
        type: string,
        value: string
    }
    const [sort, setSort] = useState<Sort>({type: 'none', value: 'none'});

    const handleSortButtonClick = (text: string) => {
        switch (text) {
            case 'Mayor precio':
                setSort({ type: text, value: 'desc' });
                break;
            case 'Menor precio':
                setSort({ type: text, value: 'asc' });
                break;
            case 'Mas relevante':
                setSort({ type: text, value: 'desc' });
                break;
            case 'Todo':
                setSort({ type: 'none', value: 'none' });
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setIsLoading(true);
        switch (location.pathname) {
            case '/shop/perros':
                setDecoration({ banner: dogBanner, poster: dogPoster });
                break;
            case '/shop/gatos':
                setDecoration({ banner: catBanner, poster: catPoster });
                break;
            case '/shop/peces':
                setDecoration({ banner: pezBanner });
                break;
            case '/shop/hamsters':
                setDecoration({ banner: hamsterBanner, poster: hamsterPoster });
                break;
            default:
                setDecoration(undefined);
                break;
        }
        getProducts(category, currentPage);
        setIsLoading(false);
    }, [location]);

    useEffect(() => {
        localStorage.setItem('page', JSON.stringify(0));
        setCurrentPage(0);
        getProductsSorted(category, 0, sort.type, sort.value);
    }, [sort]);

    return (
        <>
            {isLoading && <Loading />}
            <Box>
                <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                    <Box bg="brand.lightGreen" h="35vh" position="relative" zIndex={-1}>
                        <Box position="absolute" bottom="-5" left={{ "lg": "3%", "xl": "12%" }} h={{ "lg": "120%", "xl": "130%" }} >
                            <Image src={decoration?.banner} objectFit="cover" h="100%" w="100%" />
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
                            <Image src={decoration?.poster} w="22vw" objectFit="cover"/>
                        </Box>
                    </Flex>
                    <Flex flexDir="column">
                        <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                            <Flex justifyContent="space-between" gap={10}>
                                <Heading fontSize={{ base: "2rem", xl: "3.5rem" }} fontWeight="900">Resultados</Heading>
                                <Flex gap={4} alignSelf="flex-end">
                                    <SortButton values={buttons} onClick={handleSortButtonClick}/>
                                </Flex>
                            </Flex>
                            <Text fontSize={{ base: "0.8rem", xl: "1.1rem" }} ml={{ base: "0.2rem", xl: "0.5rem" }}>{totalElements} productos</Text>
                        </Skeleton>
                        {isProductsLoading ? (
                            <Spinner boxSize={'5rem'} alignSelf={'center'}/>
                        ) : (
                            <>
                                <SimpleGrid columns={{base: '2', xl: '3'}} spacing={9} mt="2rem">
                                    {products?.map((product: any, index: number) =>
                                        <Skeleton key={index} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                                            <Card
                                                id={product.id}
                                                name={cutTitle(product.title)}
                                                image={product.image_url}
                                                rating={product.score}
                                                voters={product.score_voters}
                                                price={product.price}
                                                quota={product.price / 6}
                                                discount={product.discount}
                                                stock={product.stock}
                                                bestseller={product.bestseller == 1 ? true : false}
                                            />
                                        </Skeleton>
                                    )}
                                </SimpleGrid>
                                <Paginator pages={totalPages} handleClick={(page: number) => {sort.type != 'none' ? getProductsSorted(category, page, sort.type, sort.value) : getProducts(category, page)}}/>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Shop;
