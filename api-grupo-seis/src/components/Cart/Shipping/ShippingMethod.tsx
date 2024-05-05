import { Button, Collapse, Flex, Input, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShippingOption from "./ShippingOption";
import { useAppDispatch, useAppSelector } from "../../../context/hooks";
import options from './options.json';
import { setShippingData } from "../../../context/slices/cartSlice";
const ShippingMethod = () => {
    const shippingSelection = useAppSelector((state) => state.cart.shipping);
    const [postalCode, setPostalCode] = useState(shippingSelection.postalCode);
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();

    const handleSearch = () => {
        setShow(true);
    };

    useEffect(() => {
        localStorage.setItem('shipping', JSON.stringify(shippingSelection));
    }, [shippingSelection]);

    useEffect(() => {
        if (show) {
            setShow(false);
            dispatch(setShippingData({ postalCode: postalCode, option: { id: 0, price: 0 } }));
        }
    }, [postalCode])

    useEffect(() => {
        if (postalCode > 0) {
            setShow(true);
        }
    }, [])

    return (
        <Flex bg={'rgba(78,110,82,0.2)'} borderRadius={10} p={5} flexDir={'column'}>
            <Flex flexDir={'column'} w={'100%'} gap={3}>
                <Text fontWeight={600}>Medios de envio</Text>
                <Flex alignItems={'center'} gap={2}>
                    <Input variant={'baseStyle'} placeholder='Codigo postal' value={postalCode !== 0 ? postalCode : ''} onChange={(e) => setPostalCode(!Number.isNaN(parseInt(e.target.value)) ? parseInt(e.target.value) : 0)}/>
                    <Button variant={'brandPrimary'} px={"2rem"} onClick={handleSearch}>Ok</Button>
                </Flex>
                <Link href='https://www.correoargentino.com.ar/formularios/cpa' color={"brand.darkGreen"} fontSize={'0.8rem'}>No sé mi código postal</Link>
            </Flex>
            <Collapse in={show} animateOpacity>
                <ShippingOption options={options} postalCode={postalCode}/>
            </Collapse>
        </Flex>
    );    
};

export default ShippingMethod;