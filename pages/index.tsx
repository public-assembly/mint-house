import useCurationIndex from '@/hooks/useCurationIndex';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const curationIndex = useCurationIndex();
  const totalSupply = curationIndex.listed.length;

  useEffect(() => {
    if (Array.isArray(curationIndex.listed) && !!totalSupply) {
      router.push(`/${totalSupply}`);
    } else if (!curationIndex.isFetching && !curationIndex.listed) {
      router.push('/500');
    }
  }, [router, totalSupply, curationIndex]);

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <VStack
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%);'
        spacing='4'
      >
        <Spinner size='xl' />
        <Text>LOADING ...</Text>
      </VStack>
    </Box>
  );
}
