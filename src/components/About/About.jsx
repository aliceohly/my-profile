import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.body}>
        <img
          src={getImageUrl("about/aboutImage.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutContent}>
          <div className={styles.aboutItemFromThem}>
            <p>Tell me about Alice</p>
          </div>
          <div className={styles.aboutItemFromBot}>
            <p>
              Alice is a software engineer with 2 years working experience. She
              is skillful in front-end technologies and recently dwell in
              backend. She has joined multiple projects from building AI chatbot
              to xx. She is a great team player and has passion in coding and
              problem solving.
            </p>
          </div>
          <div className={styles.aboutItemFromThem}>
            <p>What else?</p>
          </div>
          <div className={styles.aboutItemFromBot}>
            <p>
              Alice enjoys doing yoga and doing trip planning. She also
              previously worked as an accountant for 3 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
