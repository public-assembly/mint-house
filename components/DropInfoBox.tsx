import { List, ListItem, Spinner, VStack } from '@chakra-ui/react';
import { useNFT } from '@zoralabs/nft-hooks';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { getCurationIndex } from '@/utils/gql/queries/queries';
import _ from 'lodash';
import MintHandler from './MintHandler';

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

  return (
    <>
      <VStack
        border='1px solid black'
        p={['2rem !important']}
        maxW={['min-content', 'min-content', '60%', '40%']}
        boxShadow='2px 2px 5px #0000008A'
        mt='3rem'
        justifyContent='space-around'
        alignItems='center'
      >
        {tokenData ? (
          <List spacing={['0', '2', '3', '4']}>
            <ListItem>
              {_.get(tokenData, 'nft.contract.name')} - {`#`}
              {_.get(tokenData, 'nft.tokenId')}
            </ListItem>

            <ListItem>
              Contract: {_.get(tokenData, 'nft.contract.address')}
            </ListItem>
            <ListItem>
              {_.get(
                tokenData,
                'rawData.APIIndexer.mintInfo.price.nativePrice.decimal'
              )}{' '}
              ETH
            </ListItem>
            <ListItem>{totalSupply} minted</ListItem>
            <ListItem>{tokenData.rawData.APIIndexer.description}</ListItem>
          </List>
        ) : (
          <Spinner size='xl' mb='8' />
        )}
        <MintHandler />
      </VStack>
    </>
  );
};

export default DropInfoBox;
