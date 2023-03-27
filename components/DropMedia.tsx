//@ts-ignore
import { Image as NextImage } from 'next/image';
import { Image, Spinner } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import Fallback from '../public/fallback_media.webp';
import _ from 'lodash';
import { NFTProps } from '@/utils/tokenFetch';
import { useRouter } from 'next/router';

const DropMedia = ({ curatedAddress }: NFTProps) => {
  const router = useRouter();
  const { data, error } = useNFT(curatedAddress as string, '1');

  if (error) {
    return <div>Error fetching content!</div>;
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
            height: '100%',
            aspectRatio: 16 / 9,
            objectFit: 'cover',
          }}
          loop
          autoPlay
          muted
          controls={router.asPath.includes('mint')}
        />
      );
    }
    //@ts-ignore
    if (_.get(data, 'nft.tokenUrlMimeType').startsWith('image')) {
      return (
        <>
          {data ? (
            <Image
              src={_.get(data, 'media.poster.uri')}
              alt='drop media'
              style={{
                height: '100%',
                objectFit: 'cover',
              }}
            />
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
