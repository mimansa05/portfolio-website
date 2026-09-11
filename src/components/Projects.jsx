import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import Slide from './Slide';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'OrbitMQ',
    tagline: 'A message broker written from the socket up',
    tone: 'crimson',
    image: '/orbitmq.svg',
    tech: ['Java', 'TCP/NIO', 'Gradle', 'JUnit'],
    github: 'https://github.com/mimansa05/orbit-mq',
    live: null,
    points: [
      'Designed a custom binary protocol using length-prefixing over TCP for low-latency producer and consumer exchange, bypassing standard overhead.',
      'Built a partitioned storage engine on append-only logs with offset indexing and persistent segments for high-durability messaging.',
      'Orchestrated fault-tolerant leader-follower replication with automatic failover and ISR-style acknowledgement logic.',
      'Added consumer group offset management for at-least-once delivery and parallel consumption progress tracking.',
    ],
  },
  {
    title: 'FailSafe-AI',
    tagline: 'Safety benchmarking for AI agents',
    tone: 'teal',
    image: '/failsafe.jpeg',
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/mimansa05/FAIL_SAFE_AI',
    live: null,
    points: [
      'Engineered a safety benchmarking framework for AI agents, prioritising automated behaviour assessment and adversarial threat benchmarking.',
      'Built backend infrastructure for multi-turn testing cycles, real-time execution tracing and automated diagnostic analysis.',
      'Constructed an integrated dashboard for safety performance metrics, agent response patterns and live scenario progression.',
      'Delivered safety audits and data-driven insights to mitigate vulnerabilities and improve system-wide reliability.',
    ],
  },
  {
    title: 'Trace360',
    tagline: 'Live logistics tracking, sub-second',
    tone: 'mustard',
    image: '/Trace360.png',
    tech: ['Spring Boot', 'React', 'WebSocket', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/mimansa05/trace360',
    live: 'https://trace360.vercel.app',
    points: [
      'Real-time logistics platform with live map-based package tracking and continuous GPS updates.',
      'WebSocket-powered location refresh that lands under a second for end users.',
      'High-concurrency data handling across the tracking pipeline, built during the Infyntrek internship.',
    ],
  },
  {
    title: 'FarmSync',
    tagline: 'Analytics for smallholder farming',
    tone: 'crimson',
    image: '/farmsync.png',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/mimansa05/FarmSync123',
    live: 'https://farm-sync123.vercel.app',
    points: [
      'Agricultural analytics platform covering expense tracking and farmer insights.',
      'Core server-side modules and REST APIs powering the management ecosystem.',
      'Data visualisation aimed at improving day-to-day efficiency for smallholder operations.',
    ],
  },
  {
    title: 'FinArena',
    tagline: 'Financial literacy, gamified',
    tone: 'teal',
    image: '/finarena.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/mimansa05/finarena',
    live: null,
    points: [
      'Gamified financial literacy platform combining learning modules, quizzes and interactive games.',
      'Progress tracking and scoring that reinforce money-management concepts as users play.',
    ],
  },
];

const tones = ['bCrimson', 'bTeal', 'bMustard'];

const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <Slide id="projects" page="06" nextHref="#achievements">
      <div className={styles.head}>
        <h2 className="stack stackCenter">
          <span className="script">project</span>
          <span className="display">Portfolio</span>
        </h2>
        <p className="lead leadCenter">
          Full-stack products and low-level systems, each designed and shipped
          end to end. Pick one to read what it does and how it is put together.
        </p>
      </div>

      <hr className={`hr ${styles.rule}`} />

      <div className={styles.tabs} role="tablist" aria-label="Projects">
        {projects.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls="project-panel"
            className={`blockBtn ${
              active === i ? tones[i % tones.length] : 'bPlain'
            } ${styles.tab}`}
            onClick={() => setActive(i)}
          >
            {String(i + 1).padStart(2, '0')} {item.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.title}
          id="project-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className={styles.panel}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32 }}
        >
          <figure className={`plate ${styles.shot} ${styles[project.tone]}`}>
            <img src={project.image} alt={`${project.title} preview`} />
          </figure>

          <div className={styles.detail}>
            <span className="kicker">{project.tagline}</span>
            <h3 className={styles.title}>{project.title}</h3>

            <div className={styles.chips}>
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <ul className={styles.points}>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="blockBtn bPlain btnAuto"
              >
                <GithubIcon size={16} /> Source
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="blockBtn bCrimson btnAuto"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Slide>
  );
};

export default Projects;
