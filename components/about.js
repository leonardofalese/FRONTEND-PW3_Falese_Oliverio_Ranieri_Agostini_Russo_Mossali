import styles from '@/components/about.module.css';
import Image from "next/image";
import img from '@/public/images/ImageITS2.jpeg';

export default function About() {
    return (
        <section className={styles.about}>
            <h2 className={styles.h2}>Cosa ti offriamo?</h2>
            <div className={styles.container}>
                <p className={styles.p}>La Fondazione ITS INCOM, Tecnologie dell’INformazione e della COMunicazione, offre formazione post-diploma rivolta ai futuri professionisti dell’informatica e programmazione, reti e infrastrutture, digital marketing, comunicazione multichannel, IoT e industria 4.0 e data science. Collaboriamo quotidianamente con oltre 180 aziende del territorio e favoriamo la crescita degli allievi attraverso esperienze professionali che misurano e migliorano le loro abilità, i loro talenti, con un unico obiettivo: l’inserimento lavorativo qualificato.</p>
            </div>
            <div className={styles.containerImage}>
                <Image className={styles.image} src={img}></Image>
            </div>
        </section>

    );
};