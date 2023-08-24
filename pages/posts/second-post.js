import Head from 'next/head';
import Layout from '../../components/layout';
import Script from 'next/script';
import Link from 'next/link';

export default function SecondPost() {
    return (
  
      <Layout>
        <Head>
          <title>Second Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>Te amo Lara</h1>
        
      </Layout>
  
    );
  }