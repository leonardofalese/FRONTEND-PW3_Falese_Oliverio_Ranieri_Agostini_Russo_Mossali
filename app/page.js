import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Courses from '../components/courses';
import Testimonials from '../components/testimonials';
import CallToAction from '../components/callToAction';
import News from '../components/news';
import Footer from '../components/footer';
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
        <Courses />
        <Testimonials />
        <CallToAction />
        <News />
      </main>
      <Footer />
    </div>
  );
}
