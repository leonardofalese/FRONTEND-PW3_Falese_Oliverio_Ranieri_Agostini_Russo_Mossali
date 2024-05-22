'use client'
 
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import Image4 from '@/images/Image4.jpeg'
import Swiper from './swiper'

import Header from '@/components/header';
import Footer from '@/components/footer';

const montserrat = Montserrat({ subsets: ['latin'] })
 
export default function Page() {
    return (
        <body className={montserrat.className}>
            <Header />
            <div className={styles.imageContainer}>
                <Image src={Image4} className={styles.Image4} alt="Immagine 4" />
            </div>
            <Swiper className={styles.swiper}></Swiper>
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Perché scegliere i corsi ITS INCOM</h1>
                    <p className={styles.text}>
                        La Fondazione ITS INCOM, Tecnologie dell’INformazione e della COMunicazione, offre formazione post-diploma rivolta ai futuri professionisti dell’informatica e programmazione, reti e infrastrutture, digital marketing, comunicazione multichannel, IoT e industria 4.0 e data science.
                    </p>
                    <p className={styles.text}>
                        Collaboriamo quotidianamente con oltre 180 aziende del territorio e favoriamo la crescita degli allievi attraverso esperienze professionali che misurano e migliorano le loro abilità, i loro talenti, con un unico obiettivo: l’inserimento lavorativo qualificato.
                    </p>
                </div>
            </div>
            <Footer />
        </body>
    );
}