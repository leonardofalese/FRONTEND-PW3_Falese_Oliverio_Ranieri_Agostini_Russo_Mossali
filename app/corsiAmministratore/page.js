'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import styles from './page.module.css';
import plus from '@/public/images/plus.jpeg';

export default function Corsi() {
    const [corsi, setCorsi] = useState([]);
    const [showEditColumn, setShowEditColumn] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const categories = ['PROGRAMMAZIONE', 'NUOVE_TECNOLOGIE', 'COMUNICAZIONE'];

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

    const addLine = () => {
        setCorsi([...corsi, {idCourse: 'new'}]);
        setIsAdding(true);
    }

    const addCourse = async (corso) => {
        try {
            // Crea un nuovo oggetto corso senza idCourse
            const newCorso = {
                name: corso.name,
                category: corso.category,
            };

            const response = await fetch('http://localhost:8080/courses', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCorso), // Invia i dati del corso al server
            });

            if (response.ok) {
                console.log('Nuovo corso aggiunto con successo');
                setIsAdding(false);
                alert('Corso salvato con successo!'); // Mostra un alert di conferma
                location.reload(); // Ricarica la pagina
            } else {
                const errorMessage = await response.text();
                console.log('Errore durante l\'aggiunta del corso:', response.status, errorMessage);
            }
        } catch (error) {
            console.log('Errore:', error);
        }
    };
    const handleInputChange = (index, field, value) => {
        // Crea una nuova copia dell'array corsi
        const newCorsi = [...corsi];

        // Se il corso non esiste ancora, crealo
        if (!newCorsi[index]) {
            newCorsi[index] = {idCourse: 'new'};
        }

        // Aggiorna il campo corrispondente del corso
        newCorsi[index][field] = value;

        // Aggiorna lo stato con l'array copiato
        setCorsi(newCorsi);
    };

    const removeCourse = async (id) => {
        const confirmDelete = window.confirm('Sei sicuro di voler rimuovere questo corso?');
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:8080/courses/${id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    console.log(`Corso con ID: ${id} rimosso con successo`);
                    // Rimuovi il corso dall'array corsi nello stato
                    setCorsi(corsi.filter(corso => corso.idCourse !== id));
                } else {
                    const errorMessage = await response.text();
                    console.log('Errore durante la rimozione del corso:', response.status, errorMessage);
                }
            } catch (error) {
                console.log('Errore:', error);
            }
        }
    };

    return (
        <div>
            <Header/>
            <h1 className={styles.h1}>Corsi disponibili</h1>
            <div className={styles.modify}>
            <button onClick={toggleEditColumn} className={styles.button1}>
                {showEditColumn ? 'Nascondi Modifica' : 'Mostra Modifica'}
            </button>
            {showEditColumn && (
                isAdding ? (
                    <button onClick={() => addCourse(corsi.find(corso => corso.idCourse === 'new'))}
                            className={styles.button1}>
                        Salva
                    </button>
                ) : (
                    <button onClick={addLine} className={styles.button1}>
                        Aggiungi
                    </button>
                )
            )}
            </div>
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
                        {corsi.length > 0 && corsi.map((corso, index) => (
                            <tr key={corso.idCourse || 'new'} className={styles.tr}>
                                <td className={styles.td}>
                                    {corso.idCourse === 'new' ? (
                                        <input className={styles.input} type="text" value={corso.name || ''}
                                               onChange={(e) => handleInputChange(index, 'name', e.target.value)}/>
                                    ) : (
                                        corso.name || ''
                                    )}
                                </td>
                                <td className={styles.td}>
                                    {corso.idCourse === 'new' ? (
                                        <select className={styles.option} value={corso.category || ''}
                                                onChange={(e) => handleInputChange(index, 'category', e.target.value)}>
                                            <option value="">Seleziona una categoria</option>
                                            {categories.map((category) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        corso.category || ''
                                    )}
                                </td>
                                {showEditColumn && (
                                    <td className={styles.td}>
                                        <button onClick={() => removeCourse(corso.idCourse)}
                                                className={styles.editButton}>
                                            <Image src={plus} alt="plus" width={20} height={20}
                                                   className={styles.img}/> Rimuovi
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
}