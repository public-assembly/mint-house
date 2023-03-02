import { createClient } from 'wagmi';
import { getDefaultClient } from 'connectkit';

const alchemyId = process.env.ALCHEMY_ID;

const walletClient = createClient(
  getDefaultClient({
    appName: 'PA mint house',
    alchemyId,
  })
);

export default walletClient;
