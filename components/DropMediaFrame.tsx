import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type DropMediaFrameProps = {
  children: ReactNode;
};

const DropMediaFrame = ({ children }: DropMediaFrameProps) => {
  return (
    <Box
      overflow='hidden'
      border='1px solid black'
      boxShadow='2px 2px 5px #0000008A'
      display='flex'
      justifyContent='center'
      alignItems='center'
      h='100%'
    >
      {children}
    </Box>
  );
};

export default DropMediaFrame;
