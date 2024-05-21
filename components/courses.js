import styles from '@/components/courses.module.css'

export default function Courses() {
    return (
      <section className={styles.courses}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Our Courses</h2>
          <div className={styles.courseCards}>
            <div className={styles.courseCard}>
              <h3 className={styles.h3}>Web Development</h3>
              <p className={styles.p}>Learn the latest web development technologies and frameworks to build modern web applications.</p>
            </div>
            <div className={styles.courseCard}>
              <h3 className={styles.h3}>Data Science</h3>
              <p className={styles.p}>Master data analysis, machine learning, and big data technologies to become a data scientist.</p>
            </div>
            <div className={styles.courseCard}>
              <h3 className={styles.h3}>Cyber Security</h3>
              <p className={styles.p}>Get trained in the latest security protocols and techniques to protect systems and networks.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };