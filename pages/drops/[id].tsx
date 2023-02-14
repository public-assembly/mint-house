import { Image, VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';

const MintPage = () => {
  return (
    <VStack h='85vh'>
      <Image
        minH={400}
        width='auto'
        overflow='hidden'
        border='1px solid black'
        borderRadius='9999px'
        sx={{ aspectRatio: 1, boxShadow: '2px 2px 5px #0000008A' }}
        src='/fallback_media.webp'
        alt='Image'
      />
      <DropInfoBox />
    </VStack>
  );
};

export default MintPage;
