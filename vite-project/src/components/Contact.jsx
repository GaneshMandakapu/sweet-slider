import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      content: "123 Sweet Street, Bakery District",
      subContent: "New York, NY 10001"
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Sat: 9AM - 8PM"
    },
    {
      icon: "✉️",
      title: "Email Us",
      content: "hello@chikkibhoii.com",
      subContent: "We reply within 24 hours"
    },
    {
      icon: "🕒",
      title: "Working Hours",
      content: "Monday - Saturday",
      subContent: "9:00 AM - 8:00 PM"
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: "📷", link: "#" },
    { name: "Facebook", icon: "👥", link: "#" },
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "Pinterest", icon: "📌", link: "#" }
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <h4>{info.title}</h4>
                  <p>{info.content}</p>
                  <p className="sub-content">{info.subContent}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                className="success-message"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="success-icon">✅</span>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Order Inquiry"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="6"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <p>Map Location</p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Chikkibhoii Bakes. All rights reserved.</p>
        <p>Made with ❤️ and 🍰</p>
      </footer>
    </section>
  )
}

export default Contact
