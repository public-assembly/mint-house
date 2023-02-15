import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Container, Spacer } from '@chakra-ui/react';

export default function Layout({ children }: any) {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        h='100vh'
        minH={['680px', '650px', '725px', null]}
      >
        <Container
          centerContent
          maxW='1768px'
          mt={['1rem', null, null, '2rem']}
          flex='1'
          alignSelf={'stretch'}
        >
          <NavBar />
          <Box h={'80vh'}>{children}</Box>
        </Container>
        <Spacer />
        <Footer />
      </Box>
    </>
  );
}
