import {
  Box,
  HStack,
  Link,
  List,
  ListItem,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useNFT } from '@zoralabs/nft-hooks';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import _ from 'lodash';
import MintHandler from './MintHandler';
import { etherscanHref, formatAddress, zoraHref } from '@/utils/general';
import { NFTProps } from '@/utils/tokenFetch';

const DropInfoBox = ({ curatedAddress }: NFTProps) => {
  const { data: tokenData, error: tokenError } = useNFT(
    curatedAddress as string,
    '1'
  );

  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });

  const { data: indexData, fetching, error: indexError } = result;

  const totalSupply = _.get(indexData, 'tokens.nodes.length');
  const publicSalePrice = _.get(
    tokenData,
    'rawData.APIIndexer.mintInfo.price.nativePrice.raw'
  );

  return (
    <VStack
      border='1px solid black'
      p={['2rem !important']}
      w='450px'
      boxShadow='2px 2px 5px #0000008A'
      justifyContent='space-around'
      alignItems='center'
    >
      {tokenData ? (
        <List spacing={['1', '2', '3', '4']}>
          <ListItem textDecoration={'underline'}>
            <Link
              as={NextLink}
              href={zoraHref(_.get(tokenData, 'nft.contract.address'))}
              target='_blank'
              passHref
            >
              {_.get(tokenData, 'nft.contract.name')} - {`#`}
              {_.get(tokenData, 'nft.tokenId')} ⇗
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
      <MintHandler publicSalePrice={publicSalePrice} />
    </VStack>
  );
};

export default DropInfoBox;
