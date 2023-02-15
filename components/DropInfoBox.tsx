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

type Props = {};

const DropInfoBox = (props: Props) => {
  return (
    <>
      <Box
        border='1px solid black'
        p={['4', '6', '10', '14']}
        sx={{ boxShadow: '2px 2px 5px #0000008A' }}
      >
        <List spacing={['0', '2', '3', '4']}>
          <ListItem>Felt Zine Drop X</ListItem>
          <ListItem>Creator: 0x15...c170</ListItem>
          <ListItem>0.001 ETH</ListItem>
          <ListItem>15 minted</ListItem>
          <ListItem>0d 0h 0m 0s</ListItem>
        </List>
        <HStack justifyContent='center' alignItems='center'>
          <Button variant='link' mt={['3', '5', '7', '9']}>
            <Icon as={WalletStatus} color='#D9D9D9' mr='3' />
            connect to mint
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default DropInfoBox;
