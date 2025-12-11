import ServiceCard from '../../components/ServiceCard';
import styles from './page.module.css';

// SVG Icons for Services
const WebDevIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const TestingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const EngineeringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSubtitle}>
            Comprehensive technology solutions to power your business
          </p>
        </div>
      </section>

      {/* Full Stack Development */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ServiceCard
            title="Full Stack Web Development"
            description="We build robust, scalable web applications from frontend to backend. Our full-stack development services include modern frameworks, cloud deployment, API development, database design, and seamless integration with third-party services. Whether you need a custom web application, e-commerce platform, or enterprise solution, we deliver high-quality code that's maintainable and scalable."
            icon={<WebDevIcon />}
          />
        </div>
      </section>

      {/* Salesforce Development */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <ServiceCard
            title="Salesforce Development & Consulting"
            description="Maximize your Salesforce investment with our expert development and consulting services. We specialize in custom Salesforce implementations, Lightning component development, Apex programming, integrations with external systems, workflow automation, and data migration. Our consultants help you optimize your CRM processes and unlock the full potential of the Salesforce platform."
            icon={<SalesforceIcon />}
          />
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ServiceCard
            title="Application Support & Maintenance"
            description="Keep your applications running smoothly with our comprehensive support and maintenance services. We provide 24/7 monitoring, bug fixes, security updates, performance optimization, and feature enhancements. Our proactive approach ensures your systems stay up-to-date, secure, and performant, allowing you to focus on your core business operations."
            icon={<SupportIcon />}
          />
        </div>
      </section>

      {/* QA & Testing */}
      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <ServiceCard
            title="Quality Testing & Automation"
            description="Ensure the reliability and quality of your software with our comprehensive testing services. We offer manual testing, automated test suite development, performance testing, security testing, and continuous integration setup. Our QA experts help you catch issues early, reduce deployment risks, and maintain high-quality standards throughout your development lifecycle."
            icon={<TestingIcon />}
          />
        </div>
      </section>

      {/* Product Engineering */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ServiceCard
            title="Custom Product Engineering"
            description="From concept to launch, we engineer custom products tailored to your specific needs. Our product engineering services include AI-powered utilities, SaaS product development, internal tool creation, mobile applications, and automation scripts. We work closely with you to understand your requirements and deliver innovative solutions that solve real business problems."
            icon={<EngineeringIcon />}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how our services can help transform your business.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

