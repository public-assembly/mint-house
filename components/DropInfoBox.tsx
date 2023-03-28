import { ParsedMintProps } from '@/types';
import { etherscanHref, formatAddress, zoraHref } from '@/utils/general';
import { getTotalSupply } from '@/utils/gql/queries/queries';
import { Box, Link, List, ListItem, Spinner, VStack } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import _ from 'lodash';
import NextLink from 'next/link';
import { useQuery } from 'urql';
import MintHandler from './MintHandler';

const DropInfoBox = ({ curatedAddress }: ParsedMintProps) => {
  const { data: tokenData, error: tokenError } = useNFT(
    curatedAddress as `0x${string}`,
    '1'
  );

  const [result, reexecuteQuery] = useQuery({
    query: getTotalSupply,
    variables: {
      collectionAddress: curatedAddress,
      chain: 'MAINNET',
    },
  });

  const { data: indexData, fetching, error: indexError } = result;

  const totalSupply = _.get(indexData, 'aggregateStat.nftCount', 0);
  const publicSalePrice = _.get(
    tokenData,
    'rawData.APIIndexer.mintInfo.price.nativePrice.raw'
  );

  return (
    <VStack
      border='1px solid black'
      p={['2rem !important']}
      boxShadow='2px 2px 5px #0000008A'
      justifyContent='space-around'
      alignItems='center'
    >
      {tokenData ? (
        <List>
          <ListItem textDecoration={'underline'}>
            <Link
              as={NextLink}
              href={zoraHref(_.get(tokenData, 'nft.contract.address'))}
              target='_blank'
              passHref
            >
              {_.get(tokenData, 'nft.contract.name')}
            </Link>
          </ListItem>

          <ListItem>
            Contract:{' '}
            <Link
              as={NextLink}
              href={etherscanHref(_.get(tokenData, 'nft.contract.address'))}
              target='_blank'
              passHref
            >
              {formatAddress(_.get(tokenData, 'nft.contract.address'))} ⇗
            </Link>
          </ListItem>
          <ListItem>
            {_.get(
              tokenData,
              'rawData.APIIndexer.mintInfo.price.nativePrice.decimal'
            )}{' '}
            ETH
          </ListItem>
          <ListItem>{totalSupply} minted</ListItem>
          <Box borderBottom='1px solid black' pt='2' />
          <ListItem pt='2'>{tokenData.rawData.APIIndexer.description}</ListItem>
        </List>
      ) : (
        <Spinner size='xl' mb='8' p='20' />
      )}
      <MintHandler
        publicSalePrice={publicSalePrice}
        curatedAddress={curatedAddress}
      />
    </VStack>
  );
};

export default DropInfoBox;
