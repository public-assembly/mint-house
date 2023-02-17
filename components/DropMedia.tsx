import { Box } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Fallback from '../public/fallback_media.webp';

type Props = {};

const DropMedia = (props: Props) => {
  return (
    <Box
      overflow='hidden'
      border='1px solid black'
      borderRadius='9999px'
      boxShadow='2px 2px 5px #0000008A'
      sx={{ aspectRatio: '1 !important' }}
    >
      <Image src={Fallback} alt='drop media' />
    </Box>
  );
};

export default DropMedia;
