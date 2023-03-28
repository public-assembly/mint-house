//@ts-ignore
import { ParsedMintProps } from '@/types';
import { Image, Spinner } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import _ from 'lodash';
//@ts-ignore
import { Image as NextImage } from 'next/image';
import { useRouter } from 'next/router';
import Fallback from '../public/fallback_media.webp';

const DropMedia = ({ curatedAddress }: ParsedMintProps) => {
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
          src={_.get(data, 'content.large.uri')}
          poster={_.get(data, 'media.poster.uri')}
          style={{
            height: '100%',
            aspectRatio: 16 / 9,
            objectFit: 'cover',
          }}
          loop
          autoPlay
          muted
          playsInline
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
