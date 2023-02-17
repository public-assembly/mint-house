import { DropList } from '@/components/DropList';
import { Box } from '@chakra-ui/react';
import { collectionData } from "@/data";

export default function Home({ drops }) {
  return (
    <Box display="flex" h="100%" justifyContent="center" alignItems="center">
      <DropList collectionData={drops} />
    </Box>
  );
}

export async function getStaticProps() {
  const results = collectionData;
  return {
    props: {
      drops: results,
    },
  };
}