import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX: scrollProgress / 100,
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  )
}

export default ScrollProgress
