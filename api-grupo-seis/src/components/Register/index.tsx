import { Button, Flex } from '@chakra-ui/react'
import React from 'react';


const Register = () => {
    return(
        <Flex h="100%" mt={'5rem'}>
            <Flex backgroundColor="rgba(78, 110, 82, 0.4)" borderRadius={10} boxSize={'30rem'}> 
                <Button variant={"brandSecondary"} marginTop={"10em"}>Registrarme</Button>
            </Flex>
        </Flex>
    )
}
export default Register;