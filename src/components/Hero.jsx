import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Slide from './Slide';
import styles from './Hero.module.css';

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.09, duration: 0.6, ease: [0.2, 0.7, 0.3, 1] },
  }),
};

const Hero = () => (
  <Slide
    id="home"
    brand="Software Engineer"
    topRight="dots"
    footLeft="mimansasharma308@gmail.com"
    nextHref="#contents"
    className={styles.cover}
  >
    <div className={styles.inner}>
      <motion.h1
        className="stack stackCenter"
        variants={rise}
        initial="hidden"
        animate="visible"
      >
        <span className="script">hello, i&apos;m</span>
        <span className={`display ${styles.name}`}>Mimansa Sharma</span>
      </motion.h1>

      <motion.p
        className="boxCaption"
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Software Engineer &middot; Bangalore
      </motion.p>

      <motion.p
        className="lead leadCenter"
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        Computer Science undergraduate at B.M.S. College of Engineering who
        builds software end to end — APIs and distributed services, the React
        interfaces on top of them, and the data layer underneath. 500+ problems
        solved, and a CS foundation to match.
      </motion.p>

      <motion.div
        className={styles.actions}
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <a href="#projects" className="blockBtn bCrimson btnAuto">
          View Projects <ArrowRight size={17} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="blockBtn bTeal btnAuto"
        >
          Resume PDF <Download size={17} />
        </a>
        <a href="#contact" className="blockBtn bMustard btnAuto">
          Get in Touch
        </a>
      </motion.div>

      <motion.div
        className={styles.socials}
        variants={rise}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <a
          href="https://github.com/mimansa05"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <GithubIcon size={17} /> GitHub
        </a>
        <span className={styles.sep} aria-hidden="true" />
        <a
          href="https://www.linkedin.com/in/mimansa-sharma-806459268/"
          target="_blank"
          rel="noreferrer"
          className={styles.social}
        >
          <LinkedinIcon size={17} /> LinkedIn
        </a>
        <span className={styles.sep} aria-hidden="true" />
        <a href="mailto:mimansasharma308@gmail.com" className={styles.social}>
          <Mail size={17} /> Email
        </a>
      </motion.div>
    </div>
  </Slide>
);

export default Hero;
