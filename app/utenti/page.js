'use client';
import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Footer from '@/components/footer';
 
// Pagina principale
export default function Utenti() {
    const router = useRouter();
 
    // Dati degli utenti
    const utenti = [
        { id: 1, nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@example.com', ruolo: 'amministratore', stato: 'ATTIVO', corso: 'Matematica' },
        { id: 2, nome: 'Luigi', cognome: 'Verdi', email: 'luigi.verdi@example.com', ruolo: 'studente', stato: 'ATTIVO', corso: 'Fisica' },
        { id: 3, nome: 'Anna', cognome: 'Bianchi', email: 'anna.bianchi@example.com', ruolo: 'studente', stato: 'ATTIVO', corso: 'Chimica' },
        { id: 4, nome: 'Giulia', cognome: 'Neri', email: 'giulia.neri@example.com', ruolo: 'studente', stato: 'NON ATTIVO', corso: 'Informatica' },
        { id: 5, nome: 'Roberto', cognome: 'Gialli', email: 'roberto.gialli@example.com', ruolo: 'amministratore', stato: 'ATTIVO', corso: 'Biologia' },
        { id: 6, nome: 'Sara', cognome: 'Blu', email: 'sara.blu@example.com', ruolo: 'amministratore',  stato: 'ATTIVO', corso: 'Letteratura' },
        { id: 7, nome: 'Paolo', cognome: 'Viola', email: 'paolo.viola@example.com', ruolo: 'studente', stato: 'NON ATTIVO', corso: 'Filosofia' },
        { id: 8, nome: 'Francesca', cognome: 'Rosa', email: 'francesca.rosa@example.com', ruolo: 'amministratore', stato: 'ATTIVO', corso: 'Economia' },
        { id: 9, nome: 'Alessandro', cognome: 'Marrone', email: 'alessandro.marrone@example.com', ruolo: 'amministratore', stato: 'ATTIVO', corso: 'Storia' },
        { id: 10, nome: 'Martina', cognome: 'Argento', email: 'martina.argento@example.com', ruolo: 'studente', stato: 'NON ATTIVO', corso: 'Geografia' },
       
    ];
 
    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Utenti Registrati</h1>
            <div id='container' className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Cognome</th>
                        <th className={styles.th}>Email</th>
                        <th className={styles.th}>Ruolo</th>
                        <th className={styles.th}>Stato</th>
                        <th className={styles.th}>Corso</th>
                    </tr>
                </thead>
                <tbody>
                    {utenti.map((utente) => (
                        <tr key={utente.id}>
                            <td className={styles.td}>{utente.id}</td>
                            <td className={styles.td}>{utente.nome}</td>
                            <td className={styles.td}>{utente.cognome}</td>
                            <td className={styles.td}>{utente.email}</td>
                            <td className={styles.td}>{utente.ruolo}</td>
                            <td className={styles.td}>{utente.stato}</td>
                            <td className={styles.td}>{utente.corso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <Footer />
        </div>
    );
}