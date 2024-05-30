import Link from 'next/link'
import Image from "next/image"

import logoImg from '@/public/images/ITSLogo.jpeg'
import admin from '@/public/images/Admin.jpeg'

import styles from '@/app/candidatureAmministratore/components/header.module.css'

export default function Header() {

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/logout', {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Response:', response);

            if (response.ok) {
                console.log('Logout successful');
                window.location.href = '/login';
            } else {
                console.log(response);
                const errorMessage = await response.text();
                console.log('Logout failed', response.status, errorMessage);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="ITS Incom" priority />
                </Link>
                <div className={styles.dropdown}>
                    <button><Link href={'/amministratore'}><Image className={styles.admin} src={admin} alt="Admin" /></Link></button>
                    <div className={styles.content}>
                        <Link className={styles.link} href="/utenti"><p className={styles.p}>Utenti</p></Link>
                        <hr className={styles.hr}></hr>
                        <Link className={styles.link} href="/corsiAmministratore"><p className={styles.p}>Corsi</p></Link>
                        <hr className={styles.hr}></hr>
                        <Link className={styles.link} href="/testAmministratore"><p className={styles.p}>Test</p></Link>
                        <hr className={styles.hr}></hr>
                        <Link className={styles.link} href=""><p className={styles.p} onClick={handleLogout}>Logout</p></Link>
                    </div>
                </div>
            </div >
        </header >
    );
}