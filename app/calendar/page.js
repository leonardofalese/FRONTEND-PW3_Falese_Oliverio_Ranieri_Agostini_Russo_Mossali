'use client';
 
import { useState } from 'react';
import Header from '@/app/amministratore/components/header';
import Footer from '@/components/footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './page.module.css';
 
export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
 
  const onChange = newDate => {
    setDate(newDate);
  };
 
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <h2>CALENDARIO </h2>
        <Calendar onChange={onChange} value={date} className={styles.reactCalendar} />
      </div>
      <Footer />
    </div>
  );
}