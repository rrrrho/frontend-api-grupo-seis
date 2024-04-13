import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Flex, Spacer } from '@chakra-ui/react'

const Layout = ({children}) => {
  return (
    <Flex flexDir="column" minH="100vh">
        <Header />
        {children}
        <Spacer />
        <Footer/>  
    </Flex>
  )
}

export default Layout