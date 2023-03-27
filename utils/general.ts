export const formatAddress = (address: string | undefined): string =>
  address ? `${address.slice(0, 4)}...${address.slice(-4)}` : '';

export const etherscanHref = (address: string | undefined): string =>
  address ? `https://etherscan.io/address/${address}` : '';

export const zoraHref = (address: string | undefined): string =>
  address ? `https://zora.co/collections/${address}` : '';
