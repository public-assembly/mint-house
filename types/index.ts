export interface Drops {
  tokens: {
    nodes: [
      {
        token: {
          collectionAddress: string;
          metadata: {
            animationUrl: string;
            description: string;
            image: string;
            properties: {
              name: string;
              number: number;
            };
          };
          name: string;
          tokenId: string;
          tokenUri: string;
        };
      }
    ];
  };
}

export type ParsedItem = {
  contract: {
    address: string;
    contractDeployer: string;
    deployedBlockNumber: number;
    name: string;
  };
  description: string;
  media: {
    bytes: number;
    format: string;
    raw: string;
    thumbnail: string;
  }[];
  metadataError: string;
  rawMetadata: {
    animation_url: string;
    description: string;
    image: string;
    name: string;
    properties: {
      name: string;
      number: number;
    };
  };
  receipt: number;
  spamInfo: string;
  timeLastUpdated: string;
  title: string;
  tokenId: string;
  tokenType: string;
  tokenUri: {
    gateway: string;
    raw: string;
  };
};
