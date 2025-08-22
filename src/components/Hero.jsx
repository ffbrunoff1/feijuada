import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Clock, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroImages = [
    "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Feijoada_Brasileira_1755896306395.png",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
      
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImages[1]})`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-20 text-center text-white px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Feijuada
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the authentic taste of Brazil with our traditional feijoada and vibrant Brazilian cuisine. 
            Where every meal tells a story of heritage and flavor.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/menu">
            <motion.button
              className="btn-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.button>
          </Link>

          <motion.button
            className="btn-secondary text-lg px-10 py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Make Reservation
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Authentic Brazilian</h3>
            <p className="text-gray-300 text-sm">Traditional recipes passed down through generations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fresh Daily</h3>
            <p className="text-gray-300 text-sm">Made fresh every day with the finest ingredients</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <MapPin className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-300 text-sm">Located in the heart of the city with easy access</p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-white hover:text-amber-300 transition-colors duration-300"
            whileHover={{ y: 5 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
            <span className="block text-sm mt-2">Discover More</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent z-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  )
}