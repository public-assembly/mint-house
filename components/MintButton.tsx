import useZoraMint from '@/hooks/useZoraMint';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type MintButtonProps = {
  publicSalePrice: number;
  curatedAddress?: `0x${string}`;
};
const MintButton = ({ publicSalePrice, curatedAddress }: MintButtonProps) => {
  const [mintAmount, setMintAmount] = useState('1');

  const { data, isLoading, isSuccess, contractError, mint } = useZoraMint({
    mintAmount,
    publicSalePrice,
    curatedAddress,
  });

  return (
    <VStack>
      {contractError ? (
        <Button variant='ghost' disabled>
          mint closed
        </Button>
      ) : (
        <>
          <HStack justify='center' spacing={3}>
            <Button
              variant='ghost'
              aria-label='decrement mint amount'
              isDisabled={+mintAmount < 2}
              position='relative'
              onClick={() =>
                setMintAmount(
                  +mintAmount - 1 > 0 ? String(+mintAmount - 1) : '0'
                )
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

          <Button variant='ghost' onClick={mint}>
            {isLoading ? 'minting...' : 'mint now'}
          </Button>
        </>
      )}
    </VStack>
  );
};

export default MintButton;
