import { VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import DropNav from '@/components/DropNav';
//@ts-ignore
import { useNFT, useNFTMetadata } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { tokenFetch } from '@/data/tokenFetch';
import DropMedia from '@/components/DropMedia';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';
import { getTotalSupply } from '@/data/queries';

const MintPage = ({
  contractAddress,
  id,
}: {
  contractAddress: string;
  id: string;
}) => {
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
