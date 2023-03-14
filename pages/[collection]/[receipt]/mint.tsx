import { Box, HStack, SlideFade, Text, VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import DropNav from '@/components/DropNav';
//@ts-ignore
import { useNFT, useNFTMetadata } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { NFTProps, tokenFetch } from '@/utils/tokenFetch';
import DropMedia from '@/components/DropMedia';
import { useRouter } from 'next/router';

const MintPage = ({ collection, receipt, curatedAddress }: NFTProps) => {
  const router = useRouter();
  return (
    <HStack
      justifyContent='space-around'
      alignItems='center'
      w='100%'
      spacing='10'
    >
      <SlideFade key={router.route} in={true} offsetX='100px'>
        <DropMediaFrame>
          <DropMedia curatedAddress={curatedAddress} />
        </DropMediaFrame>
      </SlideFade>
      {/* <DropNav /> */}

      <SlideFade key={router.route} in={true} offsetX='-100px'>
        <DropInfoBox curatedAddress={curatedAddress} />
      </SlideFade>
    </HStack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
