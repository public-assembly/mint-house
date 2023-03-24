import DropMedia from '@/components/DropMedia';
import useCurationIndex from '@/hooks/useCurationIndex';
import { NFTProps, tokenFetch } from '@/utils/tokenFetch';
import {
  Box,
  Button,
  HStack,
  Link,
  ScaleFade,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MintPage = ({ receipt, curatedAddress }: NFTProps) => {
  const router = useRouter();
  const receiptNum = Number(receipt);
  const curationIndex = useCurationIndex();

  useEffect(() => {
    if (curationIndex.parsed === undefined) {
      router.push('/500');
    }
  }, [curationIndex, router]);

  const goToDetail = () => {
    router.push(`/${receipt}/mint`);
  };

  const totalSupply = curationIndex.listed.length;

  const getNext = () => {
    if (totalSupply && receipt && receiptNum < totalSupply) {
      return receiptNum + 1;
    }
  };

  const getPrev = () => {
    if (receipt && receiptNum > 1) {
      return receiptNum - 1;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack>
      <HStack>
        <ScaleFade
          key={router.route}
          initialScale={0.7}
          in={!!curationIndex.listed.length}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            w={['140vw', '90vw', '70vw', '50vw']}
            h='auto'
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onClick={goToDetail}
            overflow='hidden'
            cursor='pointer'
            sx={{
              WebkitMaskImage: isOpen ? 'none' : 'url(../../media_frame.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              aspectRatio: '16 / 9',
            }}
          >
            <DropMedia curatedAddress={curatedAddress} />
          </Box>
        </ScaleFade>
      </HStack>
      <HStack
        justifyContent={[
          'space-around',
          'space-between',
          'space-between',
          'space-between',
        ]}
        alignContent='center'
        w='100%'
        h='100%'
      >
        {receiptNum > 1 ? (
          <Button variant='link'>
            <Link as={NextLink} href={`/${getPrev()}`}>
              ← ◯ prev
            </Link>
          </Button>
        ) : (
          <Button variant='link' disabled cursor='not-allowed'>
            ← ◯ prev
          </Button>
        )}

        {totalSupply && receiptNum < totalSupply ? (
          <Button variant='link'>
            <Link as={NextLink} href={`/${getNext()}`}>
              next ◯ →
            </Link>
          </Button>
        ) : (
          <Button variant='link' disabled cursor='not-allowed'>
            next ◯ →
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
