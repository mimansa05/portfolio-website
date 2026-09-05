import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';
import styles from './Skills.module.css';

const categories = [
  {
    title: 'Languages',
    tone: 'crimson',
    skills: ['Java', 'C', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Core CS',
    tone: 'teal',
    skills: [
      'DSA',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'System Design',
      'Distributed Systems',
    ],
  },
  {
    title: 'Frontend',
    tone: 'mustard',
    skills: ['React', 'JavaScript', 'HTML / CSS', 'REST Integration'],
  },
  {
    title: 'Backend',
    tone: 'crimson',
    skills: [
      'Spring Boot',
      'Node.js',
      'FastAPI',
      'REST APIs',
      'Spring MVC',
      'JPA',
      'JWT Auth',
      'WebSocket',
    ],
  },
  {
    title: 'Databases',
    tone: 'teal',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Database Design',
      'Query Optimization',
    ],
  },
  {
    title: 'Distributed & Messaging',
    tone: 'mustard',
    skills: ['Kafka', 'RabbitMQ', 'Redis', 'TCP/IP'],
  },
  {
    title: 'Cloud & DevOps',
    tone: 'crimson',
    skills: ['AWS', 'Docker', 'Git', 'GitHub'],
  },
  {
    title: 'Tools & Testing',
    tone: 'teal',
    skills: ['JUnit', 'Gradle', 'Maven', 'Postman', 'IntelliJ IDEA', 'VS Code'],
  },
];

const Skills = () => (
  <Slide id="skills" page="04" nextHref="#experience">
    <div className={styles.grid}>
      <div className={styles.intro}>
        <h2 className="stack">
          <span className="script">personal</span>
          <span className="display">Skills</span>
        </h2>
        <p className="lead">
          What I reach for, from the interface down to the storage engine. Most
          fluent in Java and Spring Boot, comfortable in React and Python, and
          deliberate about the computer science underneath all of it.
        </p>
      </div>

      <div className={styles.cards}>
        {categories.map((category, i) => (
          <motion.article
            key={category.title}
            className={`plate ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.45 }}
          >
            <h3 className={`${styles.cardTitle} ${styles[category.tone]}`}>
              {category.title}
            </h3>
            <div className={styles.chips}>
              {category.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Slide>
);

export default Skills;
