import { Flex, Text, Icon } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Flex
        w={"100%"}
        background={"brand.darkMustard"}
        h={"10vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex color={"brand.darkGreen"} alignItems={"center"} gap={8}>
          <Icon as={FaPaw} boxSize={"3.5rem"} ml={10} />
        </Flex>
        <Flex color={"brand.darkGreen"} alignItems={"center"} gap={2} mr={10}>
          <Icon as={FaLock} boxSize={"2rem"} />
          <Text fontSize={"lg"} fontWeight={600}>
            Compra segura
          </Text>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
