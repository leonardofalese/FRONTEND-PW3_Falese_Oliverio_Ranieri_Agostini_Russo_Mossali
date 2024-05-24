'use client'

import Image from 'next/image';
import Utente from '@/public/images/Utenti.jpeg'
import Corsi from '@/public/images/corsi.jpeg'
import styles from './page.module.css';
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

export default function Amministratore() {
    const router = useRouter();

    const amministratore = {
        id: 1,
        nome: "Mario",
        cognome: "Rossi",
        email: "mario@example.com",
    };

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <body>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Benvenuto Amministratore</h1>
                        <hr className={styles.hr}></hr>
                        <div className={styles.info}>
                            <p className={styles.p}><strong>ID:</strong> {amministratore.id}</p>
                            <p className={styles.p}><strong>Nome:</strong> {amministratore.nome}</p>
                            <p className={styles.p}><strong>Cognome:</strong> {amministratore.cognome}</p>
                            <p className={styles.p}><strong>Email:</strong> {amministratore.email}</p>
                        </div>
                    </div>
                    <div className={styles.container2}>
                        <p className={styles.h1}>Cosa vuoi visualizzare?</p>
                        <div className={styles.buttons}>
                            <div className={styles.button}>
                                <button className={styles.container3} onClick={() => navigateTo('/utenti')}>Utenti Registrati
                                    <Image className={styles.image} src={Utente} alt='Utente Registrati'></Image>
                                </button>
                            </div>
                            <div className={styles.button}>
                                <button className={styles.container3} onClick={() => navigateTo('/corsiAmministratore')}>Corsi disponibili
                                    <Image className={styles.image} src={Corsi} alt='Corsi Disponibili'></Image>
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