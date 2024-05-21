import styles from '@/components/news.module.css'

export default function News() {
    return (
      <section className={styles.news}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Latest News</h2>
          <div className={styles.newsCards}>
            <div className={styles.newsCard}>
              <h3 className={styles.h3}>New Course Launch: AI and Machine Learning</h3>
              <p className={styles.p}>We are excited to announce the launch of our new AI and Machine Learning course starting this fall.</p>
            </div>
            <div className={styles.newsCard}>
              <h3 className={styles.h3}>Upcoming Webinar: Cyber Security Trends</h3>
              <p className={styles.p}>Join us for an informative webinar on the latest trends in cyber security and how to protect your data.</p>
            </div>
            <div className={styles.newsCard}>
              <h3 className={styles.h3}>Student Success Stories</h3>
              <p className={styles.p}>Read about our students' success stories and how ITS Incom has helped them achieve their goals.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
