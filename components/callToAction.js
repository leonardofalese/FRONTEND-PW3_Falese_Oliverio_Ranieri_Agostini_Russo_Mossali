import Link from 'next/link';
import styles from '@/components/callToAction.module.css'
import Image from 'next/image'
import imgLogo from '@/public/images/ITSLogo2.jpeg'

export default function CallToAction() {
    return (
      <section className={styles.callToAction}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Pronto a Unirti a Noi?</h2>
          <p className={styles.p}>Vuoi dare una svolta alla tua carriera? Registrati e Candidati ai nostri corsi.</p>
          <p className={styles.p2}>Ti Aspettiamo!</p>
          <Link href="/register" className={styles.link}><button className={styles.registerButton}>Registrati</button></Link>
          </div>
          <div className={styles.image}>
          <Image src={imgLogo} alt='Image' className={styles.img}></Image>
          </div>
      </section>
    );
  };
