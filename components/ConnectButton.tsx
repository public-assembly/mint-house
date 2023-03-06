import { WalletStatus } from '@/assets/icons/WalletStatus';
import { Button, Icon } from '@chakra-ui/react';
import { ConnectKitButton } from 'connectkit';
import React from 'react';

type Props = {};

const ConnectButton = (props: Props) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show }) => {
        return (
          <>
            <Button variant={isConnected ? 'outline' : 'link'} onClick={show}>
              <Icon
                as={WalletStatus}
                color={isConnected ? 'green' : 'grey'}
                mr='2'
              />
              connect to mint
            </Button>
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default ConnectButton;
