import type { AppProps } from 'next/app';
import { ChakraProvider, ScaleFade, Slide } from '@chakra-ui/react';
import theme from '@/theme';
import Fonts from '../theme/Fonts';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { WagmiConfig } from 'wagmi';
import { ConnectKitProvider } from 'connectkit';
import walletClient from '@/utils/walletClient';
import { Provider as UrqlProvider } from 'urql';
import { urqlClientZora } from '../utils/zoraClient';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>mint house</title>
        <meta name='description' content='Welcome to PA Mint House!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={walletClient}>
          <ConnectKitProvider
            mode='light'
            theme='minimal'
            customTheme={{
              '--ck-font-family': 'IBM Plex Mono',
              '--ck-accent-text-color': '#000000',
            }}
          >
            <UrqlProvider value={urqlClientZora}>
              <Fonts />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UrqlProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}
