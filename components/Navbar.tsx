import React from 'react';
import Link from 'next/link';

import { Button, HStack, Spacer, Icon } from '@chakra-ui/react';
import { ConnectKitButton } from 'connectkit';
import { WalletStatus } from './icons/WalletStatus';

const NavBar = () => {
  return (
    <HStack w='100%' mb='2rem'>
      <Button variant='link'>
        <Link href='/'>mint house</Link>
      </Button>
      <Spacer />
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress, address, ensName }) => {
          return (
            <Button variant='link' onClick={show}>
              <Icon
                as={WalletStatus}
                color={isConnected ? 'green' : 'grey'}
                mr='2'
              />
              {isConnected ? ensName ?? truncatedAddress : 'connect wallet'}
            </Button>
          );
        }}
      </ConnectKitButton.Custom>
    </HStack>
  );
};

export default NavBar;
