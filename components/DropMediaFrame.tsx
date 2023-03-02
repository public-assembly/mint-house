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
      borderRadius='9999px'
      boxShadow='2px 2px 5px #0000008A'
      minH='300px'
      maxH='600px'
      sx={{ aspectRatio: '1 !important' }}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </Box>
  );
};

export default DropMediaFrame;
