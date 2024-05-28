import Link from 'next/link'

import styles from '@/components/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Chi Siamo</h2>
                        <p className={styles.p}>ITS Incom si dedica a offrire alta qualità educativa e lavorativa. Unisciti a noi per iniziare a costruire il tuo futuro.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Naviga</h2>
                        <ul className={styles.ul}>
                            <li className={styles.li}><Link className={styles.link} href="/">Home</Link></li>
                            <li className={styles.li}><Link className={styles.link} href="/login">Login</Link></li>
                            <li className={styles.li}><Link className={styles.link} href="/register">Registrati</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Contattaci</h2>
                        <Link className={styles.link} href="mailto:orientamento@itsincom.it"><p className={styles.p}>Email: orientamento@itsincom.it</p></Link>
                        <Link className={styles.link} href="tel:03311010995"><p className={styles.p}>Tel: 0331 1010995</p></Link>
                        <Link className={styles.link} href="tel:3388225563"><p className={styles.p}>Mob: +39 338 822 5563</p></Link>
                    </div>
                    <div className={styles.footerSection}>
                        <h2 className={styles.h2}>Dove Siamo</h2>
                        <p className={styles.p}><strong>Sede Operativa MalpensaFiere</strong></p>
                        <p className={styles.p}>Via XI Settembre 16-Ingresso B</p>
                        <p className={styles.p}>21052 Busto Arsizio(VA)</p>
                    </div>
                    <div className={styles.footerSection}>
                        <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.735857360548!2d8.8509754!3d45.6360424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868b8a578a3fd5%3A0xae587e0bfe4fa313!2sITS%20INCOM%20Academy!5e0!3m2!1sit!2sit!4v1716468653510!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'} className={styles.map}></iframe>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    &copy; {new Date().getFullYear()} ITS Incom. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};