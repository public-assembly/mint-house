import Head from 'next/head';
import { DropList } from '@/components/DropList';

export default function Home() {
  return (
    <>
      <Head>
        <title>mint house</title>
        <meta name='description' content='Welcome to PA Mint House!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <DropList />
      </main>
    </>
  );
}
