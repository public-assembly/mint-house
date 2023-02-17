import {
  Box,
  Button,
  List,
  ListItem,
  Icon,
  Spacer,
  Text,
  HStack,
} from '@chakra-ui/react';
import { WalletStatus } from '../components/icons/WalletStatus';
import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { FaEthereum } from 'react-icons/fa';

type Props = {};

const DropInfoBox = (props: Props) => {
  return (
    <>
      <Box
        border='1px solid black'
        p={['2rem !important']}
        boxShadow='2px 2px 5px #0000008A'
        mt='3rem'
      >
        <List spacing={['0', '2', '3', '4']}>
          <ListItem>Felt Zine Drop X</ListItem>
          <ListItem>Creator: 0x15...c170</ListItem>
          <ListItem>0.001 ETH</ListItem>
          <ListItem>15 minted</ListItem>
          <ListItem>0d 0h 0m 0s</ListItem>
        </List>
        <HStack
          justifyContent='center'
          alignItems='center'
          mt={['3', '5', '7', '9']}
        >
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
              return (
                <>
                  <Button
                    variant={isConnected ? 'outline' : 'link'}
                    onClick={show}
                  >
                    {isConnected ? (
                      <Text>
                        <Icon as={FaEthereum} mr='2' />
                        0.001&nbsp;
                      </Text>
                    ) : (
                      <Icon
                        as={WalletStatus}
                        color={isConnected ? 'green' : 'grey'}
                        mr='2'
                      />
                    )}

                    {isConnected ? '- mint now' : 'connect to mint'}
                  </Button>
                </>
              );
            }}
          </ConnectKitButton.Custom>
        </HStack>
      </Box>
    </>
  );
};

export default DropInfoBox;
