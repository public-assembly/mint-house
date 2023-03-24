import Link from 'next/link';

import { Button, HStack, Spacer, useDisclosure } from '@chakra-ui/react';
import SearchModal from './SearchModal';

const NavBar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <HStack
      w='100%'
      h='4rem'
      justifyContent='space-between'
      alignItems='center'
    >
      <Button variant='link'>
        <Link href='/'>mint house</Link>
      </Button>
      <Spacer />
      <SearchModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Button variant='link' onClick={onOpen}>
        search
      </Button>
    </HStack>
  );
};

export default NavBar;
