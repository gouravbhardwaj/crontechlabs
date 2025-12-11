import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        src="/crontechlabs.png"
        alt="Crontech Labs Logo"
        className={styles.logo}
      />
      <span className={styles.logoText}>Crontech Labs</span>
    </div>
  );
}

