'use client'
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import styles from './page.module.css';
 
export default function Profile() {
  // Informazioni del profilo preimpostate
  const profileInfo = {
    firstName: "Mario",
    lastName: "Rossi",
    email: "mario.rossi@gmail.com",
    dob: "24-03-2004",
    phone: "123-456-7890",
    course: "Web Developer",
    // Aggiungi altre informazioni del profilo se necessario
  };
 
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.title}>PROFILO</h2>
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
            <label htmlFor="dob">DATA DI NASCITA:</label>
            <span id="dob">{profileInfo.dob}</span>
          </div>
          <div className={styles.profileField}>
            <label htmlFor="phone">NUMERO DI TELEFONO:</label>
            <span id="phone">{profileInfo.phone}</span>
          </div>
          <div className={styles.profileField}>
            <label htmlFor="course">CORSO:</label>
            <span id="course">{profileInfo.course}</span>
          </div>
          {/* Aggiungi altre informazioni del profilo come sopra */}
        </div>
      </div>
      <Footer />
    </div>
  );
}