import React from 'react';
import { marketData } from '../data';
import Link from 'next/link';
import { List, ListItem } from '@chakra-ui/react';

type Props = {};

export const DropList = (props: Props) => {
  return (
    <List
      spacing={4}
      border='1px solid black'
      p='20'
      overflowY='auto'
      maxH='85vh'
      sx={{ boxShadow: '2px 2px 5px #0000008A' }}
    >
      {marketData.nodes.map((collection, i) => (
        <ListItem key={i}>
          <Link
            href={'/drops/'.concat(`${collection.token.collectionAddress}`)}
          >
            {collection.token.name}
          </Link>{' '}
        </ListItem>
      ))}
    </List>
  );
};
