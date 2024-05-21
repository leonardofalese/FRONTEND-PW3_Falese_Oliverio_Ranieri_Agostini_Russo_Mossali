import styles from '@/components/about.module.css';

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2>About Us</h2>
                <p>ITS Incom is dedicated to providing high-quality education and training.</p>
            </div>
        </section>
    );
};