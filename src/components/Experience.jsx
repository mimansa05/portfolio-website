import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import styles from './Experience.module.css';

const roles = [
  {
    company: 'OneTappe',
    title: 'Backend Developer Intern',
    period: 'Jul 2026 — Present',
    place: 'Bangalore, India',
    tone: 'crimson',
    points: [
      'Engineered robust REST API services in Java and Spring Boot, following layered architectural patterns and systematic server design.',
      'Contributed to the AI chatbot infrastructure — intent recognition, complex request handling and optimised conversational response management.',
      'Architected the server-side environment for a specialised OneTappe web platform, orchestrating API integration and core modular components.',
      'Worked across PostgreSQL, MySQL and NoSQL stores with JWT and Redis; handled containerisation and production deployment via Docker.',
    ],
  },
  {
    company: 'Infyntrek Systems',
    title: 'Java Developer Intern',
    period: 'Feb 2026 — Apr 2026',
    place: 'Bangalore, India',
    tone: 'teal',
    points: [
      'Built and sustained scalable RESTful services with Java and Spring Boot, driving backend operations for the FarmSync management ecosystem and the Trace360 tracking architecture.',
      'Constructed core server-side modules for FarmSync and spearheaded live tracking for Trace360, focusing on API integration and high-concurrency data management.',
      'Improved system-wide debugging and maintainability through systematic refactoring; collaborated cross-functionally through Git-driven Agile workflows.',
    ],
  },
];

const Experience = () => (
  <Slide id="experience" page="05" nextHref="#projects">
    <div className={styles.head}>
      <h2 className="stack stackCenter">
        <span className="script">work</span>
        <span className="display">Experience</span>
      </h2>
      <p className="lead leadCenter">
        Two engineering internships, both spent on software other people
        depended on — real APIs, data layers and deployments rather than demos.
      </p>
    </div>

    <hr className={`hr ${styles.rule}`} />

    <div className={styles.list}>
      {roles.map((role, i) => (
        <motion.article
          key={role.company}
          className={`plate ${styles.card}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <header className={`${styles.tab} ${styles[role.tone]}`}>
            <span className={styles.period}>{role.period}</span>
            <span className={styles.place}>{role.place}</span>
          </header>

          <div className={styles.body}>
            <h3 className={styles.company}>{role.company}</h3>
            <p className={styles.role}>{role.title}</p>
            <ul className={styles.points}>
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </Slide>
);

export default Experience;
