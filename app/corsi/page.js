'use client';


import Header from '@/components/header'
import Footer from '@/components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './page.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import banner from '@/public/images/banner.jpeg';
import itsincom from '@/public/images/itsincom.jpeg';
import immagine4 from '@/public/images/Image4.jpeg';
import strettamano from '@/public/images/strettamano.jpeg';
 
export default function Page() {
    return (
        <body>
            <Header />
            <div className={classes.imageContainer}>
                <Image src={immagine4} className={classes.immagine4} alt="Immagine 4"  />
            </div>
 
            <div className={classes.h2}>
                <div>Formazione di Eccellenza nel Mondo Digitale:</div>
            </div>
            <div className={classes.h3}>
                <div>Scopri i nostri corsi!</div>
            </div>
            <div className={classes.h4}>
                <h4 className={classes.h4}>ITS INCOM, il centro di eccellenza per la formazione post-diploma nelle Tecnologie dell'Informazione </h4>
            </div>
            <div className={classes.comunicazione}>
                <div>e della Comunicazione. Scopri i nostri corsi innovativi in Web Development, Cloud Development,</div>
            </div>
            <div className={classes.collaboriamo}>
                <div>Big Data, Web Design e molte altre specializzazioni. Collaboriamo con oltre 180 aziende del territorio </div>
            </div>
            <div className={classes.offrirti}>
                <div>per offrirti esperienze pratiche e un percorso formativo che ti preparerà al meglio per una carriera </div>
            </div>
 
            <div className={classes.imageContainer}>
                <Image src={strettamano} className={classes.strettamano} alt="strettamano" />
            </div>
 
            <div className={classes.offerta}>
                <div>L'offerta formativa dell’ITS INCOM è pensata per aiutare i giovani a costruire il proprio</div>
            </div>
 
            <div className={classes.futuro}>
                <div>futuro. Insieme a noi potrai trasformare la tua passione e le tue attitudini personali in</div>
            </div>
 
            <div className={classes.futuro}>
                <div>in competenze tecniche specializzate. Inizia a fare il primo passo verso la tua carriera:</div>
            </div>
 
            <div className={classes.consulta}>
                <div>consulta l’elenco completo dei corsi e trova quello che fa per te.</div>
            </div>
 
            {/* Area programmazione */}
            <div className={classes.areaprogrammazione1}>
                <div>Area programmazione</div>
            </div>
 
            <div className={classes.cardCountainer}>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://elements-cover-images-0.imgix.net/ae8feb76-5e5f-4817-bf54-cf2091fc806e?auto=compress%2Cformat&w=900&fit=max&s=ca57a0a4023f132b4a6c2f3367a4d17d" alt="OOOOOOOOOO" layout="responsive" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Web Developer</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un programmatore Full stack in grado di sviluppare applicazioni e software frontend e backend, usando i database e tecniche di DevOps e User experience.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://360degreecloud.com/wp-content/uploads/2021/11/UX-Service-Cloud-Developer.png" alt="Card image cap"  />
                    <h5 className={`card-title ${classes.title1}`}>Corso Cloud Developer</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un esperto in progettazione e sviluppo di software e ambienti digitali complessi, capace di seguire ogni fase della creazione di soluzioni in cloud.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://www.springboard.com/blog/wp-content/uploads/2021/08/what-does-a-data-analyst-do-2022-career-guide.png" alt="" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Data Analyst</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un esperto nella gestione e analisi dei dati strutturati attraverso concetti di programmazione (Python) per scalare strategie e implementare il machine learning.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
            </div>
 
            {/* Area comunicazione */}
            <div className={classes.areacomunicazione}>
                <div>Area comunicazione</div>
            </div>
 
            <div className={classes.cardCountainer}>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://www.myaccounting.it/my-accounting/uploads/2021/01/PARTITA-IVA-WEB-DESIGNER.png" alt="OOOOOOOOOO" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Web Designer</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un esperto nella progettazione e realizzazione di soluzioni di comunicazione a 360°, dal concept creativo all'elaborazione di contenuti digitali.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg" alt="Card image cap" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Digital Marketing Manager</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un professionista capace di pianificare e implementare strategie di marketing digitale per i new media, gestire contenuti, campagne e monitorare i risultati.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://static.24orebs.com/YZ24015000.png.webp" alt="" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Sales Management</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un professionista capace di definire il piano commerciale aziendale, individuando gli obiettivi di vendita, le strategie per raggiungerli e i canali più adeguati.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
            </div>
 
            {/* Area Nuove Tecnologie */}
            <div className={classes.areacomunicazione}>
                <div>Area Nuove Tecnologie</div>
            </div>
 
            <div className={classes.cardCountainer}>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://www.click-academy.it/wp-content/uploads/2022/07/web-designer-e-graphic-designer.jpg.webp" alt="OOOOOOOOOO" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Web Designer</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un esperto nella progettazione e realizzazione di soluzioni di comunicazione a 360°, dal concept creativo all'elaborazione di contenuti digitali.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://dnewpydm90vfx.cloudfront.net/wp-content/uploads/2019/03/Networking-e-sicurezza.jpg" alt="Card image cap" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Networking/Security</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un professionista capace di pianificare e implementare strategie di marketing digitale per i new media, gestire contenuti, campagne e monitorare i risultati.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
                <div className={classNames(classes.cardProva, "card")} style={{ width: '100' }}>
                    <img className={classNames(classes.cardImmagine, "card-img-topS")} src="https://www.angi.tech/wp-content/uploads/2020/10/Internet-of-Things.jpg" alt="" />
                    <h5 className={`card-title ${classes.title1}`}>Corso Internet of Things</h5>
                    <div className="card-body">
                        <p className={`card-text ${classes.text100}`}>Diventerai un professionista capace di definire il piano commerciale aziendale, individuando gli obiettivi di vendita, le strategie per raggiungerli e i canali più adeguati.</p>
                        <a href="#" className="btn btn-primary">SCOPRI IL CORSO</a>
                    </div>
                </div>
            </div>
 
            <div className={classes.imageContainer}>
                <Image src={banner} className={classes.banner} alt="banner" />
            </div>
 
            <div className={classes.trova}>
                <div>Trova il corso che fa per te</div>
            </div>
 
            <div className={classes.scelta}>
                <div>La scelta di un corso è un passo importante nella propria vita da studente. Guidiamo i ragazzi, ma anche le famiglie e le</div>
            </div>
 
            <div className={classes.scuola}>
                <div>scuole, nell’indirizzare ogni talento verso il percorso di studi più attinente.</div>
            </div>
 
            <div className={classes.imageContainer}>
                <Image src={itsincom} className={classes.itsincom} alt="itsincom" />
            </div>
            <Footer />
        </body>
    );
}