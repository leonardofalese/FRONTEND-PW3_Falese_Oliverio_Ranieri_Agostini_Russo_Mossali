'use client'
 
import { useEffect, useState } from 'react';
import Header from '@/app/dashboard/components/header';
import Footer from '@/components/footer';
import styles from './page.module.css';
import { motion } from 'framer-motion'; // Importa Framer Motion per le animazioni
 
const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
 
  useEffect(() => {
    // Simulazione di caricamento delle notifiche
    const fetchNotifications = () => {
      // Qui potresti recuperare le notifiche da un'API
      // Per ora usiamo delle notifiche di esempio
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
    <div>
      <Header />
      <div className={styles.content}>
        <h2>Notifications Page</h2>
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
      <Footer />
    </div>
  );
};
 
export default Notifications;