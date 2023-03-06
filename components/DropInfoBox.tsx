import { Box, Link, List, ListItem, Spinner, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useNFT } from '@zoralabs/nft-hooks';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { getCurationIndex } from '@/utils/gql/queries/queries';
import _ from 'lodash';
import MintHandler from './MintHandler';
import { etherscanHref, formatAddress, zoraHref } from '@/utils/general';

const DropInfoBox = () => {
  const { token, contract } = useRouter().query;

  const { data: tokenData, error: tokenError } = useNFT(
    contract as string,
    token as string
  );

  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndex,
  });

  const { data: indexData, fetching, error: indexError } = result;

  const totalSupply = _.get(indexData, 'tokens.nodes.length');
  const publicSalePrice = _.get(
    tokenData,
    'rawData.APIIndexer.mintInfo.price.nativePrice.raw'
  );

  return (
    <>
      <VStack
        border='1px solid black'
        p={['2rem !important']}
        maxW={['min-content', 'min-content', '60%', '40%']}
        boxShadow='2px 2px 5px #0000008A'
        justifyContent='space-around'
        alignItems='center'
      >
        {tokenData ? (
          <List spacing={['1', '2', '3', '4']}>
            <ListItem>
              <Link
                as={NextLink}
                href={zoraHref(_.get(tokenData, 'nft.contract.address'))}
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
            <ListItem pt='2'>
              {tokenData.rawData.APIIndexer.description}
            </ListItem>
          </List>
        ) : (
          <Spinner size='xl' mb='8' />
        )}
        <MintHandler publicSalePrice={publicSalePrice} />
      </VStack>
    </>
  );
};

export default DropInfoBox;
