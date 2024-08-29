import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Samarthya</h1>
            <p className={styles.description}>I am a Dual Degree Civil Engineering Student with with a strong foundation in 
                engineering principles, passion for Data Science and Machine Learning. 
                Reach out if you'd like to learn more!
                </p>
                <a href="mailto:20ce02003@iitbbs.ac.in" className={styles.contactBtn}>
                  Contact Me
                </a>
            </div>
            <img src={getImageUrl("hero/about.jpg")} 
                 alt="Image of me" 
                 className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
  );
};
