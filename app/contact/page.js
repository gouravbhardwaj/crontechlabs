'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (in real app, this would send to backend)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSubtitle}>
            Have a project in mind? Lets discuss how we can help
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                  {errors.message && (
                    <span className={styles.errorMessage}>{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoContainer}>
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <div className={styles.infoContent}>
                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Email</h3>
                  <p className={styles.infoValue}>
                    <a href="mailto:contactus@crontechlabs.com">
                    contactus@crontechlabs.com
                    </a>
                  </p>
                </div>
                
                {/*
                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Phone</h3>
                  <p className={styles.infoValue}>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </p>
                </div>
                */}

                <div className={styles.infoItem}>
                  <h3 className={styles.infoLabel}>Business Hours</h3>
                  <p className={styles.infoValue}>
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>

              {/* Map Placeholder
              <div className={styles.mapContainer}>
                <div className={styles.mapPlaceholder}>
                  <p>Google Map Placeholder</p>
                  <p className={styles.mapNote}>
                    Map integration can be added here
                  </p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

