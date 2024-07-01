import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, Image, Skeleton, Center } from '@chakra-ui/react';
import Card from '../components/Shop/Card';
import Paginator from '../components/Shop/Paginator';
import Filter from '../components/Shop/Filter';
import { useLocation } from 'react-router-dom';
import { cutKeyword, cutTitle } from '../utils/card';
import Loading from '../components/Loading/Loading';
import catBanner from '../assets/img/cat-banner.svg';
import searchBanner from '../assets/img/search-banner.svg';
import catPoster from '../assets/img/cats/sales-poster.png';
import dogBanner from '../assets/img/dog-banner.svg';
import dogPoster from '../assets/img/dogs/dog-poster.png';
import hamsterPoster from '../assets/img/hamsters/hamster-poster.png'
import hamsterBanner from '../assets/img/hamster-banner.svg';
import pezBanner from '../assets/img/pez-banner.svg';
import { getBrands, getProductsFiltered } from '../services/ProductsService';
import { Product } from '../types/product';
import SortButton from '../components/Shop/SortButton';
import PriceSlider from '../components/Shop/PriceSlider';
import noProducts from './../assets/img/no-products.svg'

const buttons = ['Todo', 'Mas relevante', 'Mayor precio', 'Menor precio'];

interface FilterContent {
    name: string,
    values: string[]
}

const filterss = [
    {
        name: 'Marca',
        values: ['Fancy Feast', 'Gentle Giants', 'Purina Pro Plan', 'Cat Chow', 'Mon Ami']
    },
    {
        name: 'Edad',
        values: ['Cachorro', 'Adulto', 'Adulto senior']
    },
    /*
    {
        name: 'Tipo',
        values: ['Seco', 'Humedo', 'Medicado', 'Natural']
    },
    {
        name: 'Tamaño',
        values: ['Mini', 'Pequeño', 'Grande', 'Gigante']
    }
    */
];

interface Decoration {
    banner: string,
    poster?: string
}

interface Parameter {
    category: string,
    page: number,
    price?: string,
    bestseller?: string
    brand?: string,
    stage?: string,
    min?: number,
    max?: number,
    keywords?: string
}

