'use client'

import Header from '@/app/profile/components/header'
import Footer from '@/components/footer'

import styles from './page.module.css'

export default function Profile() {

  const profileInfo = {
    firstName: "Mario",
    lastName: "Rossi",
    email: "mario.rossi@gmail.com",
    course: "Web Developer",
  };

  return (
    <body>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.h2}>Profilo</h2>
        <div className={styles.content}>
          <div className={styles.profileInfo}>
            <div className={styles.profileField}>
              <label htmlFor="firstName">NOME:</label>
              <span id="firstName">{profileInfo.firstName}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="lastName">COGNOME:</label>
              <span id="lastName">{profileInfo.lastName}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="email">Email:</label>
              <span id="email">{profileInfo.email}</span>
            </div>
            <div className={styles.profileField}>
              <label htmlFor="course">CORSO:</label>
              <span id="course">{profileInfo.course}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}