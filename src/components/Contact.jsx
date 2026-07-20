import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className={styles.subtitle}>
            Currently looking for new opportunities and open to discussing full-time roles, internships, or exciting projects.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail />
              </div>
              <div>
                <h3>Email Me</h3>
                <p>mimansasharma308@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone />
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+91 74520 66099</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin />
              </div>
              <div>
                <h3>Location</h3>
                <p>Bangalore, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${styles.form} glass`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Let's build something..."></textarea>
            </div>
            
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} CS Portfolio. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
