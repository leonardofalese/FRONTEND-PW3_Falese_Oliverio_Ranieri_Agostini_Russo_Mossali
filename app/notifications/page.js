'use client'

import { useEffect, useState } from 'react'

import Header from '@/app/profile/components/header'
import Footer from '@/components/footer'

import { motion } from 'framer-motion'

import styles from './page.module.css'

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = () => {
      const exampleNotifications = [
        {
          id: 1,
          title: 'New Message',
          timestamp: '2 days ago',
          content: 'You have a new message from John Doe.',
        },
        {
          id: 2,
          title: 'Subscription Expiry',
          timestamp: '5 days ago',
          content: 'Your subscription is about to expire.',
        },
      ];
      setNotifications(exampleNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <body>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.h2}>Notifiche</h2>
        <div className={styles.content}>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              className={styles.notification}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className={styles.notificationHeader}>
                <h3>{notification.title}</h3>
                <span>{notification.timestamp}</span>
              </div>
              <p>{notification.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </body>
  );
};