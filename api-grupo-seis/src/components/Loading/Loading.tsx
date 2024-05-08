import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
  
const Loading = () => {
    return (
      <Box h={'calc(100vh - 128px)'} w={'99vw'} position={'absolute'}>
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backdropFilter="blur(10px)"
            zIndex={9999}
        >
            <Spinner 
            size={'xl'} 
            thickness='5px'
            speed='0.65s'
            emptyColor='gray.200'
            color={'brand.darkGreen'}/>
        </Box>
      </Box>
    );
};
  
export default Loading;
  