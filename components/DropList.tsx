import React from 'react';
import { marketData } from '../data';
import Link from 'next/link';
import { Button, List, ListItem } from '@chakra-ui/react';

type Props = {};

export const DropList = (props: Props) => {
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
      maxH='100%'
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
