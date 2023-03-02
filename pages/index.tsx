import { DropList } from '@/components/DropList';
import { Box } from '@chakra-ui/react';
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
      {!fetching ? <DropList drops={data} /> : 'LOADING...'}
      {error && 'Something went wrong... please refresh the page.'}
    </Box>
  );
}
