'use client'

import { useEffect, useState } from 'react'

import Header from '@/app/amministratore/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import styles from './page.module.css'
import plus from '@/public/images/plus.jpeg'

export default function Corsi() {
    const [corsi, setCorsi] = useState([]);
    const [showEditColumn, setShowEditColumn] = useState(false);

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

    const toggleEditColumn = () => {
        setShowEditColumn(!showEditColumn);
    };

    const addCourse = (id) => {
        // Implement logic to add the course
        console.log(`Aggiungi corso con ID: ${id}`);
    };

    const removeCourse = (id) => {
        // Implement logic to remove the course
        console.log(`Rimuovi corso con ID: ${id}`);
    };

    return (
        <div>
            <Header />
            <h1 className={styles.h1}>Corsi disponibili</h1>
            <button onClick={toggleEditColumn} className={styles.button1}>
                {showEditColumn ? 'Nascondi Modifica' : 'Mostra Modifica'}
            </button>
            <div className={styles.container}>
                <div className={styles.card}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Categoria</th>
                                {showEditColumn && <th className={styles.th}>Modifica</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr className={styles.tr}>
                                    <td className={styles.td}>corsi</td>
                                    <td className={styles.td}>corsi</td>
                                    {showEditColumn && <td className={styles.td}>
                                        <button onClick={() => addCourse(corso.idCourse)} className={styles.button2} >
                                        <Image src={plus} alt="plus" className={styles.img} />
                                        </button>
                                    </td>}


                                </tr>
                            /* {corsi.map((corso) => (
                                <tr key={corso.idCourse} className={styles.tr}>
                                    <td className={styles.td}>{corso.name}</td>
                                    <td className={styles.td}>{corso.category}</td>
                                    {showEditColumn && (
                                        <td className={styles.td}>
                                            <button onClick={() => addCourse(corso.idCourse)} className={styles.editButton}>Aggiungi</button>
                                            <button onClick={() => removeCourse(corso.idCourse)} className={styles.editButton}>Rimuovi</button>
                                        </td>
                                    )}
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}
