//@ts-ignore
import { Image as NextImage } from 'next/image';
import { Image, Spinner } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import Fallback from '../public/fallback_media.webp';
import { useRouter } from 'next/router';
import _ from 'lodash';

const DropMedia = () => {
  const { contract, token } = useRouter().query;
  const { data, error } = useNFT(contract as string, token as string);

  if (error) {
    return <div>Error fetching content</div>;
  }

  if (!error && !data) {
    return <Spinner size='xl' />;
  }
  if (data) {
    if (_.get(data, 'nft.tokenUrlMimeType') === 'text') {
      return <div>{data.nft?.contentURI}</div>;
    }
    //@ts-ignore
    if (_.get(data, 'nft.tokenUrlMimeType').startsWith('audio')) {
      return <audio src={data.nft?.contentURI} />;
    }
    //@ts-ignore
    if (_.get(data, 'nft.tokenUrlMimeType').startsWith('video')) {
      return (
        <video
          src={data.content?.large?.uri}
          style={{
            height: '96vh',
            aspectRatio: 16 / 9,
            objectFit: 'cover',
          }}
          loop
          autoPlay
          controls
          muted
        />
      );
    }
    //@ts-ignore
    if (_.get(data, 'nft.tokenUrlMimeType').startsWith('image')) {
      return (
        <>
          {data ? (
            <Image src={_.get(data, 'media.thumbnail.uri')} alt='drop media' />
          ) : (
            <NextImage src={Fallback} alt='drop media' />
          )}
        </>
      );
    }
    return <div>Unknown Media: {_.get(data, 'nft.tokenUrlMimeType')}</div>;
  }
  return null;
};

export default DropMedia;
