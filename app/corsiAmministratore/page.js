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
        { id: 1, nome: 'Cloud developer', categoria: 'Area programmazione' },
        { id: 2, nome: 'Web developer', categoria: 'Area programmazione' },
        { id: 3, nome: 'Data analists', categoria: 'Area programmazione' },
        { id: 4, nome: 'Web designer', categoria: 'Area comunicazione' },
        { id: 5, nome: 'Digital marketng', categoria: 'Area comunicazione' },
        { id: 6, nome: 'Internet of things', categoria: 'Area nuove tecnologie' },
        { id: 7, nome: 'Cybersecurity', categoria: 'Area nuove tecnologie' },
        { id: 8, nome: 'Automazione e robotica', categoria: 'Corsi in apprendistato' },
        { id: 9, nome: 'Dinamics 360', categoria: 'Corsi in apprendistato' },
        { id: 10, nome: 'Competenze digitali', categoria: 'Corsi in apprendistato' },
       
    ];
 
    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Corsi disponibili</h1>
            <div id='container' className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>Nome</th>
                        <th className={styles.th}>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {utenti.map((utente) => (
                        <tr key={utente.id}>
                            <td className={styles.td}>{utente.id}</td>
                            <td className={styles.td}>{utente.nome}</td>
                            <td className={styles.td}>{utente.categoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <Footer />
        </div>
    );
}