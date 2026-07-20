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
              <span className={styles.dateBadge}>Jul 2026 – Present</span>
              <h3 className={styles.itemTitle}>Backend Developer Intern · OneTappe</h3>
              
              <ul className={styles.list}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Developing scalable REST APIs with Java and Spring Boot using layered architecture and Agile delivery.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Optimizing PostgreSQL, MySQL, and MongoDB through schema design, indexing, and query tuning.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Building event-driven backend components with Kafka and RabbitMQ for asynchronous workflows.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Implementing JWT authentication, Redis caching, and containerized deployments with Docker and AWS.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.timelineItem}
          >
            <div className={styles.iconCircle}>
              <Briefcase size={20} />
            </div>
            <div className={`glass ${styles.itemContent}`}>
              <span className={styles.dateBadge}>Feb 2026 – Apr 2026</span>
              <h3 className={styles.itemTitle}>Java Developer Intern · Infyntrek Systems</h3>
              
              <ul className={styles.list}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Developed and maintained REST APIs using Java and Spring Boot in an Agile production environment.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Refactored backend modules to improve maintainability, readability, and debugging efficiency.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Collaborated through Git-based workflows across sprint cycles with cross-functional teams.</li>
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
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Solved 500+ DSA problems on LeetCode with a contest rating of 1578.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Contributed to open-source projects through GitHub pull requests and code improvements.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Finished Top 5 at CodeForge among 50+ teams and secured Runner-Up at Algothon.</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Selected for an ISRO student outreach programme conducted by IIRS, Dehradun.</li>
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
