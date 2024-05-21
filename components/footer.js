import Link from 'next/link';
import styles from '@/components/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>About Us</h2>
                        <p className={styles.p}>ITS Incom is dedicated to providing high-quality education and training. Join us to build a brighter future.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Quick Links</h2>
                        <ul className={styles.ul}>
                            <li className={styles.li}><Link className={styles.link} href="/">Home</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Contact Us</h2>
                        <p className={styles.p}>Email: info@itsincom.com</p>
                        <p className={styles.p}>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    &copy; {new Date().getFullYear()} ITS Incom. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
