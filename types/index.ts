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
