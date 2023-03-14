import { DropList } from '@/components/DropList';
import {
  Box,
  HStack,
  ScaleFade,
  Spinner,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from 'urql';
import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import Fallback from '../public/fallback_media.webp';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });

  const { data, fetching, error } = result;

  if (error) {
    router.push('/500');
  }

  return (
    <HStack justifyContent={'space-between'} alignContent='center'>
      <p>prev</p>
      <ScaleFade key={router.route} initialScale={0.7} in={true}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          background='white'
          onClick={isOpen ? onClose : onOpen}
          w='50%'
          h='50%'
          filter='auto'
          blur={isOpen ? 'none' : '20px'}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          sx={{
            WebkitMaskImage: isOpen ? 'none' : 'url(./media_frame.svg)',
            WebkitMaskSize: '50%',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <video
            width='100%'
            height='100%'
            style={{ borderRadius: '20px' }}
            autoPlay
            loop
            muted
          >
            <source
              src='https://assets.codepen.io/6093409/river.mp4'
              type='video/mp4'
            />
          </video>
        </Box>
      </ScaleFade>
      <p>next</p>
    </HStack>
  );
}
