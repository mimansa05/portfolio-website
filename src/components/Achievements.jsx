import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import styles from './Achievements.module.css';

const awards = [
  {
    title: 'Google BigCode 2026',
    detail: 'Shortlisted for the programme.',
  },
  {
    title: 'Flipkart GRiD 8.0',
    detail: 'Qualified for Round 3 of the national-level challenge.',
  },
  {
    title: 'ISRO Student Outreach',
    detail:
      'Selected for the programme conducted by the Indian Institute of Remote Sensing, Dehradun.',
  },
  {
    title: 'CodeForge Hackathon',
    detail: 'Finished in the top 5 against more than 50 competing teams.',
  },
  {
    title: 'Algothon Hackathon',
    detail: 'Runner-Up, recognised for innovative problem-solving.',
  },
  {
    title: 'LeetCode',
    detail:
      '500+ problems solved across complex algorithms, at a contest rating of 1620.',
  },
  {
    title: 'Open Source',
    detail:
      'Active GitHub contributor shipping bug fixes, feature updates and performance work.',
  },
];

const tones = ['crimson', 'teal', 'mustard'];

const Achievements = () => (
  <Slide id="achievements" page="07" nextHref="#contact">
    <div className={styles.head}>
      <h2 className="stack stackCenter">
        <span className="script">key</span>
        <span className="display">Achievements</span>
      </h2>
      <p className="lead leadCenter">
        Competitions, programmes and the practice that runs underneath all of
        it.
      </p>
    </div>

    <hr className={`hr ${styles.rule}`} />

    <ol className={styles.list}>
      {awards.map((award, i) => (
        <motion.li
          key={award.title}
          className={`plate ${styles.item}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: (i % 3) * 0.07, duration: 0.42 }}
        >
          <span className={`${styles.num} ${styles[tones[i % tones.length]]}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className={styles.text}>
            <h3 className={styles.title}>{award.title}</h3>
            <p className={styles.detail}>{award.detail}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  </Slide>
);

export default Achievements;
