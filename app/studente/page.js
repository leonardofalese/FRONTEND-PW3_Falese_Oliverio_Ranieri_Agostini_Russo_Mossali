'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import Utente from '@/public/images/Utenti.jpeg'
import Corsi from '@/public/images/corsi.jpeg'

import Header from '@/app/studente/components/header'
import Footer from '@/app/studente/components/footer'

import { useRouter } from 'next/navigation'

import styles from './page.module.css'

export default function Amministratore() {
    const router = useRouter();

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        email: "",
        state: ""
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
                } else {
                    throw new Error('Errore nella richiesta dei dati utente');
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati utente:', error);
            }
        };

        fetchUserData();
    }, []);

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <body>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Benvenuto Studente</h1>
                        <hr className={styles.hr}></hr>
                        <div className={styles.info}>
                            <p className={styles.p}><strong>Nome:</strong> {userData.name}</p>
                            <p className={styles.p}><strong>Cognome:</strong> {userData.surname}</p>
                            <p className={styles.p}><strong>Email:</strong> {userData.email}</p>
                            <p className={styles.p}><strong>Stato:</strong> {userData.state}</p>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <p className={styles.h1}>Cosa vuoi visualizzare?</p>
                        <div className={styles.buttons}>
                            <div className={styles.button}>
                                <button className={styles.container3} onClick={() => navigateTo('/dashboard')}>Profilo
                                    <Image className={styles.image} src={Utente} alt='Utente Registrati' />
                                </button>
                            </div>
                            <div className={styles.button}>
                                <button className={styles.container3}
                                    onClick={() => navigateTo('/corsi')}>Corsi disponibili
                                    <Image className={styles.image} src={Corsi} alt='Corsi Disponibili' />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </body>
    );
}