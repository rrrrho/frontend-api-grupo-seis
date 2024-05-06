import { Button, Flex, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField, InputGroup, InputLeftAddon, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../context/hooks';
import { setUser } from '../../context/slices/userSlice';
import ModalSuccess from '../Modal/ModalSuccess';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

const Register = () => {
    const [name, setName] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [confirmedEmail, setConfirmedEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        dispatch(setUser({ name: name, lastName: lastname, id: 1 }));
        localStorage.setItem('user', JSON.stringify({ name: name, lastName: lastname }));
        localStorage.setItem("isLogged", "true");
        
        onOpenSuccess();

        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    return (
        <>
            {isLoading && <Loading />}
            <Flex
                boxSize={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                bgImage="url('/src/assets/img/paws.svg')"
                bgSize="cover"
                bgPosition="90px 50%"
                bgRepeat="no-repeat"
                minHeight="75vh"
            >
                <Stack w={'55vw'} bg="rgba(78,110,82,0.9)" borderRadius={10} py={'2rem'} px={'4rem'}>
                    <Heading pb={'1rem'} color={'brand.lightBeige'}>Registrate</Heading>
                    <form> 
                        <Flex flexDir={'column'} gap={5}>
                            <Flex align="center">

                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Nombre</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Apellido</FormLabel>
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
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>DNI</FormLabel>
                                    <NumberInput variant="brandSecondary">
                                        <NumberInputField
                                        type="number"
                                        value={dni}
                                        onChange={(e) => setDni(e.target.value)}
                                        />
                                     </NumberInput>
                                </FormControl>

                                <FormControl isRequired w={'49.2%'}>
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Teléfono celular</FormLabel>
                                    <NumberInput variant="brandSecondary">
                                        <InputGroup variant="brandSecondary">
                                        <InputLeftAddon color={'brand.lightBeige'}>+54</InputLeftAddon>
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
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Correo</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Confirmar correo</FormLabel>
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
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Contraseña</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Confirmar contraseña</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="password"
                                        value={confirmedPassword}
                                        onChange={(e) => setConfirmedPassword(e.target.value)}
                                    />
                                </FormControl>
                            </Flex>
                            <Button color={'brand.lightBeige'} type={'submit'} variant={'brandThird'} alignSelf={'center'} onClick={handleSubmit}>Registrarme</Button>
                            <ModalSuccess isOpen={isOpenSuccess} onClose={onCloseSuccess} title="¡Se ha realizado el registro con exito!" />
                        </Flex>
                    </form>
                </Stack>
            </Flex>
        </>
    );
};

export default Register;