import { Grid, GridItem, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PiBoneFill } from "react-icons/pi";

interface Card {
    title: string,
    description: string,
    subtitle: string,
    image?: string
}

interface Props {
    cards: Card[]
}

const InfoCards = ({cards} : Props) => {
    return (
        <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
        >
            
            <GridItem colSpan={2} display={'flex'}>
                <Flex w={'45%'} bg={'brand.lightMustard'} h={'100%'} justifyContent={'center'} alignItems={'center'} borderBottomLeftRadius={10} borderTopLeftRadius={10}>
                    <Image src={cards[0].image} w={'80%'} h={'100%'}/>
                </Flex>
                <Flex w={'90%'} borderBottomRightRadius={10} borderTopRightRadius={10} flexDir={'column'} pr={10} alignItems={'end'} textAlign={'end'}  bg={'#583123'} h={'100%'} lineHeight={1.2} justify={'center'}>
                    <Text fontSize={'3.2rem'} fontWeight={600} color={'brand.lightBeige'}>{cards[0].title}</Text>
                    <Text fontSize={'1.3rem'} color={'brand.lightBeige'} >{cards[0].description}</Text>
                    <Text fontSize={'1.3rem'} color={'brand.lightMustard'}>{cards[0].subtitle}</Text>
                </Flex>
            </GridItem>

            <GridItem colSpan={2} bg={'#583123'} borderRadius={10} display={'flex'} flexDir={'column'} justifyContent={'center'} textAlign={'center'} h={'100%'} lineHeight={1.3}>
                <Flex alignItems={'center'} justifyContent={'center'} gap={3}>
                    <Text fontSize={'3.2rem'} fontWeight={600} color={'brand.lightBeige'}>{cards[1].title}</Text>
                    <Icon as={PiBoneFill} boxSize={'3rem'} color={'brand.darkMustard'}/>
                </Flex>
                <Text fontSize={'1.3rem'} px={10} color={'brand.lightBeige'}>{cards[1].description}</Text>
                <Text fontSize={'1rem'} mt={2} color={'brand.lightMustard'}>{cards[1].subtitle}</Text>
            </GridItem>

            <GridItem colSpan={4} display={'flex'}>
                <Flex borderBottomLeftRadius={10} borderTopLeftRadius={10} flexDir={'column'} pl={10} w={'55%'} bg={'#583123'} h={'100%'} lineHeight={1.2} justify={'center'}>
                    <Text fontSize={'1.3rem'} color={'brand.lightMustard'}>{cards[2].subtitle}</Text>
                    <Text fontSize={'3.2rem'} fontWeight={600} color={'brand.lightBeige'}>{cards[2].title}</Text>
                    <Text fontSize={'1.3rem'} w={'85%'} color={'brand.lightBeige'}>{cards[2].description}</Text>
                </Flex>
                <Flex w={'45%'} bg={'brand.lightMustard'} h={'100%'} justifyContent={'center'} alignItems={'center'} borderBottomRightRadius={10} borderTopRightRadius={10}>
                    <Image src={cards[2].image} w={'55%'} h={'100%'}/>
                </Flex>
            </GridItem>
        </Grid>
    );
};

export default InfoCards;