import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Link from 'next/link';
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

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Overview Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive technology solutions tailored to your business needs
          </p>
          <div className={styles.servicesGrid}>
            <ServiceCard
              title="Full Stack Development"
              description="End-to-end web application development using modern technologies and best practices."
              icon={<WebDevIcon />}
            />
            <ServiceCard
              title="Salesforce Development"
              description="Custom Salesforce solutions, integrations, and consulting to maximize your CRM potential."
              icon={<SalesforceIcon />}
            />
            <ServiceCard
              title="Support & Maintenance"
              description="Ongoing application support, updates, and maintenance to keep your systems running smoothly."
              icon={<SupportIcon />}
            />
            <ServiceCard
              title="QA & Testing"
              description="Comprehensive quality assurance and automated testing to ensure reliable software delivery."
              icon={<TestingIcon />}
            />
            <ServiceCard
              title="Product Engineering"
              description="Custom product development from concept to deployment, including AI-powered tools and SaaS products."
              icon={<EngineeringIcon />}
            />
          </div>
          <div className={styles.ctaContainer}>
            <Link href="/services" className={styles.ctaLink}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Crontech Labs</h2>
          <p className={styles.sectionSubtitle}>
            We combine technical expertise with business acumen to deliver
            solutions that drive real results
          </p>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>01</div>
              <h3 className={styles.whyTitle}>Expert Team</h3>
              <p className={styles.whyDescription}>
                Our experienced developers and consultants bring years of
                industry expertise to every project.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>02</div>
              <h3 className={styles.whyTitle}>End-to-End Solutions</h3>
              <p className={styles.whyDescription}>
                From initial concept to deployment and maintenance, we handle
                every aspect of your project.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>03</div>
              <h3 className={styles.whyTitle}>Modern Technology</h3>
              <p className={styles.whyDescription}>
                We leverage cutting-edge tools and frameworks to build scalable,
                future-proof solutions.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>04</div>
              <h3 className={styles.whyTitle}>Client-Focused</h3>
              <p className={styles.whyDescription}>
                Your success is our priority. We work closely with you to
                understand and deliver on your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Products & Tools</h2>
          <p className={styles.sectionSubtitle}>
            Innovative solutions we've built to solve real-world problems
          </p>
          <div className={styles.productsGrid}>
            <ProductCard
              title="Postbold"
              description="A powerful content management and publishing platform designed for modern teams."
              image="/linkedin-text-formatter-min.webp"
            />
            <ProductCard
              title="AI Utility Tools"
              description="A suite of AI-powered utilities that automate tasks and enhance productivity."
              image="/ai automation.jpg"
            />
            <ProductCard
              title="Automation Scripts"
              description="Custom automation solutions that streamline workflows and reduce manual effort."
              image="/automation_tools.jpg"
            />
          </div>
          <div className={styles.ctaContainer}>
            <Link href="/products" className={styles.ctaLink}>
              Explore All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it—hear from our satisfied clients
          </p>
          <div className={styles.testimonialsGrid}>
            <TestimonialCard
              name="Sarah Johnson"
              role="CTO"
              company="TechCorp"
              content="Crontech Labs transformed our digital infrastructure. Their expertise in full-stack development and Salesforce integration exceeded our expectations. Highly recommended!"
            />
            <TestimonialCard
              name="Michael Chen"
              role="Product Manager"
              company="InnovateNow"
              content="Working with Crontech Labs has been a game-changer. They delivered our custom product on time and within budget. Their attention to detail and technical expertise is outstanding."
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Operations Director"
              company="ScaleUp Inc"
              content="The support and maintenance services from Crontech Labs have been invaluable. They're responsive, proactive, and always find solutions. A true technology partner."
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.container}>
          <div className={styles.contactCTA}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help transform your business with smart
              digital solutions.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

