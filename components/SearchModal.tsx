import useCurationIndex from '@/hooks/useCurationIndex';
import { ParsedItem } from '@/types';
import {
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Fuse from 'fuse.js';
import NextLink from 'next/link';
import { useState } from 'react';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

type InputValue = {
  currentTarget: {
    value: string;
  };
};
export default function SearchModal({
  isOpen,
  onClose,
  onOpen,
}: SearchModalProps) {
  const [searchData, setSearchData] = useState('');
  const curationIndex = useCurationIndex();

  if (!curationIndex) return null;
  const fuse = new Fuse(curationIndex?.parsed, {
    keys: ['contract.name', 'description'],
  });
  const results = fuse.search(searchData);
  const searchResults: ParsedItem[] = searchData
    ? results.map((result) => result.item)
    : curationIndex?.parsed;

  function handleSearch({ currentTarget }: InputValue) {
    const { value } = currentTarget;
    setSearchData(value);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={5}>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form id='search-form'>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Search...'
                  value={searchData}
                  onChange={handleSearch}
                  variant='flushed'
                />
                <List spacing={3} py={3}>
                  {searchResults.map((nft: ParsedItem) => {
                    return (
                      <ListItem key={nft.contract.deployedBlockNumber}>
                        <Link
                          as={NextLink}
                          href={`/${nft.receipt}/mint`}
                          onClick={onClose}
                        >
                          <Heading size='md'>{nft.contract.name}</Heading>
                          <FormHelperText noOfLines={3}>
                            {nft.description}
                          </FormHelperText>
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}