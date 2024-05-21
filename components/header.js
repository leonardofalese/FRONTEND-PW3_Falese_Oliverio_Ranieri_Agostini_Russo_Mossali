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
            ITS Incom
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li><NavLink href="/about">About</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        <li><NavLink href="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};