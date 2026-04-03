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
              I am a second-year Computer Science student currently in my fourth semester at 
              BMS College of Engineering, Bangalore, with a strong academic record (CGPA: 9.4). 
              I am passionate about building scalable software systems and solving real-world problems 
              through efficient and clean code.
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
              I have a strong foundation in Data Structures & Algorithms and actively practice 
              problem-solving, having solved 200+ problems on LeetCode. I enjoy exploring system 
              design concepts and continuously improving my development skills.
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
              Currently, I am gaining industry experience as a Java Backend Developer Intern, where 
              I work on building and optimizing REST APIs using Java and Spring Boot. I am always 
              eager to learn, build, and contribute to impactful tech solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
