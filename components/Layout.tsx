import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from '@chakra-ui/react';

export default function Layout({ children }: any) {
  return (
    <>
      <Container centerContent maxW='1768px' h='100vh'>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
