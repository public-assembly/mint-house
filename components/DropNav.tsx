import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import { Button, HStack, Link } from '@chakra-ui/react';
import _ from 'lodash';
import React from 'react';
import { useQuery } from 'urql';
import NextLink from 'next/link';
import { Drops } from '@/types';
import { useRouter } from 'next/router';

const DropNav = () => {
  const { contract, token } = useRouter().query;
  const tokenNumber = Number(token);
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });

  const { data, fetching, error } = result;

  const drops: Drops = data;

  const totalSupply = _.get(drops, 'tokens.nodes.length');

  const getNext = () => {
    if (totalSupply && token && tokenNumber < totalSupply) {
      return tokenNumber + 1;
    }
  };

  const getPrev = () => {
    if (token && tokenNumber > 1) {
      return tokenNumber - 1;
    }
  };

  return (
    <HStack minW='100%' justifyContent={'space-between'}>
      {tokenNumber > 1 ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${contract}/${getPrev()}`}>
            ← ◯ prev
          </Link>
        </Button>
      ) : (
        <Button variant='link' disabled cursor='not-allowed'>
          ← ◯ prev
        </Button>
      )}
      {totalSupply && tokenNumber < totalSupply ? (
        <Button variant='link'>
          <Link as={NextLink} href={`/${contract}/${getNext()}`}>
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
