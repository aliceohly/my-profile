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
              Alice is a software developer who has passion for coding and
              problem solving, with both frontend and backend experience across
              different projects.
            </p>
          </div>
          <div className={styles.aboutItemFromBot}>
            <p>
              She is a fast learner, responsible, and always up for a
              collaborative challenge!
            </p>
          </div>
          <div className={styles.aboutItemFromThem}>
            <p>What is her hobby?</p>
          </div>
          <div className={styles.aboutItemFromBot}>
            <p>
              Alice enjoys doing yoga and travelling. Her favourite drama is
              Prison Break.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
