import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Container, Spacer } from '@chakra-ui/react';

export default function Layout({ children }: any) {
  return (
    <>
      <Container centerContent maxW='1768px' my='2rem'>
        <NavBar />
        <Box h={'65vh'}>{children}</Box>
        <Footer />
      </Container>
    </>
  );
}
