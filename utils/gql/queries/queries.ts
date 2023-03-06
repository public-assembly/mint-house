const pressAddress = process.env.NEXT_PUBLIC_PRESS_ADDRESS;

export const getCurationIndex = `query {
  tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
    pagination: {limit: 500},
    sort: {sortKey: MINTED, sortDirection: ASC}, 
    where: {collectionAddresses: ["${pressAddress}"]}) 
  {
    nodes {
      token {
        collectionAddress
        tokenId
        name
        tokenUrl
        metadata
      }
    }
  }
}
`;

export const getTokenData = `query ($tokenId: String!) {
  tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
    pagination: {limit: 500},
    sort: {sortKey: MINTED, sortDirection: ASC}, 
    where: {tokens: {address: "${pressAddress}", tokenId: $tokenId}}) 
  {
    nodes {
      token {
        collectionAddress
        tokenId
        name
        tokenUrl
        metadata
      }
    }
  }
}
`;

export const getTotalSupply = `query {
  collections(networks: [{network: ETHEREUM, chain: MAINNET}],
              pagination: {limit: 1},
              where: {collectionAddresses: "${pressAddress}"})
  {
    nodes {
      totalSupply
    }
  }
}`;
