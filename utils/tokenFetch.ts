import { ParsedMintProps } from '@/types';
import { getCurationTokenData } from '@/utils/gql/queries/queries';
import { urqlClientZora } from '@/utils/gql/zoraClient';
import { prepareJson } from '@zoralabs/nft-hooks/dist/fetcher/NextUtils';
import _ from 'lodash';
import { GetServerSideProps } from 'next';

export interface NFTParamsProps extends GetServerSideProps<ParsedMintProps> {
  params: ParsedMintProps;
}

export async function tokenFetch({ params }: NFTParamsProps) {
  const receipt = params ? params.receipt : undefined;

  if (!receipt) return false;

  try {
    const curationReceipt = prepareJson(
      await urqlClientZora
        .query(getCurationTokenData, { tokenId: receipt })
        .toPromise()
    );

    if (
      curationReceipt &&
      _.get(curationReceipt, 'data.tokens.nodes[0]') === undefined
    ) {
      return {
        notFound: true,
      };
    }

    const curatedAddress: string =
      curationReceipt.data.tokens.nodes[0].token.metadata.properties.contract;

    return {
      props: {
        receipt,
        curatedAddress,
      },
    };
  } catch (err) {
    console.log(`NFTService error! tokenId=${receipt}: ${err}`);
  }

  return {
    props: {
      receipt,
    },
  };
}
