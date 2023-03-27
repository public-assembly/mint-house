import { Box, Container } from '@chakra-ui/react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

export default function Layout({ children }: any) {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Container display='flex' centerContent maxW='1768px' flexGrow='1'>
        <NavBar />
        <Box
          w='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          minH='calc(100vh - 8rem)'
        >
          {children}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}
