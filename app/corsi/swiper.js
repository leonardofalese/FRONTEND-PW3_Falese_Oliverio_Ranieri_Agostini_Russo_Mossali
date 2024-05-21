'use client';
 
import Image from 'next/image';
import styles from './swiper.module.css';
 
import Image1 from '@/images/Image1.jpeg';
import Image2 from '@/images/Image2.jpeg';
import Image3 from '@/images/Image3.jpeg';
 
 
import { useEffect, useState } from 'react';
 
const images = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
  ];
 
export default function Swiper() {
  // DA SISTEMARE NON FUNZIONA IN AUTOMATICO
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
          );
        }, 5000);
   
        return () => clearInterval(interval);
      }, []);
 
    return (
        <section className={styles.container}>
            <div className={styles.sliderWrapper}>
                <div className={styles.slider}>
                    <div id="slide-1">
                    <Image src={Image1} />
                    </div>
                    <div id="slide-2">
                    <Image src={Image2} />
                    </div>
                    <div id="slide-3">
                    <Image src={Image3} />
                    </div>
                </div>
                <div className={styles.sliderNav}>
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div>
            </div>
        </section>
    );
}