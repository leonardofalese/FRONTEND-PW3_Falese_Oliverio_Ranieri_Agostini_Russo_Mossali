'use client'

import Header from '@/app/dashboard/components/header';
import Footer from '@/components/footer';
import Link from 'next/link'
import Image from 'next/image'
import profilo from '@/public/images/profilo.jpeg'
import notifiche from '@/public/images/notifiche.jpeg'
import calendario from '@/public/images/calendario.jpeg'
import styles from './page.module.css';

export default function Dashboard() {
  return (
    <body>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.h2}>Dashboard</h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image src={profilo} alt="Logo Profilo" />
            </div>
            <h3>PROFILO</h3>
            <p>Visualizza qui le informazioni del tuo profilo.</p>
            <Link href="/profile">Vai al Profilo</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image src={notifiche} alt="Logo Notifiche" />
            </div>
            <h3>NOTIFICHE</h3>
            <p>Visualizza qui le tue ultime notifiche.</p>
            <Link href="/notifications">Vai alle Notifiche</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}>
              <Image src={calendario} alt="Logo Calendario" />
            </div>
            <h3>CALENDARIO</h3>
            <p>Visualizza qui il calendario.</p>
            <Link href="/calendar">Vai al Calendario</Link>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}