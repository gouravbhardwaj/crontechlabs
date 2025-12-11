import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Crontech Labs</h3>
            <p className={styles.footerTagline}>
              Building smart digital solutions for modern businesses
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>Full Stack Development</li>
              <li>Salesforce Development</li>
              <li>Support & Maintenance</li>
              <li>QA & Testing</li>
              <li>Product Engineering</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerLinks}>
              <li>Email: contactus@crontechlabs.com</li>
             
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Crontech Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

