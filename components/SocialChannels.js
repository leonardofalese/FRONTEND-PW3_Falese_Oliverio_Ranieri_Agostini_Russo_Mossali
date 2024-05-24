import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import styles from '@/components/SocialChannels.module.css'

export default function SocialChannels() {
    return (
        <section className={styles.container}>
            <h2 className={styles.h2}>I Nostri Canali Social</h2>
            <div className={styles.socialChannels}>
                <Link href="https://www.linkedin.com/school/itsincom/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIconL} />
                </Link>
                <Link href="https://www.instagram.com/its_incom/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className={styles.socialIconI} />
                </Link>
                <Link href="https://www.youtube.com/channel/UCrDs_cWiJG_eV0Qj6BggbSg" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className={styles.socialIconY} />
                </Link>
                <Link href="https://www.facebook.com/itsincom?locale=it_IT" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className={styles.socialIconF} />
                </Link>
                <Link href="https://www.tiktok.com/@its_incom" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className={styles.socialIconT} />
                </Link>
            </div>
        </section>
    );
};