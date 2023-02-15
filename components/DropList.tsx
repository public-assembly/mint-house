import React from 'react';
import { marketData } from '../data';
import Link from 'next/link';
import { Button, List, ListItem } from '@chakra-ui/react';

type Props = {};

export const DropList = (props: Props) => {
  return (
    <List
      spacing={4}
      border='1px solid black'
      p={['3', '5', '10', '20']}
      sx={{ boxShadow: '2px 2px 5px #0000008A' }}
      maxH='100%'
      overflowY='auto'
    >
      {marketData.nodes.map((collection, i) => (
        <ListItem key={i}>
          <Button variant='link'>
            <Link
              href={'/drops/'.concat(`${collection.token.collectionAddress}`)}
            >
              {collection.token.name}
            </Link>
          </Button>
        </ListItem>
      ))}
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
    </List>
  );
};
