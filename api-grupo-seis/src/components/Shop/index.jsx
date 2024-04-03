import { Box, Button, Container, Flex, Grid, GridItem, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import Card from "./Card";

const Shop = () => {
    return (
        <Box mb="15rem">
            <Box bg="brand.lightGreen" h="35vh" position="relative">
                <Box position="absolute" bottom="-5" left={{"lg": "3%", "xl": "11%"}} h={{"lg": "120%", "xl": "130%"}} >
                    <Image src="src/assets/img/shop-banner.svg" objectFit="cover" h="100%" w="100%"></Image>
                </Box>
            </Box>
            <Flex justifyContent="center" gap="10" mt="3rem">
                <Box bg="brand.lightGreen" h="40vh" w="25vw">
                </Box>
                <Box>
                    <Box>
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
                    </Box>
                    <SimpleGrid columns={3} spacing={9} mt="2rem">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>

/*
        <Grid
        minH='75vh'
        templateRows='repeat(10, 1fr)'
        templateColumns='repeat(16, 1fr)'
        gap={6}
        >
        <GridItem rowSpan={3} colSpan={16} bg="brand.lightGreen" />
        <GridItem rowSpan={7} colSpan={4} colStart={2} bg="brand.lightGreen" />
        <GridItem rowSpan={1} colSpan={10} colStart={6} p="0 2rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Heading fontSize="3rem" fontWeight="900">Comida</Heading>
                <Text fontSize="1rem" ml="0.5rem">863 resultados</Text>
            </Box>
            <Box>
                <Button variant="brandPrimary">Todo</Button>
                <Button variant="brandPrimary">Mas relevante</Button>
                <Button variant="brandPrimary">Mayor precio</Button>
                <Button variant="brandPrimary">Menor precio</Button>
            </Box>
        </GridItem>
        <GridItem rowSpan={6} colSpan={10} bg="brand.lightGreen">
            <Flex wrap="wrap" >
                <Card></Card>
                <Card></Card>
                <Card></Card>
                
            </Flex>
        </GridItem>
        </Grid>
        */
    )
}

export default Shop;