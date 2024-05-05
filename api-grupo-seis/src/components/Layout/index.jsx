import React from "react";
import Header from "./Header";
import CheckoutHeader from "./CheckoutHeader";
import Footer from "./Footer";
import { Flex, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Flex flexDir="column" minH="100vh">
      {location.pathname === "/checkout" ? <CheckoutHeader /> : <Header />}
      {children}
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
