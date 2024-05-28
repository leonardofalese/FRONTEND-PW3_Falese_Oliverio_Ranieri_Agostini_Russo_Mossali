import styles from '@/components/news.module.css'

export default function News() {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Le Ultime Notizie</h2>
        <div className={styles.newsCards}>
          <div className={styles.newsCard}>
            <h3 className={styles.h3}>Lancio del Nuovo Corso: AR - VR e Game Developer</h3>
            <p className={styles.p}>Siamo entusiasti di annunciare il nostro nuovo corso nell'area di programazzione.</p>
          </div>
          <div className={styles.newsCard}>
            <h3 className={styles.h3}>In arrivo nuove Selezioni e nuovi Open-Day, Candidati al più presto!</h3>
            <p className={styles.p}>Unisciti a noi e rimani aggiornato tramite i nostri canali Social su tutte le novità delle ultime settimane</p>
          </div>
          <div className={styles.newsCard}>
            <h3 className={styles.h3}>I Nostri Studenti sempre più Richiesti dalle Aziende</h3>
            <p className={styles.p}>Con ITS INCOM gli Studenti crescono velocemente nelle Aziende dei loro Sogni, non perdere questa Occasione.</p>
          </div>
        </div>
      </div>
    </section>
  );
};