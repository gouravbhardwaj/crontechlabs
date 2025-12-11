import styles from './FeaturedProduct.module.css';

export default function FeaturedProduct() {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.container}>
        <div className={styles.badge}>Featured Product</div>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src="https://via.placeholder.com/800x600?text=Postbold+Dashboard"
              alt="Postbold - LinkedIn Content Creation Solution"
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Postbold</h2>
            <p className={styles.subtitle}>
              Complete LinkedIn Content Creation Solution
            </p>
            <p className={styles.description}>
              Postbold is your all-in-one platform for LinkedIn content creation,
              from initial idea generation to post creation and scheduling. Streamline
              your social media workflow and maintain a consistent presence on
              LinkedIn with our intelligent content management system.
            </p>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💡</div>
                <div>
                  <h3 className={styles.featureTitle}>Idea Generation</h3>
                  <p className={styles.featureDesc}>
                    AI-powered content ideas tailored to your industry and audience
                  </p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✍️</div>
                <div>
                  <h3 className={styles.featureTitle}>Post Creation</h3>
                  <p className={styles.featureDesc}>
                    Intuitive editor with templates, formatting tools, and preview
                  </p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📅</div>
                <div>
                  <h3 className={styles.featureTitle}>Smart Scheduling</h3>
                  <p className={styles.featureDesc}>
                    Schedule posts at optimal times with analytics and insights
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>
                Get Started
              </a>
              <a href="/products" className={styles.secondaryButton}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

