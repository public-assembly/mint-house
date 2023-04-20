import { ParsedItem } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { Alchemy, Network } from 'alchemy-sdk';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type metadata = {
  nfts: [];
};

const useCurationIndexData = (contract?: `0x${string}` | undefined) => {
  const router = useRouter();
  const pressAddress = contract
    ? contract
    : process.env.NEXT_PUBLIC_PRESS_ADDRESS;
  const [curationMetadata, setCurationMetadata] = useState<metadata>();
  const [parsedMetadata, setParsedMetadata] = useState<ParsedItem[]>();
  const alchemy_setting_goerli = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_GOERLI,
    network: Network.ETH_GOERLI,
  };
  const alchemy_settings_mainnet = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_MAINNET,
    network: Network.ETH_MAINNET,
  };
  const alchemyGoerli = new Alchemy(alchemy_setting_goerli);
  const alchemyMainnet = new Alchemy(alchemy_settings_mainnet);

  const parseMetadata = async (metadata: any) => {
    let parsedNFTs: ParsedItem[] = [];
    for (let i = 0; i < metadata.nfts.length; i++) {
      let nftData: any = await alchemyMainnet.nft.getNftMetadata(
        metadata.nfts[i].rawMetadata.properties.contract,
        '1'
      );
      let receiptNo = { receipt: i + 1 };
      parsedNFTs.push(Object.assign(nftData, receiptNo));
    }
    setParsedMetadata(parsedNFTs);
    setCurationMetadata(metadata);
  };

  const getMetadata = async () => {
    const curationIndex: any = await alchemyGoerli.nft.getNftsForContract(
      pressAddress as any
    );

    return curationIndex;
  };

  const { isFetching, data } = useQuery<any>(['curationIndex'], getMetadata, {
    onSuccess: (data) => parseMetadata(data),
  });

  useEffect(() => {
    data;
  }, [data]);

  const listed = curationMetadata ? curationMetadata.nfts : [];
  const parsed = parsedMetadata ? parsedMetadata : [];

  return {
    data,
    isFetching,
    listed,
    parsed,
  };
};

export default useCurationIndexData;
