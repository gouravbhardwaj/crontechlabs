import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Building Smart Digital Solutions
            <span className={styles.highlight}> for Modern Businesses</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We deliver end-to-end technology solutions that drive growth and
            innovation. From full-stack development to Salesforce consulting,
            we&apos;re your trusted technology partner.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Get Started
            </Link>
            <Link href="/services" className={`${styles.btn} ${styles.btnSecondary}`}>
              Our Services
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/4804443.jpg"
            alt="Digital Solutions"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

