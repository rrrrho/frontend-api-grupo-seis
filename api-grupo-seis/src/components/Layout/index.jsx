import React from "react";
import Header from "./Header";
import CheckoutHeader from "./CheckoutHeader";
import Footer from "./Footer";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Flex flexDir="column" h="100vh">
      {location.pathname === "/checkout" ? <CheckoutHeader /> : <Header />}
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;