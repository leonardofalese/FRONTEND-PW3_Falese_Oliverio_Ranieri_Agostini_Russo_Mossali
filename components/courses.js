// import Link from 'next/link'

import styles from '@/components/courses.module.css'

export default function Courses() {

    return (
        <section className={styles.courses}>
            <div className={styles.container}>
                <h2 className={styles.h2}>I Nostri Corsi</h2>
                <div className={styles.courseCards}>
                    <div className={styles.courseCard}>
                        <h3 className={styles.h3}>Area Programmazione</h3>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Corso AR - VR e Game Developer
                            </li>
                            <li className={styles.li}>
                                Corso Data Analyst
                            </li>
                            <li className={styles.li}>
                                Corso Web Developer
                            </li>
                            <li className={styles.li}>
                                Corso Cloud Developer
                            </li>
                        </ul>
                        <button className={styles.ctaButton}>Scopri i corsi</button>
                    </div>
                    <div className={styles.courseCard}>
                        <h3 className={styles.h3}>Area Nuove Tecnologie</h3>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Corso Digital Twin
                            </li>
                            <li className={styles.li}>
                                Corso Sistemista Cloud e Cybersecurity
                            </li>
                            <li className={styles.li}>
                                Corso Manufacturing Design
                            </li>
                            <li className={styles.li}>
                                Corso Networiking e Security
                            </li>
                            <li className={styles.li}>
                                Corso Internet of Things
                            </li>
                        </ul>
                        <button className={styles.ctaButton}>Scopri i corsi</button>
                    </div>
                    <div className={styles.courseCard}>
                        <h3 className={styles.h3}>Area Comunicazione</h3>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                Corso Digital Tourism, Hospitality & Events
                            </li>
                            <li className={styles.li}>
                                Corso Sales Management
                            </li>
                            <li className={styles.li}>
                                Corso Digital Marketing Manager
                            </li>
                            <li className={styles.li}>
                                Corso Web Designer
                            </li>
                        </ul>
                        <button className={styles.ctaButton}>Scopri i corsi</button>
                    </div>
                </div>
            </div>
        </section>
    );
};