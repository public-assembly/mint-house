import { DropList } from '@/components/DropList';
import { Box, HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { useQuery } from 'urql';
import { getCurationIndex } from '@/data/queries';

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndex,
  });

  const { data, fetching, error } = result;

  if (error) {
    console.log('ERROR:', error);
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      {!fetching ? (
        <DropList drops={data} />
      ) : (
        <VStack
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%);'
          spacing='4'
        >
          <Spinner size='xl' />
          <Text>LOADING...</Text>
        </VStack>
      )}
      {error && 'Something went wrong... please refresh the page.'}
    </Box>
  );
}
