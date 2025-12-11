import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ name, role, company, content }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.quoteIcon}>&apos;&apos;</div>
      <p className={styles.content}>{content}</p>
      <div className={styles.author}>
        <div className={styles.authorInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

