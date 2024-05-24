import Link from 'next/link';
import Image from "next/image";
import logoImg from '@/public/images/ITSLogo.jpeg';
import admin from '@/public/images/Admin.jpeg';
import styles from '@/app/amministratore/components/header.module.css';


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="ITS Incom" priority />
                </Link>
                    <div className={styles.dropdown}>
                        <Image className={styles.admin} src={admin} />
                        <div className={styles.dropdownContent}>
                            <Link className={styles.link} href={'/login'}><p className={styles.p}>Logout</p></Link>
                        </div>
                    </div>
                </div>
        </header>
    );
};