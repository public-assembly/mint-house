import { ReactNode } from 'react';
import _ from 'lodash';
import { mainnet, goerli } from '@wagmi/core';

export const formatAddress = (address: string | undefined): string =>
  address ? `${address.slice(0, 4)}...${address.slice(-4)}` : '';

export const etherscanHref = (address: string | undefined): string =>
  address ? `https://etherscan.io/address/${address}` : '';

export const chainsMap = (chainId: { [index: number]: any }) => {
  const chains = {
    1: mainnet,
    5: goerli,
  };
  return chains[chainId] || mainnet;
};
