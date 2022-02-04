import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Meta = ({ title = '' }) => {
  const router = useRouter();
  const meta = {
    title: title ? `SendSol - ${title}` : 'SendSol — Send Solana Easily',
    description: 'Send Solana Easily',
    cardImage: '/og.png'
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://SendSol.me${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.cardImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://sendsol.me/" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.cardImage} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
    </Head>
  );
};

export default Meta;
