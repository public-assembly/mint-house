import { VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import DropNav from '@/components/DropNav';
//@ts-ignore
import { useNFT, useNFTMetadata } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { tokenFetch } from '@/utils/tokenFetch';
import DropMedia from '@/components/DropMedia';

const MintPage = () => {
  return (
    <VStack h='100%' spacing={'3%'}>
      <DropMediaFrame>
        <DropMedia />
      </DropMediaFrame>
      <DropNav />
      <DropInfoBox />
    </VStack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
