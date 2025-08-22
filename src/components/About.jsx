import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, ChefHat } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Family Recipe",
      description: "Our feijoada recipe has been perfected over three generations, bringing authentic Brazilian flavors to your table."
    },
    {
      icon: ChefHat,
      title: "Master Chefs",
      description: "Our Brazilian chefs bring decades of experience and passion for traditional cuisine to every dish we serve."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe food brings people together. Our restaurant is a gathering place for friends, family, and food lovers."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in Brazilian cuisine and voted 'Best Feijoada' three years running by local food critics."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for authentic Brazilian cuisine, Feijuada brings the heart and soul of Brazil to your dining experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              A Taste of Brazil in Every Bite
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1995 by Maria Santos, a Brazilian immigrant who wanted to share the flavors of her homeland, 
              Feijuada has become a cornerstone of authentic Brazilian dining. Our restaurant started as a small family 
              business and has grown into a beloved destination for food enthusiasts seeking genuine Brazilian cuisine.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every dish we serve tells a story of tradition, culture, and love. From our signature feijoada, slow-cooked 
              to perfection with black beans and premium meats, to our vibrant side dishes and tropical desserts, we bring 
              the warmth and hospitality of Brazil to every meal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to authenticity means we source the finest ingredients, many imported directly from Brazil, 
              to ensure every flavor is true to its roots. When you dine with us, you're not just having a meal – you're 
              experiencing a piece of Brazilian culture.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Brazilian restaurant interior"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg -z-10 opacity-70"></div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-4 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className="h-8 w-8 text-amber-600" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Visit Us Today</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the warmth of Brazilian hospitality and the authentic flavors that have made us a local favorite. 
              Come hungry, leave happy, and take a piece of Brazil with you.
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Make a Reservation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}