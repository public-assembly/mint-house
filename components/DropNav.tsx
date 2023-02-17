import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const DropNav = (props: Props) => {
  return (
    <HStack w='100%' justifyContent={'space-between'}>
      <Button variant='link'>← ◯ prev</Button>
      <Button variant='link'>next ◯ →</Button>
    </HStack>
  );
};

export default DropNav;
