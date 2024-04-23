import { Box } from "@chakra-ui/react";
import Banner from "./Banner";

const Home = () => {
    return (
        <Box bg="brand.darkBeige">
            <Box w={'100%'} background={'brand.darkMustard'} h={'10vh'}/>
            <Banner/>
        </Box>
    );
};

export default Home;