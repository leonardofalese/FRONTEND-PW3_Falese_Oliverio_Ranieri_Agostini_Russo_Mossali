// import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Courses from '../components/courses';
import Testimonials from '../components/testimonials';
import CallToAction from '../components/callToAction';
import News from '../components/news';
import SocialChannels from '@/components/SocialChannels';
import Footer from '../components/footer';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <body>
      {/* <Head>
        <title>ITS Incom</title>
        <meta name="description" content="Welcome to ITS Incom" />
      </Head> */}
      <Header />
      <Hero />
      <main className={styles.main}>
        <About />
        <Courses />
        <Testimonials />
        <CallToAction />
        <News />
        <SocialChannels />
      </main>
      <Footer />
    </body>
  );
}
