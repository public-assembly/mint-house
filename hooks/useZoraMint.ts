import { useState } from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import _ from 'lodash';
import { BigNumber } from 'ethers';
import ZoraDropABI from '../contracts/ZoraDrop.json';
import useToast from './useToast';

type MintProps = {
  mintAmount?: string;
  contractAddress?: `0x${string}`;
  publicSalePrice?: number;
};

const useZoraMint = ({
  mintAmount,
  publicSalePrice,
  contractAddress,
}: MintProps) => {
  const [hash, setHash] = useState<`0x${string}`>();

  const toast = useToast();

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
    address: contractAddress,
    abi: ZoraDropABI,
    functionName: 'purchase',
    args: [mintAmount],
    enabled: !!contractAddress && !!mintAmount,
    overrides: {
      value: BigNumber.from(publicSalePrice || 0).mul(
        BigNumber.from(mintAmount || '0').toNumber()
      ),
    },
  });

  const {
    data,
    isLoading,
    isSuccess,
    write: mint,
  } = useContractWrite({
    ...config,
    onSuccess: (data: any) => {
      setHash(_.get(data, 'hash'));
      toast.info({
        title: 'Pending mint...',
        description: 'Waiting for your mint to be confirmed.',
      });
    },
    onError: (error: any) => {
      if (error.name === 'UserRejectedRequestError') {
        toast.error({
          title: 'Signature rejected!',
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

  return { data, isLoading, isSuccess, mint };
};

export default useZoraMint;
