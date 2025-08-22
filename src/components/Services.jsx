import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, Calendar, Users, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Dine-In Experience",
      description: "Enjoy our full Brazilian dining experience in our warm, authentic atmosphere with live music on weekends.",
      features: ["Full service dining", "Weekend live music", "Brazilian décor", "Family-friendly"]
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Host your special occasions with us. We cater birthdays, corporate events, and celebrations with authentic Brazilian flair.",
      features: ["Custom menus", "Event planning", "Decorations", "Group discounts"]
    },
    {
      icon: Users,
      title: "Catering Services",
      description: "Bring the taste of Brazil to your event. Our catering menu features our signature feijoada and Brazilian favorites.",
      features: ["On-site catering", "Drop-off service", "Large group orders", "Custom portions"]
    }
  ]

  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 9:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 10:00 PM" },
    { day: "Sunday", time: "12:00 PM - 8:00 PM" }
  ]

  const menuHighlights = [
    {
      name: "Traditional Feijoada",
      description: "Our signature black bean stew with premium meats, served with rice, collard greens, and orange slices",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Feijoada_Brasileira_1755896306395.png",
      popular: true
    },
    {
      name: "Grilled Picanha",
      description: "Premium Brazilian cut grilled to perfection, served with chimichurri and roasted vegetables",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      popular: false
    },
    {
      name: "Moqueca de Peixe",
      description: "Traditional fish stew with coconut milk, dendê oil, peppers, and fresh herbs",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
      popular: false
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate dinners to grand celebrations, we bring the authentic taste of Brazil to every occasion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className="h-8 w-8 text-amber-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Menu Highlights</h3>
            <div className="space-y-6">
              {menuHighlights.map((dish, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{dish.name}</h4>
                      {dish.popular && (
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{dish.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="mt-8">
              <Link to="/menu">
                <motion.button
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Full Menu
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Hours & Location</h3>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-amber-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Operating Hours</h4>
              </div>
              
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-amber-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Find Us</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600">123 Brazilian Street, Downtown<br />São Paulo, SP 01234-567</p>
                </div>
                
                <div>
                  <p className="text-gray-700 font-medium">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Brazil?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable culinary journey through the flavors of Brazil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Make Reservation
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 inline mr-2" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}