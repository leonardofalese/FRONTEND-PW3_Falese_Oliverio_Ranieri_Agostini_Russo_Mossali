'use client';

import { useEffect, useState } from 'react';
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import styles from './page.module.css';
import Image from "next/image";
import plus from "@/public/images/plus.jpeg";

export default function Candidature() {
    const [candidature, setCandidature] = useState([]);

    useEffect(() => {
        const fetchCandidature = async () => {
            try {
                const response = await fetch('http://localhost:8080/applications', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Dati candidature:', data);

                    // Ordina le candidature per user_id
                    const sortedCandidature = data.sort((a, b) => a.user.surname.localeCompare(b.user.surname));

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

    const [editCandidateId, setEditCandidateId] = useState(null);

    const [showEditColumn, setShowEditColumn] = useState(false);

    const toggleEditColumn = () => {
        setShowEditColumn(!showEditColumn);
    };

    const updateCandidateState = async (userId, applicationId, newState) => {
        try {
            const response = await fetch(`http://localhost:8080/applications/${userId}/${applicationId}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ state: newState }),
            });

            if (response.ok) {
                alert('Stato del candidato aggiornato con successo');
                // Ricarica la pagina per ottenere i dati aggiornati
                location.reload();
            } else {
                const errorMessage = await response.text();
                console.log('Errore durante l\'aggiornamento dello stato del candidato:', response.status, errorMessage);
            }
        } catch (error) {
            console.log('Errore:', error);
        }
    };

    const [isEditing, setIsEditing] = useState(false);
    const [selectedState, setSelectedState] = useState(null);
    const [editingCandidate, setEditingCandidate] = useState(null);

    const startEditing = (candidatura) => {
        setEditingCandidate(candidatura);
        setSelectedState(candidatura.state);
        setIsEditing(true);
    };

    const saveChanges = async () => {
        if (selectedState && editingCandidate) {
            await updateCandidateState(editingCandidate.user.id, editingCandidate.id, selectedState);
        }
        setIsEditing(false);
        setEditingCandidate(null);
    };
    return (
        <div>
            <Header/>
            <h1 className={styles.h1}>Candidature attive</h1>
            <button onClick={toggleEditColumn} className={styles.button1}>
                {showEditColumn ? 'Nascondi Modifica' : 'Mostra Modifica'}
            </button>
            <div className={styles.container}>
                <div className={styles.card}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th className={styles.th}>Id</th>
                            <th className={styles.th}>Cognome</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Stato</th>
                            <th className={styles.th}>Nome del Corso</th>
                            {showEditColumn && <th className={styles.th}>Modifica</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {candidature.map((candidatura) => (
                            <tr key={candidatura.id} className={styles.tr}>
                                <td className={styles.td}>{candidatura.id}</td>
                                <td className={styles.td}>{candidatura.user.surname}</td>
                                <td className={styles.td}>{candidatura.user.name}</td>
                                <td className={styles.td}>
                                    {isEditing && editingCandidate && editingCandidate.id === candidatura.id ? (
                                        <>
                                            <select
                                                value={selectedState}
                                                onChange={(e) => setSelectedState(e.target.value)}
                                            >
                                                <option value="PENDING">PENDING</option>
                                                <option value="ACTIVE">ACTIVE</option>
                                                <option value="INACTIVE">INACTIVE</option>
                                                <option value="DROPPED">DROPPED</option>
                                                <option value="BLOCKED">BLOCKED</option>
                                            </select>
                                            <button onClick={saveChanges}>Salva</button>
                                        </>
                                    ) : (
                                        candidatura.state
                                    )}
                                </td>
                                <td className={styles.td}>{candidatura.courseName}</td>
                                {showEditColumn && (
                                    <td className={styles.td}>
                                        <button onClick={() => startEditing(candidatura)}
                                                className={styles.editButton}>
                                            <Image src={plus} alt="plus" width={20} height={20}
                                                   className={styles.img}/>Modifica
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
