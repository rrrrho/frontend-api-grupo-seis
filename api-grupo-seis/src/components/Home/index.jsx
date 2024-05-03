import { Box, Flex, Link } from "@chakra-ui/react";
import Banner from "./Banner";
import dogImage from "../../assets/img/home/dog.png"; 
import catImage from "../../assets/img/home/cat.png"; 
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
        <Box>
            <Box w={'100%'} h={'10vh'}/>
            <Banner/>
            <Flex justify="center" mt="4rem">
                <Link href="/dogs" mx={4} textDecoration="none">
                    <img src={dogImage} alt="Dog" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />
                </Link>
                <Link href="/cats" mx={4} textDecoration="none">
                    <img src={catImage} alt="Dog" style={{ width: '200px', height: '200px', borderRadius: '10px', cursor: 'pointer' }} />   
                </Link>
                <Link href="/url3" mx={4} textDecoration="none">
                    <div style={{ width: '200px', height: '200px', backgroundColor: 'black', borderRadius: '10px', cursor: 'pointer' }} />
                </Link>
                <Link href="/url4" mx={4} textDecoration="none">
                    <div style={{ width: '200px', height: '200px', backgroundColor: 'black', borderRadius: '10px', cursor: 'pointer' }} />
                </Link>
            </Flex>
        </Box>
        </>
    );
};

export default Home;
