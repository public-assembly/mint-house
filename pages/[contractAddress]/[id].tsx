import { VStack } from '@chakra-ui/react';
import DropInfoBox from '@/components/DropInfoBox';
import DropMediaFrame from '@/components/DropMediaFrame';
import DropNav from '@/components/DropNav';
//@ts-ignore
import { useNFT } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import { tokenFetch } from '@/data/tokenFetch';
import DropMedia from '@/components/DropMedia';
import { useEffect, useState } from 'react';

const MintPage = ({
  contractAddress,
  id,
}: {
  nft: any;
  contractAddress: string;
  id: string;
}) => {
  const [mediaUri, setMediaUri] = useState<string>('');
  const [mediaType, setMediaType] = useState<string>('');
  const [metadata, setMetadata] = useState();
  const tokenAddress = contractAddress;
  const tokenId = Number(id);
  const { data, error } = useNFT(contractAddress, id);
  const nft: any = data;

  useEffect(() => {
    if (data && !metadata) {
      setMediaUri(_.get(nft, 'content.large.uri'));
      setMediaType(_.get(nft, 'content.mimeType'));
      setMetadata(_.get(nft, 'nft'));
    }
  }, [data]);

  return (
    <VStack h='100%' spacing={'3%'}>
      <DropMediaFrame>
        {mediaUri !== '' ? (
          <DropMedia uri={mediaUri} mimeType={mediaType} />
        ) : null}
      </DropMediaFrame>
      <DropNav contractAddress={tokenAddress} tokenId={tokenId} />
      {metadata ? <DropInfoBox metadata={metadata} /> : null}
    </VStack>
  );
};

export const getServerSideProps = tokenFetch;

export default MintPage;
