import { HStack } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import ConnectButton from './ConnectButton';
import MintButton from './MintButton';
type MintHandlerProps = {
  publicSalePrice: number;
  curatedAddress?: `0x${string}`;
};
const MintHandler = ({ publicSalePrice, curatedAddress }: MintHandlerProps) => {
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
        <MintButton
          publicSalePrice={publicSalePrice}
          curatedAddress={curatedAddress}
        />
      )}
    </HStack>
  );
};

export default MintHandler;
