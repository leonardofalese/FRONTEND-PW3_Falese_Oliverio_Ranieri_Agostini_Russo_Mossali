'use client'

import Link from 'next/link'
import styles from './page.module.css';
import Header from '@/app/login/components/header';
import Footer from '@/components/footer';

export default function LoginPage() {
    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        console.log({
            email,
            password,
        });

        console.log('email:', email);
        console.log('Password:', password);

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            console.log('Response:', response);

            if (response.ok) {
                const userResponse = await fetch('http://localhost:8080/users', {
                    method: 'GET',
                    credentials: 'include',
                });

                if (userResponse.ok) {
                    const user = await userResponse.json();
                    if (user.role === 'ADMIN') {
                        window.location.href = '/amministratore';
                    } else {
                        window.location.href = '/studente';
                    }
                } else {
                    console.log('Errore nel recupero delle informazioni dell\'utente loggato');
                }
            } else {
                console.log(response);
                const errorMessage = await response.text();
                console.log('Login failed', response.status, errorMessage);
                alert('Username o password errati');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };


    return (
        <body>
        <Header/>
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Non hai un Account? Effettua la Registrazione</h1>
                    <Link className={styles.link} href={'/register'}>
                        <button className={styles.button} type="submit">Registrati</button>
                    </Link>
                    <hr className={styles.hr}></hr>
                    <div id="form-container">
                        <h1 className={styles.h1}>Login</h1>
                        <form onSubmit={handleLogin} className={styles.form}>
                            <label className={styles.label}>
                                Email:
                                <input className={styles.input} type="email" id="email"
                                       placeholder="Inserisci l'email..." required/>
                            </label>
                            <label className={styles.label}>
                                Password:
                                <input className={styles.input} type="password" id="password"
                                       placeholder='Inserisci la password...' required/>
                            </label>
                            <button className={styles.button} type="submit">Login</button>
                            <Link href={'/amministratore'}>
                                <button>amministratore</button>
                            </Link>
                            <Link href={'/studente'}>
                                <button>utente</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div className={styles.paragrafo}>
                    <p className={styles.p}>Bentornato in ITS Incom! Accedi al tuo account per iniziare o continuare il
                        tuo percorso di apprendimento. Qui troverai tutti i tuoi corsi, risorse e strumenti necessari
                        per raggiungere i tuoi obiettivi. Non vediamo l'ora di aiutarti a crescere e a sviluppare le tue
                        competenze. Inserisci le tue credenziali!</p>
                </div>
            </section>
        </main>
        <Footer/>
        </body>
    );
}