import { getTokenData } from '@/utils/gql/queries/queries';
import { GetServerSideProps } from 'next';
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils';
import { urqlClientZora } from '@/utils/gql/zoraClient';
import _ from 'lodash';

export type NFTProps = {
  contract: string;
  token: string;
};

export interface NFTParamsProps extends GetServerSideProps<NFTProps> {
  params: NFTProps;
}

export async function tokenFetch({ params }: NFTParamsProps) {
  const contract = params ? params.contract : undefined;
  const token = params ? params.token : undefined;

  if (!contract || !token) return false;

  try {
    const nft = prepareJson(
      await urqlClientZora.query(getTokenData, { tokenId: token }).toPromise()
    );

    if (
      contract !== process.env.NEXT_PUBLIC_PRESS_ADDRESS ||
      (nft && _.get(nft, 'data.tokens.nodes[0]') === undefined)
    ) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        contract: contract,
        id: token,
      },
    };
  } catch (err) {
    console.log(
      `NFTService error! tokenAddress=${contract} tokenId=${token}: ${err}`
    );
  }

  return {
    props: {
      contract: contract,
      id: token,
    },
  };
}
