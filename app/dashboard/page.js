'use client'

import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';

import Link from 'next/link';

import styles from './page.module.css'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <h2>Dashboard</h2>
          <ul>
            <li><Link href="@/components/dashboardProfile.js">Profile</Link></li>
            <li><Link href="@/components/dashboardNotifications.js">Notifications</Link></li>
            <li><Link href="@/components/dashboardCalendar.js">Calendar</Link></li>
          </ul>
        </div>

        <div className={styles.content}>
          <h1>Dashboard</h1>
          <div className={styles.card}>
            <h3>Card Title</h3>
            <p>Some content goes here.</p>
          </div>
          <div className={styles.card}>
            <h3>Card Title</h3>
            <p>Some content goes here.</p>
          </div>
          <div className={styles.card}>
            <h3>Card Title</h3>
            <p>Some content goes here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}