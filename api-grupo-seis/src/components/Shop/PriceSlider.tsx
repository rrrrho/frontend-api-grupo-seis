import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Box, Heading, Button, Tooltip, Flex, Text, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils/card";

interface Props {
    name: string,
    isLoading: boolean,
    onClick: (name: string, value: string)=>void
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
                <Tooltip label={`$${formatPrice(values[0])}`} isOpen={!isLoading} bg={'brand.darkBrown'} color={'brand.lightBeige'} hasArrow arrowSize={15}>
                    <RangeSliderThumb boxSize={6} index={0} />
                </Tooltip>
                <Tooltip placement='top' label={`$${formatPrice(values[1])}`} isOpen={!isLoading} bg={'brand.darkBrown'} color={'brand.lightBeige'} hasArrow arrowSize={15}>
                    <RangeSliderThumb boxSize={6} index={1} />
                </Tooltip>
            </RangeSlider>
            <Button mt={10} variant={'brandPrimary'} onClick={handleClick}>
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