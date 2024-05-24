'use client';

import Header from '@/app/amministratore/components/header';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Footer from '@/components/footer';

export default function Utenti() {
    const router = useRouter();

    const corsi = [
        { id: 1, nome: 'AR - VR e Game Developer', categoria: 'Area Programmazione' },
        { id: 2, nome: 'Data analists', categoria: 'Area Programmazione' },
        { id: 3, nome: 'Web developer', categoria: 'Area Programmazione' },
        { id: 4, nome: 'Cloud Developer', categoria: 'Area Programmazione' },
        { id: 5, nome: 'Digital Twin', categoria: 'Area Nuove Tecnologie' },
        { id: 6, nome: 'Sistemista Cloud e Cybersecurity', categoria: 'Area Nuove Tecnologie' },
        { id: 7, nome: 'Manufacturing Design', categoria: 'Area Nuove Tecnologie' },
        { id: 8, nome: 'Networking e Security', categoria: 'Area Nuove Tecnologie' },
        { id: 9, nome: 'Internet of Things', categoria: 'Area Nuove Tecnologie' },
        { id: 10, nome: 'Digital Tourism, Hospitality & Events', categoria: 'Area Comunicazione' },
        { id: 11, nome: 'Sales Management', categoria: 'Area Comunicazione' },
        { id: 12, nome: 'Digital Marketing Manager', categoria: 'Area Comunicazione' },
        { id: 13, nome: 'Web Designer', categoria: 'Area Comunicazione' }
        
    ];
    
    const corsiOrdinati = corsi.sort((a, b) => {
        const categorie = ['Area programmazione', 'Area Nuove Tecnologie', 'Area Comunicazione'];
        return categorie.indexOf(a.categoria) - categorie.indexOf(b.categoria);
    });

    const getRowClass = (categoria) => {
        if (categoria.includes('Programmazione')) {
            return styles.areaProgrammazione;
        } else if (categoria.includes('Nuove Tecnologie')) {
            return styles.areaNuoveTecnologie;
        } else if (categoria.includes('Comunicazione')) {
            return styles.areaComunicazione;
        } else {
            return '';
        }
    };

    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Corsi disponibili</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                    {corsiOrdinati.map((corso) => (
                            <tr key={corso.id} className={getRowClass(corso.categoria)}>
                                <td className={styles.td}>{corso.id}</td>
                                <td className={styles.td}>{corso.nome}</td>
                                <td className={styles.td}>{corso.categoria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}