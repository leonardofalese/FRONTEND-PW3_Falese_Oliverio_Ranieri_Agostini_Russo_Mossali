import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ITS Incom - Home</title>
        <meta name="description" content="Welcome to ITS Incom" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
      </main>
    </div>
  );
}
