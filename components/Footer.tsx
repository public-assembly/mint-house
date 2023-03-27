import React from 'react';
import Image from 'next/image';
import { HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <HStack justifyContent={'center'} alignItems='center' h='4rem'>
      <Link
        as={NextLink}
        href='https://public---assembly.com/'
        target='_blank'
        passHref
      >
        <Image
          src={'/pa-footer-white-logo.svg'}
          width={50}
          height={50}
          alt='public assembly logo'
        />
      </Link>
    </HStack>
  );
};

export default Footer;
