import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Container } from '@chakra-ui/react';

export default function Layout({ children }: any) {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        h='100vh'
        minH={'828px'}
      >
        <Container
          centerContent
          maxW='1768px'
          my={['1rem', null, null, '2rem']}
          flex='1'
          alignSelf={'stretch'}
        >
          <NavBar />
          <Box h={'80vh'} w='100%'>
            {children}
          </Box>
        </Container>
        <Box mt={2}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
