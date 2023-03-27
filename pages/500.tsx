import useCurationIndexData from '@/hooks/useCurationIndexData';
import { Button, Link, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type Props = {};

const FiveHundred = (props: Props) => {
  const router = useRouter();
  const curationIndex = useCurationIndexData();
  // useEffect(() => {
  //   if (curationIndex.listed !== undefined) {
  //     router.push('/');
  //   }
  // }, [curationIndex, router]);
  return (
    <>
      <Head>
        <title>mint house - not found</title>
      </Head>
      <VStack
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%);'
        spacing='4'
      >
        <div>Something went wrong back there.</div>
        <Button variant={'link'}>
          <Link as={NextLink} href='/'>
            <div>Try again?</div>
          </Link>
        </Button>
      </VStack>
    </>
  );
};

export default FiveHundred;
