'use client'

import Link from 'next/link'
import styles from './page.module.css';
import Header from '@/app/login/components/header';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

    };


    return (
        <body>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>Non hai un Account? Effettua la Registrazione</h1>
                        <Link className={styles.link} href={'/register'}><button className={styles.button} type="submit">Registrati</button></Link>
                        <hr className={styles.hr}></hr>
                        <div id="form-container">
                            <h1 className={styles.h1}>Login</h1>
                            <form onSubmit={handleLogin} className={styles.form}>
                                <label className={styles.label}>
                                    Email:
                                    <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </label>
                                <label className={styles.label}>
                                    Password:
                                    <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </label>
                                <button className={styles.button} type="submit">Login</button>
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