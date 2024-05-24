'use client'

import Link from 'next/link'
import styles from './page.module.css';
import Header from '@/app/register/components/header';
import Footer from '@/components/footer';

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

        const formContainer = document.getElementById('form-container');
        formContainer.innerHTML = '<p class="' + styles.successMessage + '">La tua Registrazione è avvenuta con Successo, Benvenuto!</p>';
    };

    return (
        <body>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Hai già un Account? Effettua il Login</h1>
                        <Link className={styles.link} href={'/login'}><button className={styles.button} type="submit">Login</button></Link>
                        <hr className={styles.hr}></hr>
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
                    <div className={styles.paragrafo}>
                        <p className={styles.p}>Benvenuto a ITS INCOM! Sei pronto a trasformare il tuo Futuro? Registrati oggi stesso per accedere a un'ampia gamma di corsi che ti permetteranno di acquisire competenze all'avanguardia. Non perdere l'opportunità di fare il primo passo verso una carriera di cuccesso. Unisciti a noi e scopri il tuo potenziale!</p>
                    </div>
                </section>
            </main>
            <Footer />
        </body>
    );
}