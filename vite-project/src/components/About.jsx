import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Cake Varieties" },
    { number: "100%", label: "Satisfaction" }
  ]

  const values = [
    {
      icon: "🎂",
      title: "Quality Ingredients",
      description: "We use only the finest, freshest ingredients in every cake we make"
    },
    {
      icon: "💝",
      title: "Made with Love",
      description: "Each cake is handcrafted with passion and attention to detail"
    },
    {
      icon: "🌟",
      title: "Custom Creations",
      description: "Special occasions deserve special cakes, customized just for you"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Fresh cakes delivered right to your door, on time, every time"
    }
  ]

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Hero Section */}
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About Chikkibhoii Bakes</h2>
          <p className="about-subtitle">Crafting Sweet Memories Since 2015</p>
        </motion.div>

        {/* Story Section */}
        <div className="about-content">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Our Story</h3>
            <p>
              Welcome to Chikkibhoii Bakes, where every cake tells a story and every bite is a celebration. 
              What started as a passion project in a small kitchen has blossomed into a beloved bakery 
              serving thousands of happy customers.
            </p>
            <p>
              We believe that life's sweetest moments deserve the finest cakes. From birthdays to weddings, 
              anniversaries to simple everyday joys, we're here to make your celebrations extra special with 
              our artisan cakes crafted with love and the highest quality ingredients.
            </p>
            <p>
              Our master bakers combine traditional techniques with innovative flavors to create cakes that 
              not only look stunning but taste absolutely divine. Each cake is a work of art, made fresh to 
              order with attention to every delicious detail.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="image-placeholder">
              <span className="emoji">🍰</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="values-title">What Makes Us Special</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="value-icon">{value.icon}</span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
