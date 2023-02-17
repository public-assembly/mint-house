export type DropDataProps = {
  dropData: Drop[];
};

export type CollectionDataProps = {
  collectionData: CollectionData[];
};

export type Drop = {
  token: {
    collectionAddress: string;
    collectionName: string;
    description: string;
    image: {
      url: string;
    };
    name: string;
    owner: string;
    tokenId: string;
    tokenUrl: string;
    tokenStandard: string;
  };
};

export type CollectionData = {
  name: string;
  collectionAddress: string;
  url: string;
};
