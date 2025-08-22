import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Calendar, Users } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        message: `Reservation Request:\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nMessage: ${formData.message}`,
        recipientEmail: "",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Reservation request sent successfully! We will contact you soon.', isError: false })
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: ''
        })
      } else {
        setStatus({ message: 'Failed to send reservation request. Please try again.', isError: true })
      }
      
      recaptchaRef.current.reset()
    } catch (error) {
      setStatus({ message: 'An error occurred. Please try again.', isError: true })
      console.error('Error:', error)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Brazilian Street", "Downtown, São Paulo", "SP 01234-567"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "WhatsApp: (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 11AM-9PM", "Fri-Sat: 11AM-10PM", "Sun: 12PM-8PM"],
      action: "View Schedule"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@feijuada.com", "reservations@feijuada.com"],
      action: "Send Email"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Make a <span className="gradient-text">Reservation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserve your table and experience the authentic taste of Brazil. We can't wait to serve you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                    </div>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                    <motion.button
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.action} →
                    </motion.button>
                  </motion.div>
                )
              })}
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Special Events</h4>
              <p className="text-gray-600 mb-4">
                Planning a special celebration? We offer private dining rooms and custom menus for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Birthday parties and anniversaries
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Corporate events and meetings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Wedding rehearsals and receptions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Cultural celebrations
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Reservation Form</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Guests *</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7+">7+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Any special requests, dietary restrictions, or occasion details..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`mb-4 p-4 rounded-lg ${status.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full btn-primary text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="h-5 w-5 inline mr-2" />
                Confirm Reservation
              </motion.button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We'll confirm your reservation within 24 hours. For immediate assistance, please call us.
              </p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg mb-6 opacity-90">
            Call us directly for same-day reservations or special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 inline mr-2" />
              (555) 123-4567
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp: (555) 987-6543
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
        size="invisible"
      />
    </section>
  )
}