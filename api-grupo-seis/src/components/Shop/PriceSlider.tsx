import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Heading, Button, Flex, Text, Popover, PopoverContent, PopoverArrow, PopoverTrigger } from "@chakra-ui/react";
import React, { useState } from "react";
import { formatPrice } from "../../utils/card";

interface Props {
    name: string,
    isLoading: boolean,
    onClick: (name: string, value: number[])=>void
}

const PriceSlider = ({name, onClick, isLoading}: Props) => {
    const [values, setValues] = useState<number[]>([20000, 80000]);

    const handleClick = () => {
        onClick('min/max', values);
    };

    return (
        <Flex bg="rgba(78,110,82,0.3)" borderRadius={10} p="2rem 4rem" flexDir={'column'} gap={4}>
            <Heading fontSize={{base: "1.4rem", xl: "1.8rem"}}>{name}</Heading>
            <RangeSlider defaultValue={[values[0], values[1]]} min={0} max={100000} step={1000} onChange={(value) => {setValues(value)}}>
                <RangeSliderTrack bg='brand.lightBeige'>
                    <RangeSliderFilledTrack bg='brand.darkMustard' />
                </RangeSliderTrack>
                <Popover isOpen={!isLoading} arrowShadowColor={'brand.darkBrown'}>
                    <PopoverTrigger>
                        <RangeSliderThumb boxSize={6} index={0} />
                    </PopoverTrigger>
                    <PopoverContent bg={'brand.darkBrown'} w={'fit-content'} p={1.5} border={'none'} borderRadius={2}>
                        <PopoverArrow bg={'brand.darkBrown'}/>
                        <Text fontSize={'0.9rem'} color={'brand.lightBeige'}>${formatPrice(values[0])}</Text>
                    </PopoverContent>
                </Popover>
                <Popover isOpen={!isLoading} placement={'top'} arrowShadowColor={'brand.darkBrown'}>
                    <PopoverTrigger>
                        <RangeSliderThumb boxSize={6} index={1} />
                    </PopoverTrigger>
                    <PopoverContent bg={'brand.darkBrown'} w={'fit-content'} p={1.5} border={'none'} borderRadius={2}>
                        <PopoverArrow bg={'brand.darkBrown'}/>
                        <Text fontSize={'0.9rem'} color={'brand.lightBeige'}>${formatPrice(values[1])}</Text>
                    </PopoverContent>
                </Popover>
            </RangeSlider>
            <Button mt={12} variant={'brandPrimary'} onClick={handleClick}>
                Buscar
            </Button>
            {/**

            <Flex gap={5} justifyContent={'center'} alignItems={'center'}>
                <Input w={'fit-content'} value={values[0]} bg={'brand.lightBeige'} borderRadius={5}/>
                <Input type={'number'} w={'fit-content'} value={values[1]} bg={'brand.lightBeige'} borderRadius={5}/>
            </Flex>
                         * 
             */}
        </Flex>
    )
};

export default PriceSlider;