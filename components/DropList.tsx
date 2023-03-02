import React from 'react';

import NextLink from 'next/link';

import { Button, Link, List, ListItem } from '@chakra-ui/react';
import { Drops } from '@/types';

type DropListProps = {
  drops: Drops;
};

export const DropList = ({ drops }: DropListProps) => {
  return (
    <List
      spacing={[4, 6, 8, 10]}
      mx='2'
      border={[null, '1px solid black', '1px solid black', '1px solid black']}
      p={['0', '5', '10', '14']}
      boxShadow={[
        null,
        '2px 2px 5px #0000008A',
        '2px 2px 5px #0000008A',
        '2px 2px 5px #0000008A',
      ]}
      maxH='82vh'
      overflowY='auto'
      sx={{
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'black',
          borderRadius: '10px',
          border: '5px solid transparent',
          backgroundClip: 'padding-box',
        },
      }}
    >
      {drops &&
        drops.tokens.nodes.map((drop, i) => (
          <ListItem key={i}>
            <Button variant='link'>
              <Link
                as={NextLink}
                href={`/${drop.token.collectionAddress}/${drop.token.tokenId}`}
              >
                {drop.token.name}
              </Link>
            </Button>
          </ListItem>
        ))}
    </List>
  );
};
