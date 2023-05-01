import Head from 'next/head';

import { HomePage } from '@/components/pages/Home';

import { METADATA } from '@/constants/metadata';

export default function Home() {
  return (
    <>
      <Head>
        <title>{(METADATA.title as string)}</title>
        <meta name="description" content={(METADATA.description as string)} />
        <meta name="keywords" content={(METADATA.keywords as string[]).join()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
