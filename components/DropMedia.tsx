//@ts-ignore
import { useNFTContent } from '@zoralabs/nft-hooks';
import Fallback from '../public/fallback_media.webp';

type DropMediaProps = {
  uri: string;
  mimeType: string;
};

const DropMedia = ({ uri, mimeType }: DropMediaProps) => {
  {
    const { error, content } = useNFTContent(uri, mimeType);

    if (error) {
      return <div>Error fetching content</div>;
    }

    if (!error && !content) {
      return <div>LOADING...</div>;
    }
    if (content) {
      if (content.type === 'text') {
        return <div>{content.text}</div>;
      }
      if (content.mimeType.startsWith('audio')) {
        return <audio src={content.uri} />;
      }
      if (content.mimeType.startsWith('video')) {
        return (
          <video
            src={content.uri}
            style={{
              height: '100vh',

              objectFit: 'cover',
            }}
            loop
            autoPlay
            controls
            muted
          />
        );
      }
      if (content.mimeType.startsWith('image')) {
        return (
          <img src={content ? content.uri : Fallback} alt='drop content' />
        );
      }
      return <div>unknown: {content.mimeType}</div>;
    }
    return null;
  }
};

export default DropMedia;
