'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import styles from './page.module.css';

export default function Candidature() {
    const [candidature, setCandidature] = useState([]);

    useEffect(() => {
        const fetchCandidature = async () => {
            try {
                const response = await fetch('http://localhost:8080/candidates', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Dati candidature:', data);

                    // Ordina le candidature per idUser
                    const sortedCandidature = data.sort((a, b) => a.idUser.localeCompare(b.idUser));

                    setCandidature(sortedCandidature);
                } else {
                    const errorMessage = await response.text();
                    console.error('Errore durante il fetch delle candidature:', response.status, errorMessage);
                }
            } catch (error) {
                console.error('Errore:', error);
            }
        };

        fetchCandidature();
    }, []);

    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Candidature attive</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th className={styles.th}>Id</th>
                            <th className={styles.th}>User Id</th>
                            <th className={styles.th}>Cognome</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Stato</th>
                        </tr>
                        </thead>
                        <tbody>
                        {candidature.map((candidatura) => (
                            <tr key={candidatura.candidateId} className={styles.tr}>
                                <td className={styles.td}>{candidatura.candidateId}</td>
                                <td className={styles.td}>{candidatura.idUser}</td>
                                <td className={styles.td}>{candidatura.user.surname}</td>
                                <td className={styles.td}>{candidatura.user.name}</td>
                                <td className={styles.td}>{candidatura.testState}</td>
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
