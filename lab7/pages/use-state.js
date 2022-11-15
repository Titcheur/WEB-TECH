import React, { useState } from 'react';
import Head from 'next/head'
import Layout from '../components/layout.js'

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
         <Head>
            <title>La coloc</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <button className='Container' onClick={() => setCount(count + 1)}>
      <p>You clicked {count} times</p>
      </button>
    </Layout>
  );
}