import styles from '@/components/hero.module.css';

export default function Hero() {
    return (
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.h1}>Benvenuti in ITS INCOM</h1>
                    <p className={styles.p}>Il tuo FUTURO inizia qui. Studiare e lavorare non è mai stato così semplice.</p>
                    <a href='https://itsincom.it/' target='_blank'><button className={styles.ctaButton}>Scopri di più</button></a>
                </div>
            </section>
    );
};