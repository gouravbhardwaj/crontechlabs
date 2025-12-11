import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

