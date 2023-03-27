import Layout from '@/components/Layout';
import theme from '@/theme';
import { urqlClientZora } from '@/utils/gql/zoraClient';
import walletClient from '@/utils/walletClient';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as UrqlProvider } from 'urql';
import { WagmiConfig } from 'wagmi';
import Fonts from '../theme/Fonts';

export default function App({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 15_000,
      },
    },
  });

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
            <QueryClientProvider client={queryClient}>
              <UrqlProvider value={urqlClientZora}>
                <Fonts />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </UrqlProvider>
            </QueryClientProvider>
          </ConnectKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}
