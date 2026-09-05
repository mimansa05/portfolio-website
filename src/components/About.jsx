import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import styles from './About.module.css';

const stats = [
  { value: '500+', label: 'LeetCode Problems' },
  { value: '1620', label: 'Contest Rating' },
  { value: '9.34', label: 'CGPA / 10.0' },
  { value: '02', label: 'Engineering Internships' },
];

const About = () => (
  <Slide id="about" page="03" nextHref="#skills">
    <div className={styles.grid}>
      <div className={styles.left}>
        <h2 className="stack">
          <span className="script">about</span>
          <span className="display">Me</span>
        </h2>

        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.stat}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className={styles.education}>
          <span className="kicker">Education</span>
          <h3 className={styles.eduTitle}>B.M.S. College of Engineering</h3>
          <p className={styles.eduMeta}>
            B.Tech, Computer Science &amp; Engineering &middot; Expected 2028
            <br />
            Currently in the 5th semester &middot; Bangalore, India
          </p>
        </div>
      </div>

      <motion.figure
        className={`plate ${styles.plate}`}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <img src="/profile.jpg" alt="Mimansa Sharma" className={styles.photo} />
        <figcaption className={styles.caption}>
          I build software across the stack — React interfaces, REST APIs in
          Java and Spring Boot, and the storage and messaging underneath with
          PostgreSQL, Kafka and Redis, shipped in Docker on AWS. I like problems
          where the design matters as much as the code, and I keep the
          fundamentals sharp: DSA, OOP, operating systems, DBMS and computer
          networks, across 500+ solved problems.
        </figcaption>
      </motion.figure>
    </div>
  </Slide>
);

export default About;
