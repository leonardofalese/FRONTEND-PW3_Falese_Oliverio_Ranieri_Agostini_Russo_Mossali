// import Head from 'next/head'
"use client";

import Header from '../components/header'

import Hero from '../components/hero'
import About from '../components/about'
import Courses from '../components/courses'
import Testimonials from '../components/testimonials'
import CallToAction from '../components/callToAction'
import News from '../components/news'
import SocialChannels from '@/components/SocialChannels'

import Footer from '../components/footer'

import styles from '@/app/page.module.css'
import {useEffect, useState} from "react";

export default function Home() {

    const [Header, setHeader] = useState(null);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        email: "",
        role: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/users', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUserData(userData);
                    console.log(userData);
                    if (userData.role === "STUDENT") {
                        const { default: Header } = await import('@/app/profile/components/header');
                        setHeader(() => Header);
                    } else if (userData.role === "ADMIN") {
                        const { default: Header } = await import('@/app/amministratore/components/header');
                        setHeader(() => Header);
                    }
                } else {
                    const { default: Header } = await import('@/app/corsi/components/header');
                    setHeader(() => Header);
                    throw new Error('Errore nella richiesta dei dati utente');
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati utente:', error);
            }
        };

        fetchUserData();
    }, []);

  return (
    <body>
      {/* <Head>
        <title>ITS Incom</title>
        <meta name="description" content="Welcome to ITS Incom" />
      </Head> */}
      {Header && <Header />}
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