'use client'

import { useState } from 'react'

import Header from '@/app/calendar/components/header'
import Footer from '@/components/footer'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import styles from './page.module.css'

export default function CalendarPage() {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
        setDate(newDate);
    };

    return (
        <body>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.h2}>Calendario</h2>
                <div className={styles.content}>
                    <Calendar onChange={onChange} value={date} className={styles.reactCalendar} />
                </div>
            </div>
            <Footer />
        </body>
    );
}