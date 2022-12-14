import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Contact from './contact';
import Hero from '../components/hero';
import Shoutouts from '../components/shoutouts';
import Techniques from '../components/techniques';

const Home: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className=''>
      <Head>
        <title>Design Agency</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Hero />
        <Techniques />
        <Shoutouts />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
