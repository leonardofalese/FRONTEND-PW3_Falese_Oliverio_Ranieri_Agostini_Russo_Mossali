'use client'

import { Montserrat } from 'next/font/google'
import styles from './page.module.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log({
            firstName,
            lastName,
            email,
            password,
        });

        // Sostituisci il form con un messaggio di conferma
        const formContainer = document.getElementById('form-container');
        formContainer.innerHTML = '<p class="' + styles.successMessage + '">Grazie per esserti registrato!</p>';
    };

    return (
        <body className={montserrat.className}>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <div id="form-container">
                        <h1 className={styles.h1}>Registrati</h1>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.div}>
                                <label className={styles.label} htmlFor="firstName">Nome</label>
                                <input className={styles.input} id="firstName" name="firstName" placeholder='Inserisci il nome...' type="text" required />
                            </div>
                            <div className={styles.div}>
                                <label className={styles.label} htmlFor="lastName">Cognome</label>
                                <input className={styles.input} id="lastName" name="lastName" placeholder='Inserisci il cognome...' type="text" required />
                            </div>
                            <div className={styles.div}>
                                <label className={styles.label} htmlFor="email">Email</label>
                                <input className={styles.input} id="email" name="email" placeholder="Inserisci l'email... " type="email" required />
                            </div>
                            <div className={styles.div}>
                                <label className={styles.label} htmlFor="password">Password</label>
                                <input className={styles.input} id="password" name="password" placeholder='Inserisci la password...' type="password" required />
                            </div>
                            <button className={styles.button} type="submit">Registrati</button>
                            <p className={styles.formMessagge}></p>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </body>
    );
}