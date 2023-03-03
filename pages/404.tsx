import { Box, Button, Container, Link, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';

type Props = {};

const FourOhFour = (props: Props) => {
  return (
    <>
      <Head>
        <title>mint house - not found</title>
      </Head>
      <VStack
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%);'
        spacing='4'
      >
        <div>Lost in the sauce again! That page doesn&apos;t exist.</div>
        <Button variant={'link'}>
          <Link as={NextLink} href='/'>
            <div>Go home?</div>
          </Link>
        </Button>
      </VStack>
    </>
  );
};

export default FourOhFour;
