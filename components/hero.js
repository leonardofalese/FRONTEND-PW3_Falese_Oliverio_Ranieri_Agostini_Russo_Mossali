import styles from '@/components/hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Welcome to ITS Incom</h1>
                <p className={styles.p}>Your future starts here. Join us to learn and grow.</p>
                <button className={styles.ctaButton}>Learn More</button>
            </div>
        </section>
    );
};