
import { Box, Flex, Link } from "@chakra-ui/react";
import Banner from "./Banner";
import dogImage from "../../assets/img/home/dog.png"; 
import catImage from "../../assets/img/home/cat.png"; 
import pecesImage from "../../assets/img/home/pez.png";
import hamstersImage from "../../assets/img/home/hamnster.png";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
        {isLoading && <Loading />}
        <Box w={'100vw'} mb = "4rem">
            <Banner/>
            <Flex justify="center" mt="4rem">
                <Link href="/shop/perros" mx={4} textDecoration="none">
                    <img src={dogImage} alt="Dog" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />
                </Link>
                <Link href="/shop/gatos" mx={4} textDecoration="none">
                    <img src={catImage} alt="Cat" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />   
                </Link>
                <Link href="/shop/peces" mx={4} textDecoration="none">
                    <img src={pecesImage} alt="Pez" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />   
                </Link>
                <Link href="/shop/hamsters" mx={4} textDecoration="none">
                    <img src={hamstersImage} alt="Hamster" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />   
                </Link>
            </Flex>
        </Box>  
        </>
    );
};

export default Home;
