import React from 'react';
import Image from 'next/image';
import { HStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack justifyContent={'center'} alignItems='center' mb='2rem'>
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
