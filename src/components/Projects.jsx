import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "OrbitMQ",
    description: "A custom TCP/NIO messaging system with a length-prefixed binary protocol, append-only log storage, leader-follower replication, ISR acknowledgements, and consumer-group offset tracking.",
    image: "/orbitmq.svg",
    tech: ["Java", "TCP/NIO", "Gradle", "JUnit"],
    github: "https://github.com/mimansa05/OrbitMQ",
    live: "#"
  },
  {
    title: "Trace360",
    description: "A real-time logistics tracking platform with live map-based package tracking, GPS updates, and WebSocket-powered sub-second location refresh for end users.",
    image: "/Trace360.png",
    tech: ["Spring Boot", "React", "WebSocket", "JWT", "MySQL/PostgreSQL"],
    github: "https://github.com/mimansa05",
    live: "https://trace360.vercel.app"
  },
  {
    title: "FinArena",
    description: "A gamified financial literacy platform that combines learning modules, quizzes, and interactive games to help users understand money management and financial decision-making.",
    image: "/finarena.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/mimansa05",
    live: "#"
  },
  {
    title: "FarmSync",
    description: "An agricultural analytics platform focused on expense tracking, farmer insights, and data visualization to improve efficiency for smallholder farming operations.",
    image: "/farmsync.png",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com/mimansa05",
    live: "https://farm-sync123.vercel.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A selection of my recent full-stack and backend engineering work.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${styles.card} glass`}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href={project.github} className={styles.iconLink}><Code size={20} /></a>
                    <a href={project.live} className={styles.iconLink}><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <Code className={styles.projectIcon} />
                  <h3>{project.title}</h3>
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
