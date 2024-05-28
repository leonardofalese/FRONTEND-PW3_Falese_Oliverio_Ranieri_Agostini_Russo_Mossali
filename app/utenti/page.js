'use client'
import {useEffect, useState} from "react"
import {useRouter} from 'next/navigation'
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer'
import styles from './page.module.css'
import plus from "@/public/images/plus.jpeg";
import Image from "next/image";

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
                            return {...utente, courseName};
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

    const [showEditColumn, setShowEditColumn] = useState(false);

    const toggleEditColumn = () => {
        setShowEditColumn(!showEditColumn);
    };

    const removeUser = async (id) => {
        const confirmDelete = window.confirm('Sei sicuro di voler rimuovere questo utente?');
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8080/users/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    console.log(`Utente con ID: ${id} rimosso con successo`);
                    // Rimuovi l'utente dall'array utenti nello stato
                    setUtenti(utenti.filter(utente => utente.id !== id));
                } else {
                    const errorMessage = await response.text();
                    console.log('Errore durante la rimozione dell\'utente:', response.status, errorMessage);
                }
            } catch (error) {
                console.log('Errore:', error);
            }
        }
    };

    return (
        <div>
            <Header/>
            <h1 className={styles.h1}>Utenti Registrati</h1>
            <button onClick={toggleEditColumn} className={styles.button1}>
                {showEditColumn ? 'Nascondi Modifica' : 'Mostra Modifica'}
            </button>
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
                                {showEditColumn && <th className={styles.th}>Modifica</th>}
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
                                    {showEditColumn && (
                                        <td className={styles.td}>
                                            <button onClick={() => removeUser(utente.id)}
                                                    className={styles.editButton}>
                                                <Image src={plus} alt="plus" width={20} height={20}
                                                       className={styles.img}/>Rimuovi
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}