import Link from 'next/link';
import styles from '@/components/callToAction.module.css'

export default function CallToAction() {
    return (
      <section className={styles.callToAction}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Ready to Join Us?</h2>
          <p className={styles.p}>Take the next step in your career by enrolling in one of our programs. Our team is here to support you every step of the way.</p>
          <Link href="/contact" className={styles.link}><button className={styles.registerButton}>Registrati</button></Link>
          </div>
      </section>
    );
  };
