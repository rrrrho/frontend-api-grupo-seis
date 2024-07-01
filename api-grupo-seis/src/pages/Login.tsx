import { useDisclosure, Flex, Skeleton, Stack, Heading, FormControl, FormLabel, Input, Button, Text, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../context/hooks";
import { setUser } from "../context/slices/userSlice";
import Loading from "../components/Loading/Loading";
import ModalCountdown from "../components/Modal/ModalCountdown";
import ModalError from "../components/Modal/ModalError";
import { loginUser } from "../services/LoginService";
import { decodeJwt } from "jose";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isOpen: isOpenSuccess, onOpen: onOpenSuccess, onClose: onCloseSuccess } = useDisclosure();
    const { isOpen: isOpenError, onOpen: onOpenError, onClose: onCloseError } = useDisclosure();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await loginUser({
                email: email,
                password: password,
            });
      
            if (response.status === 200) {
                const token = response.data.token;
                const claims = decodeJwt(token);
                const user = { email: claims.sub as string, role: claims.authority as string };

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(setUser(user));
                localStorage.setItem("isLogged", "true");

                onOpenSuccess();

                setTimeout(() => {
                    navigate('/');
                }, 3000);
            }
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            onOpenError();
        } finally {
            setIsLoading(false);
        };
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