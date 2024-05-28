'use client'
 
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import styles from './page.module.css';
 
export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <h2>Dashboard</h2>
          <ul>
            <li>
              <Link href='/profile'>Profilo</Link>
            </li>
            <li>
              <Link href='/notifications'>Notifiche</Link>
            </li>
            <li>
              <Link href='/calendar'>Calendario</Link>
            </li>
          </ul>
        </div>
 
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src="/images/profilo.png" alt="Logo Profilo" />
            </div>
            <h3>PROFILO</h3>
            <p>Widget per visualizzare le informazioni del profilo.</p>
            <Link href="/profile">Vai al Profilo</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src="/images/notifiche.png" alt="Logo Notifiche" />
            </div>
            <h3>NOTIFICHE</h3>
            <p>Widget per visualizzare le ultime notifiche.</p>
            <Link href="/notifications">Vai alle Notifiche</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}>
              <img src="/images/calendario.png" alt="Logo Calendario" />
            </div>
            <h3>CALENDARIO</h3>
            <p>Widget per visualizzare il calendario degli eventi.</p>
            <Link href="/calendar">Vai al Calendario</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}