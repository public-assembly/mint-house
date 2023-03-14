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
import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import { useRouter } from 'next/router';
import { tokenFetch } from '@/utils/tokenFetch';
import _ from 'lodash';

export default function Home() {
  const router = useRouter();
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });

  const { data, fetching, error } = result;

  const totalSupply = _.get(data, 'tokens.nodes.length');

  if (data) {
    router.push(`/${process.env.NEXT_PUBLIC_PRESS_ADDRESS}/${totalSupply}`);
  }

  if (error) {
    router.push('/500');
  }

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
