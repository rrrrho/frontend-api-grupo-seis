import { Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, NumberInput, NumberInputField, Select, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';


const Register = () => {
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [confirmedEmail, setConfirmedEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");

    return(
        <Flex boxSize={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Stack w={'55vw'} bg="rgba(78,110,82,0.3)" borderRadius={10} py={'2rem'} px={'4rem'}>
        <Heading pb={'1rem'}>Registrate</Heading>
        <form> 
            <Flex flexDir={'column'} gap={5}>
            <Flex align="center">
                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Nombre</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </FormControl>

                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Apellido</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                </FormControl>
                </Flex>

                <Flex align="center">
                <FormControl isRequired mr="0.5em" w={'49.1%'}>
                <FormLabel mb="0.1em">DNI</FormLabel>
                <NumberInput variant="brandSecondary">
                    <NumberInputField
                    type="number"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    />
                </NumberInput>
                </FormControl>

                <FormControl isRequired w={'49.2%'}>
                <FormLabel mb="0.1em">Teléfono celular</FormLabel>
                <NumberInput variant="brandSecondary">
                    <InputGroup variant="brandSecondary">
                    <InputLeftAddon>+54</InputLeftAddon>
                    <NumberInputField
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </InputGroup>
                </NumberInput>
                </FormControl>
                </Flex>

                <Flex align="center">
                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Correo</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </FormControl>

                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Confirmar correo</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="email"
                    value={confirmedEmail}
                    onChange={(e) => setConfirmedEmail(e.target.value)}
                />
                </FormControl>
                </Flex>

                <Flex align="center">
                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Contraseña</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </FormControl>

                <FormControl isRequired mr="0.5em">
                <FormLabel mb="0.1em">Confirmar contraseña</FormLabel>
                <Input
                    variant="brandSecondary"
                    type="password"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                </FormControl>

                </Flex>
                <Button type={'submit'} variant={'brandPrimary'} alignSelf={'center'}>Registrarme</Button>
                </Flex>
        </form>
      
    </Stack>
    </Flex>
    )
}
export default Register;