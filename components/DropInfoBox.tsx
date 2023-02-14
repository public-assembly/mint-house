import { Box, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const DropInfoBox = (props: Props) => {
  return (
    <>
      <Spacer />
      <Box
        border='1px solid black'
        padding='20'
        sx={{ boxShadow: '2px 2px 5px #0000008A' }}
      >
        <Text>Felt Zine Drop X</Text>
        <Text>Creator: 0x15...c170</Text>
        <Text>0.001 ETH</Text>
        <Text>15 minted</Text>
        <Text>0d 0h 0m 0s</Text>
      </Box>
      <Spacer />
    </>
  );
};

export default DropInfoBox;
