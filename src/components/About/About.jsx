import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
              src={getImageUrl("about/me.jpg")} 
              alt="Me Sitting with a laptop" 
              className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/uiIcon.png")} 
                        alt="College Icon" />
                    <div className={styles.aboutItemText}>
                        <h2>IIT Bhubaneswar</h2>
                        <p>Dual Degree, Civil & Structural Engineering</p>
                        <h3>CGPA - 8.67/10</h3>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="Server Icon" />
                    <div className={styles.aboutItemText}>
                        <h2>AUTHOR</h2>
                        <p>Published two chapters in the book 
                            <a href="https://pubs.acs.org/doi/book/10.1021/bk-2024-1471">“Eco-Friendly Supercapacitors”</a> (ACS Publication) & 
                            <a href="https://www.google.co.in/books/edition/Fracture_Behavior_of_Nanocomposites_and/bcPR0AEACAAJ?hl=en">“Fracture Behavior of
                        Nanocomposites and Reinforced Laminated Structures”</a> (Springer Publication)</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h2>INVENTOR</h2>
                        <p>Applied for a patent through Company Confidential for "An Artificial Intelligence Assisted Predictive and Strategic
                        Diagnosis Power Center for Battery Operated Electric Vehicles", currently pending review by patent lawyers.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
}
