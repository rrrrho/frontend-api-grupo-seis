import Footer from "./Footer";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import CheckoutHeader from "./CheckoutHeader";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <SimpleGrid row={3} column={1} minH={'100vh'}>
      {location.pathname === "/checkout" ? <CheckoutHeader /> : <Header />}
      <Flex flexDir={'column'} minH={'75vh'}>{children}</Flex>
      <Footer />
    </SimpleGrid>
  );
};

export default Layout;