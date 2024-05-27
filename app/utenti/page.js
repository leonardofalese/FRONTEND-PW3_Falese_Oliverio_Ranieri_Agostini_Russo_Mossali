'use client'

import { useEffect, useState } from "react"

import { useRouter } from 'next/navigation'

import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer'

import styles from './page.module.css'

export default function Utenti() {
    const router = useRouter();
    const [utenti, setUtenti] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/users/all', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Dati utenti:', data);

                    const usersWithCourseNames = await Promise.all(data.map(async (utente) => {
                        const courseResponse = await fetch(`http://localhost:8080/courses/${utente.courseId}`, {
                            method: 'GET',
                            credentials: 'include',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });

                        if (courseResponse.ok) {
                            const courseData = await courseResponse.json();
                            const courseName = courseData.name;
                            return { ...utente, courseName };
                        } else {
                            console.log('Errore durante il fetch del corso associato all\'utente:', courseResponse.status);
                            return utente;
                        }
                    }));

                    const sortedUsers = usersWithCourseNames.sort((a, b) => {
                        if (a.surname === b.surname) {
                            return a.name.localeCompare(b.name);
                        }
                        return a.surname.localeCompare(b.surname);
                    });

                    setUtenti(sortedUsers);
                } else {
                    const errorMessage = await response.text();
                    console.log('Errore durante il fetch degli utenti:', response.status, errorMessage);
                }
            } catch (error) {
                console.log('Errore:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Utenti Registrati</h1>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.overflow}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>ID</th>
                                    <th className={styles.th}>Nome</th>
                                    <th className={styles.th}>Cognome</th>
                                    <th className={styles.th}>Email</th>
                                    <th className={styles.th}>Ruolo</th>
                                    <th className={styles.th}>Stato</th>
                                    <th className={styles.th}>Corso Selezionato</th>
                                </tr>
                            </thead>
                            <tbody>
                                {utenti.map((utente) => (
                                    <tr key={utente.id} className={styles.tr}>
                                        <td className={styles.td}>{utente.id}</td>
                                        <td className={styles.td}>{utente.name}</td>
                                        <td className={styles.td}>{utente.surname}</td>
                                        <td className={styles.td}>{utente.email}</td>
                                        <td className={styles.td}>{utente.role}</td>
                                        <td className={styles.td}>{utente.state}</td>
                                        <td className={styles.td}>{utente.courseName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
