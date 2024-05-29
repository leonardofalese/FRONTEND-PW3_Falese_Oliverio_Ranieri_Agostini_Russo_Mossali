'use client'

import Header from '@/app/profile/components/header'
import Footer from '@/components/footer'

import styles from './page.module.css'
import {useEffect, useState} from "react";

export default function Profile() {

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    state: "",
    courseSelected: ""
  });

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
        } else {
          throw new Error('Errore nella richiesta dei dati utente');
        }
      } catch (error) {
        console.error('Errore durante il recupero dei dati utente:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <body>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.h2}>Profilo</h2>
        <div className={styles.content}>
          <div className={styles.profileInfo}>
            <div className={styles.profileField}>
              <label htmlFor="firstName">NOME:</label>
              <span className={styles.p}> {userData.name}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="lastName">COGNOME:</label>
              <span className={styles.p}> {userData.surname}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="email">Email:</label>
              <span className={styles.p}> {userData.email}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="course">STATO:</label>
              <span className={styles.p}> {userData.state}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="course">CORSO:</label>
              <span className={styles.p}> {userData.courseSelected.name}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </body>
  );
}