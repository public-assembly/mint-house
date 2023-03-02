export const getCurationIndex = `query PreviewTokens {
  tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
    pagination: {limit: 500},
    sort: {sortKey: MINTED, sortDirection: ASC}, 
    where: {collectionAddresses: ["0xb16ced7c8ef6c9109b932d9eac7ccfbf6e5c3b6d"]}) 
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

export const getTokenData = `query ($tokenId: String!, $address: String!) {
  tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
    pagination: {limit: 500},
    sort: {sortKey: MINTED, sortDirection: ASC}, 
    where: {tokens: {address: $address, tokenId: $tokenId}}) 
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

export const getTotalSupply = `query CollectionInfo {
  collections(networks: [{network: ETHEREUM, chain: MAINNET}], 
              pagination: {limit: 1}, 
              where: {collectionAddresses: "0xc729Ce9bF1030fbb639849a96fA8BBD013680B64"}) 
  {
    nodes {
      totalSupply
    }
  }
}`;
