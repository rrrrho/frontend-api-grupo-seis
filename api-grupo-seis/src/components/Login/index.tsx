import { useDisclosure, Flex, Skeleton, Stack, Heading, FormControl, FormLabel, Input, NumberInput, NumberInputField, InputGroup, InputLeftAddon, Button, Text, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../context/hooks";
import { setUser } from "../../context/slices/userSlice";
import Loading from "../Loading";
import ModalCountdown from "../Modal/ModalCountdown";
import ModalError from "../Modal/ModalError";
import NavLink from "../Layout/Header/NavLink";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();
    const { isOpen: isOpenError, onOpen: onOpenError, onClose: onCloseError } = useDisclosure();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const users = [
        {
            name: 'Juana',
            lastname: 'Lopez',
            email: 'juana12@gmail.com',
            password: '123'
        },
        {
            name: 'Pedro',
            lastname: 'Hernandez',
            email: 'pedrito123@gmail.com',
            password: '1234'
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let user = users.find(u => u.email == email && u.password == password)

        if (user) {
            dispatch(setUser({ name: user.name, lastName: user.lastname, id: 1 }));
            localStorage.setItem('user', JSON.stringify({ name: user.name, lastName: user.lastname }));
            localStorage.setItem("isLogged", "true");

            onOpenSuccess();

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } else {
            onOpenError();
        }
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
                <Skeleton isLoaded={!isLoading} startColor='brand.darkGreen' endColor='brand.lightGreen'>
                    <Stack w={'50vw'} bg="rgba(78,110,82,0.9)" borderRadius={10} py={'4rem'} px={'4rem'}>
                    <Heading pb={'1rem'} color={'brand.lightBeige'}>Si ya tenes cuenta, ¡inicia sesion!</Heading>
                        <form> 
                            <Flex flexDir={'column'} gap={5}>


                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Correo electronico</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl isRequired mr="0.5em">
                                    <FormLabel mb="0.1em" color={'brand.lightBeige'}>Contraseña</FormLabel>
                                    <Input
                                        variant="brandSecondary"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                                <Flex flexDir={'column'} alignItems={'center'} gap={3}>
                                    <Button color={'brand.lightBeige'} type={'submit'} variant={'brandThird'} alignSelf={'center'} onClick={handleSubmit}>Continuar</Button>
                                    <Link href='/register' color={'brand.lightBeige'}><Text color={'brand.lightBeige'}>¿No tenes cuenta? Registrate aca.</Text></Link>
                                </Flex>
                            
                                <ModalCountdown isOpen={isOpenSuccess} onClose={onCloseSuccess} title="¡Bienvenido/a de nuevo!" />
                                <ModalError isOpen={isOpenError} onClose={onCloseError} title="Email y/o contrañena incorrecta. Por favor, intentelo nuevamente." />
                            </Flex>
                        </form>
                    </Stack>
                </Skeleton>
            </Flex>
        </>
    )
}

export default Login;