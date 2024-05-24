import styles from '@/components/testimonials.module.css'
import Image from 'next/image'
import Student1 from '@/public/images/Studente.jpeg'
import Student2 from '@/public/images/Studentessa.jpeg'

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.h2}>I Nostri Studenti</h2>
      <div className={styles.testimonialStudent1}>
        <Image src={Student1} alt="Student 1" className={styles.testimonialImage} />
        <div className={styles.testimonialText}>
          <h3 className={styles.h3Student1}>Riccardo F.</h3>
          <p className={styles.pStudent1}>
            "ITS Incom ha cambiato la mia vita. Ho imparato così tanto e ora ho una carriera che amo nel mondo della programmazione."
          </p>
        </div>
      </div>
      <div className={styles.testimonialStudent2}>
        <div className={styles.testimonialText}>
          <h3 className={styles.h3Student2}>Alessia N.</h3>
          <p className={styles.pStudent2}>
            "Grazie a ITS Incom, ho potuto sviluppare le competenze necessarie per il mio lavoro dei sogni del mondo della comunicazione."
          </p>
        </div>
        <Image src={Student2} alt="Student 2" className={styles.testimonialImage} />
      </div>
    </section>
  );
};