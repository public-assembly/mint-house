import { createClient } from 'wagmi';
import { getDefaultClient } from 'connectkit';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_MAINNET;

const walletClient = createClient(
  getDefaultClient({
    autoConnect: false,
    appName: 'PA mint house',
    alchemyId,
  })
);

export default walletClient;