const Shop = () => {
    const extractCategory = (url: string): string => {
        const startIndex = url.indexOf('/shop/') + '/shop/'.length;
        return url.substring(startIndex);
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

    const getProducts = async ({page, category, bestseller, price, brand, stage, min, max, keywords}: Parameter) => {
        setIsProductsLoading(true);
        try {
            const response = await getProductsFiltered({ category, page, bestseller, price, brand, stage, min, max, keywords });
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

    const getProductBrands = async (category: string) => {
        try {
            const response = await getBrands(category);
            if (response.status === 200 && response.data.length > 0) {
                setFilterContent([...filterContent, {name: 'Marca', values: response.data}]);
            } else {
                console.error("Failed to fetch brands:", response.statusText);
            }
        } catch (error) {
            console.error("Failed to fetch brands:", error);
        };
    };
    
    // loading
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // loading
    const [isProductsLoading, setIsProductsLoading] = useState<boolean>(true);

    // products
    const [products, setProducts] = useState<Product[]>([]);

    // page info
    const [currentPage, setCurrentPage] = useState<number>(parseInt(localStorage.getItem('page') as string) || 0);
    const [totalElements, setTotalElements] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    // decoration
    const [decoration, setDecoration] = useState<Decoration>();

    // pathname
    const location = useLocation();

    // category ex. cat
    const category = translateSpanishCategory(extractCategory(location.pathname));

    const [filterContent, setFilterContent] = useState<FilterContent[]>
    ((category === 'cat' || category === 'dog') ? [{name: 'Edad', values: ['Cachorro', 'Adulto', 'Adulto senior']}] : []);

    // sort button state
    interface Sort {
        type: string,
        value: string
    }
    const [sort, setSort] = useState<Sort>({type: 'none', value: 'none'});

    // filters state
    interface Filters {
        brand?: string,
        age?: number,
        size?: string,
        stage?: string,
        min?: number,
        max?: number
    }
    const [filters, setFilters] = useState<Filters>();

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
        };
    };

    const handleFilterButtonClick = (name: string, value: string | number[]) => {
        switch (name) {
            case 'Marca':
                setFilters({...filters, brand: value as string});
                break;
            case 'Edad':
                let stage;
                if (value === 'Adulto senior') {
                    stage = 'SENIOR'
                } else if (value === 'Adulto') {
                    stage = 'ADULT'
                } else if (value === 'Cachorro') {
                    stage = 'BABY'
                }

                setFilters({...filters, stage: stage});
                break;
            case 'min/max':
                setFilters({...filters, min: value[0] as number, max: value[1] as number});
                break;
            default:
                break;
        };
    };

    useEffect(() => {
        setIsLoading(true);
        localStorage.setItem('page', '0');
        setFilters({});
        setSort({type: 'none', value: 'none'});
        setFilterContent((category === 'cat' || category === 'dog') ? [{name: 'Edad', values: ['Cachorro', 'Adulto', 'Adulto senior']}] : []);

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
                setDecoration({ banner: searchBanner});
                break;
        }

        getProducts({category: category, page: 0, keywords: category ? undefined : extractCategory(location.pathname)});
        setTimeout(() => setIsLoading(false), 2000)
    }, [location]);

    useEffect(() => {
        if (!filterContent.some(filter => filter.name === 'Marca')) {
            const parameter = category ? category : '';
            getProductBrands(parameter);
        }
    }, [filterContent])


    useEffect(() => {
        if (sort.type || filters) {
            localStorage.setItem('page', JSON.stringify(0));
            setCurrentPage(0);

            const parameters = {
                category: category,
                page: 0,
                price: '',
                bestseller: '',
                brand: filters?.brand,
                stage: filters?.stage,
                min: filters?.min,
                max: filters?.max,
                keywords: category ? undefined : extractCategory(location.pathname)
            };

            switch (sort.type) {
                case 'Mayor precio':
                    parameters.price = sort.value;
                    break;
                case 'Menor precio':
                    parameters.price = sort.value;
                    break;
                case 'Mas relevante':
                    parameters.bestseller = sort.value;
                    break;
                default:
                    break;
            }

            getProducts(parameters);
        }
    }, [sort, filters]);

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
                <Flex justifyContent="center" mt="3rem" mb={products.length ? '0rem' : '3rem'} gap={20}>
                    <Flex gap={5} w={{base: '28vw', xl: "22vw"}} flexDir="column">
                        <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                            <PriceSlider name={'Precio'} onClick={handleFilterButtonClick} isLoading={isLoading}/>
                        </Skeleton>
                        {filterContent.map((filterx, index) =>
                            <Skeleton key={index} isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                                <Filter name={filterx.name} options={filterx.values} onClick={handleFilterButtonClick}/>
                            </Skeleton>
                        )}
                        <Box>
                            <Image src={decoration?.poster} w="22vw" objectFit="cover"/>
                        </Box>
                    </Flex>
                    <Flex flexDir="column">
                        <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                            <Flex justifyContent="space-between" gap={10}>
                                <Heading fontSize={{ base: "2rem", xl: "3.5rem" }} fontWeight="900">{category ? 'Resultados' : cutKeyword(extractCategory(location.pathname))}</Heading>
                                <Flex gap={4} alignSelf="flex-end">
                                    <SortButton values={buttons} onClick={handleSortButtonClick}/>
                                </Flex>
                            </Flex>
                            <Text fontSize={{ base: "0.8rem", xl: "1.1rem" }} ml={{ base: "0.2rem", xl: "0.5rem" }}>{totalElements} productos</Text>
                        </Skeleton>
                        { products.length ? (
                            <>
                                <SimpleGrid columns={{base: '2', xl: '3'}} spacing={9} mt="2rem">
                                    {products?.map((product: any, index: number) =>
                                        <Skeleton key={index} isLoaded={!isProductsLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                                            <Card
                                                id={product.id}
                                                title={cutTitle(product.title)}
                                                imageUrl={product.image_url}
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
                                <Paginator pages={totalPages} handleClick={(page: number) => getProducts({category: category, page: page, bestseller: sort.value, price: sort.value, brand: filters?.brand, stage: filters?.stage, min: filters?.min, max: filters?.max, keywords: category ? undefined : extractCategory(location.pathname)})}/>
                            </>
                        ) : (
                            <Center my={10}>
                                <Image src={noProducts}/>
                            </Center>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Shop;