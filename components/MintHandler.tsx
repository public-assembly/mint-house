import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';
import ConnectButton from './ConnectButton';
import MintButton from './MintButton';
type MintHandlerProps = {
  publicSalePrice: number;
};
const MintHandler = ({ publicSalePrice }: MintHandlerProps) => {
  const { isConnected } = useAccount();

  return (
    <HStack
      justifyContent='center'
      alignItems='center'
      pt={['0', '4', '6', '8']}
    >
      {!isConnected ? (
        <ConnectButton />
      ) : (
        <MintButton publicSalePrice={publicSalePrice} />
      )}
    </HStack>
  );
};

export default MintHandler;
