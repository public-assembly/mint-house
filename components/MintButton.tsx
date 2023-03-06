import useZoraMint from '@/hooks/useZoraMint';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type MintButtonProps = {
  publicSalePrice: number;
};
const MintButton = ({ publicSalePrice }: MintButtonProps) => {
  const [mintAmount, setMintAmount] = useState('1');

  const contractAddress = process.env
    .NEXT_PUBLIC_PRESS_ADDRESS as `0x${string}`;

  const { data, isLoading, isSuccess, mint } = useZoraMint({
    mintAmount,
    publicSalePrice,
    contractAddress,
  });

  return (
    <VStack>
      <HStack justify='center' spacing={3}>
        <Button
          variant='ghost'
          aria-label='decrement mint amount'
          isDisabled={+mintAmount < 2}
          position='relative'
          onClick={() =>
            setMintAmount(+mintAmount - 1 > 0 ? String(+mintAmount - 1) : '0')
          }
        >
          -
        </Button>

        <Text size='xl'>{mintAmount}</Text>

        <Button
          variant='ghost'
          aria-label='increment mint amount'
          position='relative'
          onClick={() => setMintAmount(String(+mintAmount + 1))}
        >
          +
        </Button>
      </HStack>
      <Button onClick={mint}>{isLoading ? 'minting...' : 'mint now'}</Button>
    </VStack>
  );
};

export default MintButton;
