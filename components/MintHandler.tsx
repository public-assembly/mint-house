import { HStack } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';
import ConnectButton from './ConnectButton';
import MintButton from './MintButton';

const MintHandler = () => {
  const { isConnected } = useAccount();

  return (
    <HStack
      justifyContent='center'
      alignItems='center'
      pt={['0', '4', '6', '8']}
    >
      {isConnected ? <ConnectButton /> : <MintButton />}
    </HStack>
  );
};

export default MintHandler;
