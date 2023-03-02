import { getTokenData } from '@/data/queries';
import { GetServerSideProps } from 'next';
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils';
import { urqlClientZora } from '../utils/zoraClient';
import _ from 'lodash';

export type NFTProps = {
  contractAddress: string;
  id: string;
};

export interface NFTParamsProps extends GetServerSideProps<NFTProps> {
  params: NFTProps;
}

export async function tokenFetch({ params }: NFTParamsProps) {
  const contractAddress = params ? params.contractAddress : undefined;
  const id = params ? params.id : undefined;

  if (!contractAddress || !id) return false;

  try {
    const nft = prepareJson(
      await urqlClientZora
        .query(getTokenData, { address: contractAddress, tokenId: id })
        .toPromise()
    );

    if (nft && _.get(nft, 'data.tokens.nodes[0]') === undefined) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        contractAddress: contractAddress,
        id: id,
      },
    };
  } catch (err) {
    console.log(
      `NFTService error! tokenAddress=${contractAddress} tokenId=${id}: ${err}`
    );
  }

  return {
    props: {
      contractAddress: contractAddress,
      id: id,
    },
  };
}
