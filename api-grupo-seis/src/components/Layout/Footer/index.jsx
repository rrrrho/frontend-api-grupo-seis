import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Box background="#E8C07D" height="15vh" padding="4">
        <Flex direction="column" justify="center" align="center" height="100%">
          <Text fontWeight="bold" color="#4E6E52" mb="2">Hecho con <FaHeart style={{ display: 'inline' }} color="#4E6E52" /> por Grupo 6</Text>
          <Flex>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              color="#4E6E52"
              background="#E8C07D"
              marginRight="2"
            />
            <IconButton
              aria-label="YouTube"
              icon={<FaYoutube />}
              color="#4E6E52"
              background="#E8C07D"
              marginRight="2"
            />
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              color="#4E6E52"
              background="#E8C07D"
            />
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;