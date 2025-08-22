import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/#about' },
    { name: 'Reservations', href: '/#contact' },
    { name: 'Contact', href: '/#contact' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ]

  const footerSections = [
    {
      title: "Contact Info",
      content: [
        { icon: MapPin, text: "123 Brazilian Street, Downtown, São Paulo, SP 01234-567" },
        { icon: Phone, text: "(555) 123-4567" },
        { icon: Mail, text: "info@feijuada.com" }
      ]
    },
    {
      title: "Opening Hours",
      content: [
        { icon: Clock, text: "Monday - Thursday: 11:00 AM - 9:00 PM" },
        { icon: Clock, text: "Friday - Saturday: 11:00 AM - 10:00 PM" },
        { icon: Clock, text: "Sunday: 12:00 PM - 8:00 PM" }
      ]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Feijuada</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the authentic taste of Brazil at Feijuada, where traditional recipes meet modern hospitality. 
              Join us for an unforgettable culinary journey through the rich flavors of Brazilian cuisine.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-5 w-5 text-white" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-amber-300">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-amber-300 transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (sectionIndex + 2) }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-amber-300">{section.title}</h4>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => {
                  const IconComponent = item.icon
                  return (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <IconComponent className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Newsletter</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to get the latest news about special events, new menu items, and exclusive offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-300">Special Events</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">🎵 Live Brazilian Music - Every Friday & Saturday</p>
                <p className="text-gray-300">🍹 Happy Hour - Monday to Thursday, 3-6 PM</p>
                <p className="text-gray-300">🎉 Private Events & Catering Available</p>
                <p className="text-gray-300">📱 Follow us for daily specials and updates</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 pt-8 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Feijuada Restaurant. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <span>
                Criado com <em><a href="https://papum.ai" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">Papum</a></em>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}