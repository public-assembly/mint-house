import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { HStack, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <HStack w='100%' my='2rem'>
      <Link href='/'>mint house</Link>
      <Spacer />
      <Link href='/'>connect</Link>
    </HStack>
  );
};

export default NavBar;
