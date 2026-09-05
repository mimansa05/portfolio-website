import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Slide from './Slide';
import styles from './Contact.module.css';

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mimansasharma308@gmail.com',
    href: 'mailto:mimansasharma308@gmail.com',
    tone: 'crimson',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
    tone: 'teal',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || 'someone'}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n--\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:mimansasharma308@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Slide
        id="contact"
        page="08"
        footLeft="Open to software engineering internships and new-grad roles"
        footRight="Thank you"
      >
        <div className={styles.head}>
          <h2 className="stack stackCenter">
            <span className="script">get in</span>
            <span className="display">Touch</span>
          </h2>
          <p className="lead leadCenter">
            Open to software engineering internships and new-grad roles, and
            always up for interesting build problems. The fastest route is
            email, but the form below works too.
          </p>
        </div>

        <hr className={`hr ${styles.rule}`} />

        <div className={styles.grid}>
          <div className={styles.info}>
            {details.map(({ icon: Icon, label, value, href, tone }) => {
              const content = (
                <>
                  <span className={`${styles.iconBox} ${styles[tone]}`}>
                    <Icon size={18} />
                  </span>
                  <span className={styles.infoText}>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a key={label} href={href} className={`plate ${styles.infoCard}`}>
                  {content}
                </a>
              ) : (
                <div key={label} className={`plate ${styles.infoCard}`}>
                  {content}
                </div>
              );
            })}

            <div className={styles.socialRow}>
              <a
                href="https://github.com/mimansa05"
                target="_blank"
                rel="noreferrer"
                className="blockBtn bPlain"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mimansa-sharma-806459268/"
                target="_blank"
                rel="noreferrer"
                className="blockBtn bPlain"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <form className={`plate ${styles.form}`} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Ada Lovelace"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="ada@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                required
                value={form.message}
                onChange={update('message')}
                placeholder="Tell me what you are building."
              />
            </div>

            <button type="submit" className="blockBtn bCrimson">
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </Slide>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Mimansa Sharma</span>
        <span className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>Portfolio &middot; 08 slides</span>
      </footer>
    </>
  );
};

export default Contact;
