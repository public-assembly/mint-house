import Head from 'next/head';
import { DropList } from '@/components/DropList';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      display='flex'
      w='100%'
      h='100%'
      justifyContent='center'
      alignItems='center'
    >
      <DropList />
    </Box>
  );
}
