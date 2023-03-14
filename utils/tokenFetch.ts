import { getCurationTokenData } from '@/utils/gql/queries/queries';
import { GetServerSideProps } from 'next';
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils';
import { urqlClientZora } from '@/utils/gql/zoraClient';
import _ from 'lodash';

export type NFTProps = {
  collection?: string;
  receipt?: string;
  curatedAddress?: string;
};

export interface NFTParamsProps extends GetServerSideProps<NFTProps> {
  params: NFTProps;
}

export async function tokenFetch({ params }: NFTParamsProps) {
  const collection = params ? params.collection : undefined;
  const receipt = params ? params.receipt : undefined;

  if (!collection || !receipt) return false;

  try {
    const curationReceipt = prepareJson(
      await urqlClientZora
        .query(getCurationTokenData, { tokenId: receipt })
        .toPromise()
    );

    const curatedAddress: string =
      curationReceipt.data.tokens.nodes[0].token.metadata.properties.contract;

    if (
      collection !== process.env.NEXT_PUBLIC_PRESS_ADDRESS ||
      (curationReceipt &&
        _.get(curationReceipt, 'data.tokens.nodes[0]') === undefined)
    ) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        collection,
        receipt,
        curatedAddress,
      },
    };
  } catch (err) {
    console.log(
      `NFTService error! tokenAddress=${collection} tokenId=${receipt}: ${err}`
    );
  }

  return {
    props: {
      collection,
      receipt,
      curatedAddress: null,
    },
  };
}
