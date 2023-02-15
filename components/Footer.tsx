import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack
      justifyContent={'center'}
      alignItems='center'
      position='absolute'
      bottom='0'
    >
      <Image
        src={'/pa-footer-white-logo.svg'}
        width={50}
        height={50}
        alt='public assembly logo'
      />
    </HStack>
  );
};

export default Footer;
