import { VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMedia from '@/components/DropMedia';
import DropNav from '@/components/DropNav';

const MintPage = () => {
  return (
    <VStack h='100%' spacing={'3%'}>
      <DropMedia />
      <DropNav />
      <DropInfoBox />
    </VStack>
  );
};

export default MintPage;
