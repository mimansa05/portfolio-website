import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, BookOpen } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className={styles.contentGrid}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${styles.card} glass`}
          >
            <div className={styles.iconWrapper}>
              <User size={24} />
            </div>
            <h3>My Background</h3>
            <p>
              I am a Computer Science undergraduate in my fourth semester at BMS College of Engineering, Bangalore, with a strong academic record (CGPA: 9.4/10). My academic foundation is reinforced by practical internship experience in backend development and system design.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className={`${styles.card} glass`}
          >
            <div className={styles.iconWrapper}>
              <Code size={24} />
            </div>
            <h3>Problem Solving & Tech</h3>
            <p>
              I have a strong grip on Data Structures & Algorithms and have solved 500+ problems on LeetCode, with a contest rating of 1578. I enjoy exploring system design concepts, distributed systems, and writing efficient, production-ready code.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className={`${styles.card} glass`}
          >
            <div className={styles.iconWrapper}>
              <BookOpen size={24} />
            </div>
            <h3>Professional Drive</h3>
            <p>
              Currently, I am building industry-ready backend experience as a Backend Developer Intern at OneTappe, where I work on scalable APIs, database optimization, event-driven systems, and cloud deployment. I’m always eager to learn, contribute, and grow in impactful engineering teams.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
