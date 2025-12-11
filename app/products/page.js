import ProductCard from '../../components/ProductCard';
import FeaturedProduct from '../../components/FeaturedProduct';
import styles from './page.module.css';

export default function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Products & Tools</h1>
          <p className={styles.heroSubtitle}>
            Innovative solutions built to solve real-world problems
          </p>
        </div>
      </section>

      {/* Featured Product - Postbold */}
      <FeaturedProduct />

      {/* Other Products Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Products</h2>
          <p className={styles.introText}>
            Explore our other innovative solutions designed to help businesses
            streamline operations, automate tasks, and leverage the power of
            modern technology.
          </p>
          <div className={styles.productsGrid}>
            <ProductCard
              title="AI Utility Tools"
              description="A comprehensive suite of AI-powered utilities that automate repetitive tasks and enhance productivity. From intelligent document processing to automated data analysis, our AI tools help businesses work smarter, not harder. Built with cutting-edge machine learning technology."
              image="https://via.placeholder.com/600x400?text=AI+Utility+Tools"
            />
            <ProductCard
              title="Automation Scripts"
              description="Custom automation solutions that streamline workflows and reduce manual effort. Our automation scripts integrate seamlessly with your existing systems, handling everything from data synchronization to report generation. Save time and reduce errors with intelligent automation."
              image="https://via.placeholder.com/600x400?text=Automation+Scripts"
            />
            <ProductCard
              title="Web & Mobile Apps"
              description="Cross-platform applications that deliver exceptional user experiences. Our web and mobile apps are built with modern frameworks, ensuring fast performance, intuitive interfaces, and seamless functionality across all devices. Perfect for businesses looking to expand their digital presence."
              image="https://via.placeholder.com/600x400?text=Web+%26+Mobile+Apps"
            />
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className={`${styles.section} ${styles.comingSoonSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>More Products Coming Soon</h2>
          <p className={styles.sectionSubtitle}>
            We're constantly innovating and developing new solutions. Stay tuned
            for exciting product launches!
          </p>
        </div>
      </section>
    </div>
  );
}

