import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TOTAL = '08';

/**
 * One deck slide: rule-bounded header, body, rule-bounded footer.
 * `topRight` accepts "dots" (the three-dot motif) or a page marker.
 */
const Slide = ({
  id,
  brand = 'Mimansa Sharma',
  page,
  topRight = 'page',
  footLeft = 'mimansasharma308@gmail.com',
  footRight = 'arrow',
  nextHref,
  className = '',
  children,
}) => (
  <motion.section
    id={id}
    className={`slide ${className}`}
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
  >
    <div className="slideTop">
      <span className="slideBrand">{brand}</span>
      {topRight === 'dots' ? (
        <span className="dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      ) : (
        <span className="pageNo">
          Page {page} of {TOTAL}
        </span>
      )}
    </div>

    <div className="slideBody">{children}</div>

    <div className="slideFoot">
      <span>{footLeft}</span>
      {footRight === 'arrow' ? (
        <a
          href={nextHref || '#contact'}
          className="footArrow"
          aria-label="Go to the next section"
        >
          <ArrowRight size={22} strokeWidth={1.6} />
        </a>
      ) : (
        <span className="pageNo">{footRight}</span>
      )}
    </div>
  </motion.section>
);

export default Slide;
