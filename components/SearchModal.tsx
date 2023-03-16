import { getCurationIndexGoerli } from '@/utils/gql/queries/queries';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  FormControl,
  FormHelperText,
  Input,
  Link,
} from '@chakra-ui/react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'urql';
import Fuse from 'fuse.js';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

type CurationSearchItem = {
  token: {
    collectionAddress: string;
    tokenId: string;
    name: string;
    tokenUrl: string;
    metadata: {
      name: string;
      description: string;
      image: string;
      properties: {
        type: string;
        contract: string;
        selectedTokenId: string;
        chainId: string;
        curationTargetType: string;
        curator: string;
        hasTokenId: string;
        sortOrder: string;
      };
    };
  };
};

export default function SearchModal({
  isOpen,
  onClose,
  onOpen,
}: SearchModalProps) {
  const router = useRouter();
  const [searchData, setSearchData] = useState('');
  const [result, reexecuteQuery] = useQuery({
    query: getCurationIndexGoerli,
  });
  const { data, fetching, error } = result;
  if (!data) return;
  const fuse = new Fuse(data?.tokens?.nodes, {
    keys: ['token.metadata.name', 'token.metadata.description'],
  });
  // console.log(fuse);
  const results = fuse.search(searchData);
  const searchResults = searchData
    ? results.map((result) => result.item)
    : data?.tokens?.nodes;

  function handleSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setSearchData(value);
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
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
                />
                {searchResults.map((item: CurationSearchItem) => {
                  console.log(item);
                  return (
                    <ul>
                      <Link
                        href={`/${item.token.collectionAddress}/${item.token.tokenId}`}
                      >
                        <span>{item.token.metadata.name}</span>
                        <FormHelperText>
                          {item.token.metadata.description}
                        </FormHelperText>
                      </Link>
                    </ul>
                  );
                })}
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
