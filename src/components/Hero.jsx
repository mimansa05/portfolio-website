import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, User, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      {/* Background Gradient Orbs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Side: Text Content */}
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={`badge ${styles.badge}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mimansa Sharma | Backend Developer Intern | 9.4 CGPA
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Building backend systems. <br />
            Solving complex problems. <span className="text-gradient">Creating impact.</span>
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I’m a Computer Science undergraduate at BMS College of Engineering with hands-on experience in Java, Spring Boot, REST APIs, SQL, Docker, AWS, Redis, and Kafka. I enjoy building scalable, reliable systems and have solved 500+ problems on LeetCode with a strong foundation in DSA, OOP, DBMS, OS, and computer networks.
          </motion.p>

          <motion.div 
            className={styles.actionBtns}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">
              Resume PDF <Download size={18} />
            </a>
          </motion.div>

          <motion.div 
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/mimansa05" target="_blank" rel="noreferrer" className={styles.socialIcon}><Code size={20} /> <span className={styles.socialText}>GitHub</span></a>
            <a href="https://www.linkedin.com/in/mimansa-sharma-806459268/" target="_blank" rel="noreferrer" className={styles.socialIcon}><User size={20} /> <span className={styles.socialText}>LinkedIn</span></a>
            <a href="mailto:mimansasharma308@gmail.com" className={styles.socialIcon}><Mail size={20} /> <span className={styles.socialText}>Email</span></a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img src="/profile.png" alt="Mimansa Sharma" className={styles.profileImage} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
