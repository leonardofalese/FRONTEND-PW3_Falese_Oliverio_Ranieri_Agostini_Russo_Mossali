import Link from 'next/link';
import NavLink from "./nav-link";
import Image  from "next/image";
import logoImg from '@/images/ITSLogo.jpeg';
import styles from '@/components/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo} href="/">
                <Image src={logoImg} alt="ITS Incom" priority />
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink href="/corsi">Login</NavLink></li>
                        <li><Link href="/register" className={styles.link}><button className={styles.registerButton}>Registrati</button></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};