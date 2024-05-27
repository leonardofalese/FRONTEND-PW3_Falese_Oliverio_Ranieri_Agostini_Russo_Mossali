'use client'

import { useEffect, useState } from 'react'

import Header from '@/app/amministratore/components/header'
import Footer from '@/components/footer'

import styles from './page.module.css'

export default function Corsi() {
    const [corsi, setCorsi] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:8080/courses', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Dati corsi:', data);

                    const sortedCorsi = data.sort((a, b) => {
                        if (a.category === b.category) {
                            return a.name.localeCompare(b.name);
                        }
                        return a.category.localeCompare(b.category);
                    });
                    setCorsi(sortedCorsi);
                } else {
                    const errorMessage = await response.text();
                    console.log('Errore durante il fetch dei corsi:', response.status, errorMessage);
                }
            } catch (error) {
                console.log('Errore:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Corsi disponibili</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {corsi.map((corso) => (
                                <tr key={corso.idCourse} className={styles.tr}>
                                    <td className={styles.td}>{corso.name}</td>
                                    <td className={styles.td}>{corso.category}</td>
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
