import styles from '@/components/testimonials.module.css'

export default function Testimonials() {
    return (
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.h2}>What Our Students Say</h2>
          <div className={styles.testimionalCards}>
            <div className={styles.testimionalCard}>
              <p className={styles.p}>"Joining ITS Incom was the best decision of my life. The courses are comprehensive and the instructors are top-notch."</p>
              <h3 className={styles.h3}>John Doe</h3>
            </div>
            <div className={styles.testimionalCards}>
              <p className={styles.p}>"The learning environment is excellent, and I feel well-prepared for my future career thanks to ITS Incom."</p>
              <h3 className={styles.h3}>Jane Smith</h3>
            </div>
            <div className={styles.testimionalCards}>
              <p className={styles.p}>"The support and resources available at ITS Incom have been invaluable to my learning experience."</p>
              <h3 className={styles.h3}>Michael Brown</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };