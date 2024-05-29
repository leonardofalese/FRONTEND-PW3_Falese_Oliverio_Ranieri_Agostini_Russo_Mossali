'use client'

import {useEffect, useState} from 'react'

import Header from '@/app/amministratore/components/header';
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

    const handleLogin = async (courseName) => {
        try {
            const response = await fetch('http://localhost:8080/users', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const user = await response.json();
                if (user.role === 'STUDENT') {
                    console.log('Utente riconosciuto, procedi con la candidatura!');
                    await handleApplication(courseName);
                } else if (user.role === 'ADMIN') {
                    alert('Utente riconosciuto come amministratore, non può candidarsi ad un corso');
                    console.log('Utente riconosciuto come amministratore, non può candidarsi ad un corso');
                }
            } else {
                const errorMessage = await response.text();
                console.log('Errore nel recupero delle informazioni dell\'utente loggato');
                alert('Assicurati di effettuare il login per candidarti ad un corso!');
            }
        } catch (error) {
            console.log('Errore:', error);
        }
    }

    const handleApplication = async (courseName) => {
        try {
            const response = await fetch('http://localhost:8080/applications', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({courseName}),
            });

            if (response.ok) {
                alert('Candidatura inviata con successo!');
            } else {
                const errorMessage = await response.text();
                alert('Errore, la candidatura è già stata effettuata per il corso scelto:', response.status, errorMessage);
                console.log('Errore, la candidatura è già stata effettuata per il corso scelto:', response.status, errorMessage);
            }
        } catch (error) {
            console.log('Errore:', error);
        }
    }

    return (
        <div>
            <Header/>
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
                                                <a href="#" onClick={() => handleLogin(corso.name)}>Candidati!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}
