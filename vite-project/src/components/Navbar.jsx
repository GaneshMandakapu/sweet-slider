import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    cake: '',
    quantity: 1,
    message: ''
  })

  const handleLogin = (e) => {
    e.preventDefault()
    // Add your login logic here
    alert(`Welcome back! Logged in as ${loginForm.email}`)
    setShowLoginModal(false)
    setLoginForm({ email: '', password: '' })
  }

  const handleOrder = (e) => {
    e.preventDefault()
    // Add your order logic here
    alert(`Thank you ${orderForm.name}! Your order for ${orderForm.quantity} ${orderForm.cake} cake(s) has been received. We'll contact you at ${orderForm.phone}`)
    setShowOrderModal(false)
    setOrderForm({ name: '', phone: '', cake: '', quantity: 1, message: '' })
  }

  const scrollToSection = (section) => {
    // Smooth scroll functionality
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false) // Close mobile menu after clicking
    } else {
      alert(`${section} section coming soon!`)
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">Chikkibhoii Bakes</div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('menu')}>Menu</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
          <li className="mobile-login" onClick={() => { setShowLoginModal(true); setMobileMenuOpen(false); }}>
            <span className="login-icon">👤</span> Login
          </li>
        </ul>
        <div className="cta-buttons">
          <button 
            className="btn user-icon" 
            onClick={() => setShowLoginModal(true)}
            aria-label="Login"
            title="Login"
          >
            👤
          </button>
          <button className="btn filled" onClick={() => { setShowOrderModal(true); setMobileMenuOpen(false); }}>Order Now</button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLoginModal(false)}>×</button>
            <h2>Welcome Back!</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn filled modal-btn">Login</button>
              <p className="modal-footer">Don't have an account? <span className="link">Sign up</span></p>
            </form>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {showOrderModal && (
        <div className="modal-overlay" onClick={() => setShowOrderModal(false)}>
          <div className="modal order-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowOrderModal(false)}>×</button>
            <h2>Place Your Order</h2>
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
                <label>Select Cake</label>
                <select
                  required
                  value={orderForm.cake}
                  onChange={(e) => setOrderForm({...orderForm, cake: e.target.value})}
                >
                  <option value="">Choose a cake...</option>
                  <option value="Strawberry">Fresh Strawberry Cake</option>
                  <option value="Lemon">Zesty Lemon Cake</option>
                  <option value="Carrot">Classic Carrot Cake</option>
                  <option value="Raspberry">Raspberry Bliss Cake</option>
                  <option value="Cocoa">Rich Cocoa Cake</option>
                  <option value="Pista Rose">Pistachio Rose Cake</option>
                  <option value="Black Currant">Black Currant Cake</option>
                </select>
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
    </>
  )
}

export default Navbar
