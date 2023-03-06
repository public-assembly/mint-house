import { DropList } from '@/components/DropList';
import {
  Box,
  HStack,
  ScaleFade,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useQuery } from 'urql';
import { getCurationIndex } from '@/utils/gql/queries/queries';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndex,
  });

  const { data, fetching, error } = result;

  if (error) {
    router.push('/500');
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      {!fetching && !error ? (
        <ScaleFade key={router.route} initialScale={0.7} in={true}>
          <DropList drops={data} />
        </ScaleFade>
      ) : (
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
      )}
    </Box>
  );
}
