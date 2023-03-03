import { getTokenData } from '@/data/queries';
import { GetServerSideProps } from 'next';
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils';
import { urqlClientZora } from '../utils/zoraClient';
import _ from 'lodash';

export type NFTProps = {
  contractAddress: string;
  tokenId: string;
};

export interface NFTParamsProps extends GetServerSideProps<NFTProps> {
  params: NFTProps;
}

export async function tokenFetch({ params }: NFTParamsProps) {
  const contractAddress = params ? params.contractAddress : undefined;
  const tokenId = params ? params.tokenId : undefined;

  if (!contractAddress || !tokenId) return false;

  try {
    const nft = prepareJson(
      await urqlClientZora.query(getTokenData, { tokenId: tokenId }).toPromise()
    );

    if (
      contractAddress !== process.env.NEXT_PUBLIC_PRESS_ADDRESS ||
      (nft && _.get(nft, 'data.tokens.nodes[0]') === undefined)
    ) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        contractAddress: contractAddress,
        id: tokenId,
      },
    };
  } catch (err) {
    console.log(
      `NFTService error! tokenAddress=${contractAddress} tokenId=${tokenId}: ${err}`
    );
  }

  return {
    props: {
      contractAddress: contractAddress,
      id: tokenId,
    },
  };
}
