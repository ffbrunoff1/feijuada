import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Utensils, Phone, MapPin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/#about' },
    { name: 'Reservations', href: '/#contact' },
    { name: 'Contact', href: '/#contact' }
  ]

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      scrollToSection(href)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-amber-100' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Utensils className={`h-8 w-8 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
            </div>
            <Link to="/">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-amber-700' : 'text-white text-shadow'
              }`}>
                Feijuada
              </h1>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600' 
                    : 'text-white hover:text-amber-200 text-shadow'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </motion.div>
            
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
            >
              Reserve Now
            </motion.button>
          </div>

          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-2 text-gray-600 pt-2 border-t border-gray-200">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </div>
              
              <motion.button
                className="btn-primary w-full"
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToSection('#contact')
                  setIsOpen(false)
                }}
              >
                Reserve Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}