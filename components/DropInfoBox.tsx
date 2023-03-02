import {
  Button,
  List,
  ListItem,
  Icon,
  Text,
  HStack,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { WalletStatus } from '../components/icons/WalletStatus';
import { ConnectKitButton } from 'connectkit';
import { FaEthereum } from 'react-icons/fa';
import { useNFT } from '@zoralabs/nft-hooks';
import { useRouter } from 'next/router';
import { useQuery } from 'urql';
import { getCurationIndex } from '@/data/queries';
import _ from 'lodash';

type DropInfoProps = {
  metadata: any;
};

const DropInfoBox = ({ metadata }: DropInfoProps) => {
  const { contractAddress, id } = useRouter().query;
  const { data: tokenData, error: tokenError } = useNFT(
    contractAddress as string,
    id as string
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
        w={['min-content', 'min-content', '60%', '40%']}
        boxShadow='2px 2px 5px #0000008A'
        mt='3rem'
        justifyContent='center'
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
        <HStack
          justifyContent='center'
          alignItems='center'
          mt={['3', '5', '7', '9']}
        >
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
              return (
                <>
                  <Button
                    variant={isConnected ? 'outline' : 'link'}
                    onClick={show}
                  >
                    {isConnected ? (
                      <Text>
                        <Icon as={FaEthereum} mr='2' />
                        0.001&nbsp;
                      </Text>
                    ) : (
                      <Icon
                        as={WalletStatus}
                        color={isConnected ? 'green' : 'grey'}
                        mr='2'
                      />
                    )}

                    {isConnected ? '- mint now' : 'connect to mint'}
                  </Button>
                </>
              );
            }}
          </ConnectKitButton.Custom>
        </HStack>
      </VStack>
    </>
  );
};

export default DropInfoBox;
