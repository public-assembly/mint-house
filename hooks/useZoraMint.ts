import { BigNumber } from 'ethers';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  useContractWrite,
  useFeeData,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import ZoraDropABI from '../contracts/ZoraDrop.json';
import useToast from './useToast';

type MintProps = {
  mintAmount?: string;
  curatedAddress?: `0x${string}`;
  publicSalePrice?: number;
};

const useZoraMint = ({
  mintAmount,
  publicSalePrice,
  curatedAddress,
}: MintProps) => {
  const router = useRouter();
  const [hash, setHash] = useState<`0x${string}`>();
  const [contractError, setContractError] = useState<boolean>(false);
  const toast = useToast();
  const { data: feeData } = useFeeData();

  useEffect(() => {
    if (router) {
      setContractError(false);
    }
  }, [router]);

  useWaitForTransaction({
    hash,
    onSuccess: () => {
      toast.success({
        title: 'NFT Minted!',
        description: 'Check your wallet to view.',
      });
    },
  });

  const { config } = usePrepareContractWrite({
    address: curatedAddress,
    abi: ZoraDropABI,
    functionName: 'purchase',
    args: [mintAmount],
    enabled: !!curatedAddress && !!mintAmount && !!feeData,
    overrides: {
      value: BigNumber.from(publicSalePrice || 0).mul(
        BigNumber.from(mintAmount || '0').toNumber()
      ),
    },
    onError: () => setContractError(true),
  });

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    write: mint,
  } = useContractWrite({
    ...config,
    onSuccess: (data: any) => {
      setHash(_.get(data, 'hash'));
      toast.info({
        title: 'Pending mint...',
        description: 'Waiting for your mint to be confirmed.',
        duration: null,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      if (error.name === 'UserRejectedRequestError') {
        toast.error({
          title: 'Transaction rejected!',
          description: 'Please accept the transaction in your wallet.',
        });
      } else {
        toast.error({
          title: 'Error occurred!',
          description: 'Oops! Something went wrong, try again.',
        });
      }
    },
  });

  return { data, isLoading, isSuccess, contractError, mint };
};

export default useZoraMint;
