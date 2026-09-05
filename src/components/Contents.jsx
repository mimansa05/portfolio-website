import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import styles from './Contents.module.css';

const entries = [
  { label: 'About Me', href: '#about', tone: 'bCrimson' },
  { label: 'Skills', href: '#skills', tone: 'bTeal' },
  { label: 'Experience', href: '#experience', tone: 'bMustard' },
  { label: 'Projects', href: '#projects', tone: 'bMustard' },
  { label: 'Achievements', href: '#achievements', tone: 'bCrimson' },
  { label: 'Contact', href: '#contact', tone: 'bTeal' },
];

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Contents = () => (
  <Slide
    id="contents"
    page="02"
    footLeft="mimansasharma308@gmail.com"
    nextHref="#about"
  >
    <div className={styles.head}>
      <h2 className="stack stackCenter">
        <span className="script">table of</span>
        <span className="display">Content</span>
      </h2>
      <p className="lead leadCenter">
        Eight slides: who I am, what I build with, where I have worked, the
        software I have shipped, and how to reach me.
      </p>
    </div>

    <hr className={`hr ${styles.rule}`} />

    <motion.nav
      className={styles.grid}
      variants={list}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label="Table of contents"
    >
      {entries.map((entry) => (
        <motion.a
          key={entry.label}
          href={entry.href}
          className={`blockBtn ${entry.tone}`}
          variants={item}
        >
          {entry.label}
        </motion.a>
      ))}
    </motion.nav>
  </Slide>
);

export default Contents;
