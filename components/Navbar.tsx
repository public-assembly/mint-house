import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Button, HStack, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <HStack w='100%' mb='2rem'>
      <Button variant='link'>
        <Link href='/'>mint house</Link>
      </Button>
      <Spacer />
      <Button variant='link'>
        <Link href='/'>connect</Link>
      </Button>
    </HStack>
  );
};

export default NavBar;
