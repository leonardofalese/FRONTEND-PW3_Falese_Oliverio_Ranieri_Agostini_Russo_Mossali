'use client'

import { useEffect, useState } from 'react'

import Footer from '@/components/footer'

import styles from './page.module.css'

export default function Corsi() {
    const [Header, setHeader] = useState(null);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        email: "",
        role: ""
    });
    const [corsi, setCorsi] = useState([]);

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8080/users', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUserData(userData);
                    console.log(userData);
                    if (userData.role === "STUDENT") {
                        const { default: Header } = await import('@/app/profile/components/header');
                        setHeader(() => Header);
                    } else {
                        const { default: Header } = await import('@/app/corsi/components/header');
                        setHeader(() => Header);
                    }
                } else {
                    throw new Error('Errore nella richiesta dei dati utente');
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati utente:', error);
            }
        };

        fetchUserData();

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

                    const corsiPerCategoria = data.reduce((acc, corso) => {
                        (acc[corso.category] = acc[corso.category] || []).push(corso);
                        return acc;
                    }, {});

                    setCorsi(corsiPerCategoria);
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
            {Header && <Header />}
            <h1 className={styles.h1}>Scopri i nostri corsi</h1>
            <div className={styles.body}>
                {Object.entries(corsi).map(([categoria, corsiCategoria]) => (
                    <div key={categoria} className={styles.boxCategory}>
                        <h2 className={styles.h2}>{categoria}</h2>
                        <div className={styles.row}>
                            {corsiCategoria.map((corso) => (
                                <div className={styles.container} key={corso.idCourse}>
                                    <div className={styles.card}>
                                        <div className={styles.box}>
                                            <div className={styles.content}>
                                                <h3>{corso.name}</h3>
                                                <p>{corso.category}</p>
                                                <a href="#">Candidati!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
