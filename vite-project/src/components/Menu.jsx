import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Menu.css'

const Menu = () => {
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [selectedCake, setSelectedCake] = useState('')
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    quantity: 1,
    message: ''
  })

  const handleOrderClick = (cakeName) => {
    setSelectedCake(cakeName)
    setShowOrderModal(true)
  }

  const handleOrder = (e) => {
    e.preventDefault()
    alert(`Thank you ${orderForm.name}! Your order for ${orderForm.quantity} ${selectedCake} cake(s) has been received. We'll contact you at ${orderForm.phone}`)
    setShowOrderModal(false)
    setOrderForm({ name: '', phone: '', quantity: 1, message: '' })
    setSelectedCake('')
  }
  const menuItems = [
    {
      name: "Fresh Strawberry Cake",
      price: "$45",
      description: "Bursting with juicy strawberries and fluffy cream",
      image: "/images/strawberry.png",
      popular: true
    },
    {
      name: "Zesty Lemon Cake",
      price: "$42",
      description: "Tangy lemon zest with a soft sponge",
      image: "/images/lemon.png",
      popular: false
    },
    {
      name: "Classic Carrot Cake",
      price: "$40",
      description: "Moist, spiced carrot cake with creamy frosting",
      image: "/images/carrot.png",
      popular: false
    },
    {
      name: "Raspberry Bliss Cake",
      price: "$48",
      description: "A berry lover's dream with fresh raspberries",
      image: "/images/raspberry.png",
      popular: true
    },
    {
      name: "Rich Cocoa Cake",
      price: "$50",
      description: "Deep chocolate layers with silky cocoa frosting",
      image: "/images/chocolate.png",
      popular: true
    },
    {
      name: "Pistachio Rose Cake",
      price: "$55",
      description: "Nutty pistachio paired with subtle rose flavors",
      image: "/images/pista.png",
      popular: false
    },
    {
      name: "Black Currant Cake",
      price: "$52",
      description: "Juicy black currants with smooth cream layers",
      image: "/images/black.png",
      popular: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother motion
      }
    }
  }

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="menu-header"
        >
          <h2>Our Sweet Menu</h2>
          <p>Indulge in our carefully crafted collection of artisan cakes</p>
        </motion.div>

        <motion.div
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="menu-card"
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { 
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
            >
              {item.popular && <span className="popular-badge">Popular</span>}
              <div className="menu-card-image">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
                <button 
                  className="order-btn"
                  onClick={() => handleOrderClick(item.name)}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Modal */}
        {showOrderModal && (
          <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
            <div className="modal order-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowOrderModal(false)}>×</button>
              <h2>Order {selectedCake}</h2>
              <form onSubmit={handleOrder}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({...orderForm, quantity: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Special Instructions (Optional)</label>
                  <textarea
                    value={orderForm.message}
                    onChange={(e) => setOrderForm({...orderForm, message: e.target.value})}
                    placeholder="Any special requests or message for the cake?"
                    rows="3"
                  />
                </div>
                <button type="submit" className="btn filled modal-btn">Place Order</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
