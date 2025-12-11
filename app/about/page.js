import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>About Crontech Labs</h1>
          <p className={styles.heroSubtitle}>
            Building smart digital solutions for modern businesses
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <div className={styles.textContent}>
              <p>
                Crontech Labs was founded with a vision to bridge the gap
                between cutting-edge technology and practical business solutions.
                We recognized that many businesses struggle to find technology
                partners who truly understand their needs and can deliver
                end-to-end solutions.
              </p>
              <p>
                Today, we are a trusted technology company offering comprehensive
                product development and digital solutions. Our team of expert
                developers, consultants, and engineers work collaboratively to
                deliver projects that drive real business value.
              </p>
              <p>
                From startups to established enterprises, we have helped
                organizations across various industries transform their digital
                presence, streamline operations, and achieve their business
                goals through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} ${styles.missionSection}`}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To empower businesses with smart, scalable, and innovative
                digital solutions that drive growth, efficiency, and competitive
                advantage. We strive to be a trusted technology partner that
                understands your business and delivers results that matter.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                To be recognized as a leading technology company that transforms
                businesses through innovative digital solutions. We envision a
                future where technology seamlessly integrates with business
                operations, enabling organizations to achieve their full
                potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Leadership Team</h2>
          <p className={styles.sectionSubtitle}>
            Meet the experts leading our mission
          </p>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img
                  src="https://via.placeholder.com/300x300?text=Team+Member+1"
                  alt="Team Member 1"
                />
              </div>
              <h3 className={styles.teamName}>John Smith</h3>
              <p className={styles.teamRole}>Chief Executive Officer</p>
              <p className={styles.teamBio}>
                With over 15 years of experience in technology leadership, John
                brings strategic vision and deep industry knowledge to Crontech
                Labs.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img
                  src="https://via.placeholder.com/300x300?text=Team+Member+2"
                  alt="Team Member 2"
                />
              </div>
              <h3 className={styles.teamName}>Jane Doe</h3>
              <p className={styles.teamRole}>Chief Technology Officer</p>
              <p className={styles.teamBio}>
                Jane is a technology innovator with expertise in full-stack
                development and cloud architecture, driving our technical
                excellence.
              </p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <img
                  src="https://via.placeholder.com/300x300?text=Team+Member+3"
                  alt="Team Member 3"
                />
              </div>
              <h3 className={styles.teamName}>Robert Johnson</h3>
              <p className={styles.teamRole}>Head of Product Engineering</p>
              <p className={styles.teamBio}>
                Robert leads our product engineering initiatives, specializing in
                AI-powered solutions and SaaS product development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

