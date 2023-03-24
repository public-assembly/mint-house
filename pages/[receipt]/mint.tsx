import {
  Box,
  HStack,
  SlideFade,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import _ from 'lodash';
import { NFTProps, tokenFetch } from '@/utils/tokenFetch';
import DropMedia from '@/components/DropMedia';
import { useRouter } from 'next/router';

const MintPage = ({ collection, receipt, curatedAddress }: NFTProps) => {
  const router = useRouter();
  return (
    <Stack
      flexDirection={['column', 'column', 'column', 'row']}
      justifyContent='space-between'
      alignItems='center'
      w='100%'
    >
      <Box
        w={['100%', '100%', '100%', '66%']}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <SlideFade key={router.route} in={true} offsetX='100px'>
          <DropMediaFrame>
            <DropMedia curatedAddress={curatedAddress} />
          </DropMediaFrame>
        </SlideFade>
      </Box>

      <Box
        w={['100%', '100%', '100%', '33%']}
        display='flex'
        justifyContent='center'
        alignItems='center'
        pt={['1rem', '1rem', '2rem', 0]}
      >
        <SlideFade key={router.route} in={true} offsetX='-100px'>
          <DropInfoBox curatedAddress={curatedAddress} />
        </SlideFade>
      </Box>
    </Stack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
