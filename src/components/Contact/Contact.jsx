import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:20ce02003@iitbbs.ac.in">20ce02003@iitbbs.ac.in</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/samarthya-goyal-9013a0232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/samarthyagoyal
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/Samarthya2001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Samarthya2001
          </a>
        </li>
      </ul>
    </footer>
  );
};
