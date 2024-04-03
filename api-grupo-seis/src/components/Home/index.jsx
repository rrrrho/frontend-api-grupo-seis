import { Box, Button, Heading, Input } from "@chakra-ui/react";
import Card from "../Shop/Card";


const Home = () => {
    return (
        <Box bg="brand.darkBeige">
            <Heading fontSize="48px">Comida</Heading>
            <Button variant="brandPrimary">Mas relevante</Button>
            <Button variant="brandSecondary" m="1rem">Mayor precio</Button>
            <Button variant="brandPrimary">Mayor precio</Button>
            <Input variant="baseStyle" w="25vw" m="1rem" placeholder="Buscar..."></Input>
            <Card></Card>
        </Box>
    );
};

export default Home;