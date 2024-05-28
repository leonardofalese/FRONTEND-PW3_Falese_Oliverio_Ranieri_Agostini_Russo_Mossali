'use client';

import { useEffect, useState } from 'react'

import Header from '@/app/amministratore/components/header'
import Footer from '@/components/footer'

import Image from "next/image"

import plus from "@/public/images/plus.jpeg"

import styles from './page.module.css'

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

    const [editCandidateId, setEditCandidateId] = useState(null);

    const [showEditColumn, setShowEditColumn] = useState(false);

    const toggleEditColumn = () => {
        setShowEditColumn(!showEditColumn);
    };

    const updateCandidateState = async (userId, applicationId, newState) => {
        try {
            const response = await fetch(`http://localhost:8080/candidates/${userId}/`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ testState: newState }),
            });

            if (response.ok) {
                alert('Stato del candidato aggiornato con successo');
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
            <Header />
            <h1 className={styles.h1}>Candidature attive</h1>
            <div className={styles.modify}>
                <button onClick={toggleEditColumn} className={styles.button1}>
                    {showEditColumn ? 'Nascondi Modifica' : 'Mostra Modifica'}
                </button>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.overflow}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Id</th>
                                    <th className={styles.th}>User Id</th>
                                    <th className={styles.th}>Cognome</th>
                                    <th className={styles.th}>Nome</th>
                                    <th className={styles.th}>Stato</th>
                                    {showEditColumn && <th className={styles.th}>Modifica</th>}
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
                                        {showEditColumn && (
                                            <td className={styles.td}>
                                                {isEditing && editingCandidate && editingCandidate.id === candidatura.id ? (
                                                    <>
                                                        <select
                                                            value={selectedState}
                                                            onChange={(e) => setSelectedState(e.target.value)}
                                                        >
                                                            <option value="PENDING">PENDING</option>
                                                            <option value="PASSED">PASSED</option>
                                                            <option value="FAILED">FAILED</option>
                                                        </select>
                                                        <button onClick={saveChanges}>Salva</button>
                                                    </>
                                                ) : (
                                                    candidatura.state
                                                )}
                                            </td>
                                        )}
                                        {showEditColumn && (
                                            <td className={styles.td}>
                                                <button onClick={() => startEditing(candidatura)}
                                                    className={styles.editButton}>
                                                    <Image src={plus} alt="plus" width={20} height={20}
                                                        className={styles.img} />Modifica
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
            <Footer />
        </div>
    );
}
