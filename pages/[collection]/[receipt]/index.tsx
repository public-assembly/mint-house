import {
  Box,
  Button,
  HStack,
  ScaleFade,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react';

import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import DropNav from '@/components/DropNav';
//@ts-ignore
import { useNFT, useNFTMetadata } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { NFTProps, tokenFetch } from '@/utils/tokenFetch';
import DropMedia from '@/components/DropMedia';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import { Drops } from '@/types';
import NextLink from 'next/link';

const MintPage = ({ curatedAddress }: NFTProps) => {
  const router = useRouter();
  const { collection, receipt } = router.query;
  const receiptNum = Number(receipt);
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });

  const { data, fetching, error } = result;

  if (error) {
    router.push('/500');
  }

  const goToDetail = () => {
    router.push(`/${collection}/${receipt}/mint`);
  };

  const drops: Drops = data;

  const totalSupply = _.get(drops, 'tokens.nodes.length');

  const getNext = () => {
    if (totalSupply && receipt && receiptNum < totalSupply) {
      return receiptNum + 1;
    }
  };

  const getPrev = () => {
    if (receipt && receiptNum > 1) {
      return receiptNum - 1;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      justifyContent={'space-between'}
      alignContent='center'
      w='100%'
      h='100%'
    >
      {receiptNum > 1 ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${collection}/${getPrev()}`}>
            ← ◯ prev
          </Link>
        </Button>
      ) : (
        <Button variant='link' disabled cursor='not-allowed'>
          ← ◯ prev
        </Button>
      )}
      <ScaleFade key={router.route} initialScale={0.7} in={true}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          w='auto'
          h='600px'
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={goToDetail}
          overflow='hidden'
          cursor='pointer'
          sx={{
            WebkitMaskImage: isOpen ? 'none' : 'url(../../media_frame.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            aspectRatio: '16 / 9',
          }}
        >
          <DropMedia curatedAddress={curatedAddress} />
        </Box>
      </ScaleFade>
      {totalSupply && receiptNum < totalSupply ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${collection}/${getNext()}`}>
            next ◯ →
          </Link>
        </Button>
      ) : (
        <Button variant='link' disabled cursor='not-allowed'>
          next ◯ →
        </Button>
      )}
    </HStack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
