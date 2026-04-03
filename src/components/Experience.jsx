import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Rocket, CheckCircle2 } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <h2 className="section-title">
            Journey & <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional internship, major achievements, and early exposure to tech.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.iconCircle}>
              <Briefcase size={20} />
            </div>
            <div className={`glass ${styles.itemContent}`}>
              <span className={styles.dateBadge}>Feb 2026 – April 2026</span>
              <h3 className={styles.itemTitle}>Java Backend Developer Intern</h3>
              
              <ul className={styles.list}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Working on developing and testing REST APIs using Java and Spring Boot.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Improving backend logic, debugging, and performance optimization.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Gaining hands-on experience with real-world development workflows and SDLC.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Collaborating using Git in an agile development environment.</li>
              </ul>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.iconCircle}>
              <Trophy size={20} />
            </div>
            <div className={`glass ${styles.itemContent}`}>
              <span className={styles.categoryBadge}>Achievements</span>
              
              <ul className={styles.list}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Solved 200+ problems on LeetCode, strengthening problem-solving and DSA skills.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Participated in multiple hackathons, gaining experience in teamwork and rapid development.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Secured Runner-Up position in a competitive hackathon.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Shortlisted among top teams in coding competitions.</li>
              </ul>
            </div>
          </motion.div>

          {/* Early Exposure Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.iconCircle}>
              <Rocket size={20} />
            </div>
            <div className={`glass ${styles.itemContent}`}>
              <span className={styles.categoryBadge}>Early Exposure</span>
              
              <ul className={styles.list}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Selected for an ISRO-verified Remote Sensing program during school, gaining early exposure to space technology and scientific applications.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
