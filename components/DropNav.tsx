import { getCurationIndex } from '@/data/queries';
import { Button, HStack, Link } from '@chakra-ui/react';
import _ from 'lodash';
import React from 'react';
import { useQuery } from 'urql';
import NextLink from 'next/link';
import { Drops } from '@/types';

type DropNavProps = {
  contractAddress: string | string[] | undefined;
  tokenId: number;
};

const DropNav = ({ contractAddress, tokenId }: DropNavProps) => {
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndex,
  });
  const { data, fetching, error } = result;

  const drops: Drops = data;

  const totalSupply = _.get(drops, 'tokens.nodes.length');

  const getNext = () => {
    if (totalSupply && tokenId && tokenId < totalSupply) {
      return tokenId + 1;
    }
  };

  const getPrev = () => {
    if (tokenId && tokenId > 1) {
      return tokenId - 1;
    }
  };

  return (
    <HStack minW='100%' justifyContent={'space-between'}>
      {tokenId > 1 ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${contractAddress}/${getPrev()}`}>
            ← ◯ prev
          </Link>
        </Button>
      ) : (
        <Button variant='link' disabled cursor='not-allowed'>
          ← ◯ prev
        </Button>
      )}
      {totalSupply && tokenId < totalSupply ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${contractAddress}/${getNext()}`}>
            next ◯ →
          </Link>
        </Button>
      ) : (
        <Button variant='link' disabled cursor='not-allowed'>
          next ◯ →
        </Button>
      )}
    </HStack>
  );
};

export default DropNav;
