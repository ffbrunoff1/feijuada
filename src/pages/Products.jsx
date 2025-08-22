import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Clock, Utensils } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Products() {
  const navigate = useNavigate()

  const menuCategories = [
    {
      name: "Brazilian Food",
      description: "Authentic traditional Brazilian dishes prepared with time-honored recipes and the finest ingredients",
      products: [
        {
          name: "Feijoada Brasileira",
          description: "Our signature traditional Brazilian black bean stew with premium pork cuts, beef, and sausages. Served with white rice, collard greens, orange slices, and cassava flour. A hearty and authentic taste of Brazil that represents the soul of our cuisine.",
          image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Feijoada_Brasileira_1755896306395.png",
          price: "",
          popular: true,
          prepTime: "45 min",
          spiceLevel: "Mild"
        },
        {
          name: "Picanha Grelhada",
          description: "Premium Brazilian cut of beef grilled to perfection, served with garlic rice, black beans, and our signature chimichurri sauce. A true Brazilian barbecue experience.",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          price: "",
          popular: false,
          prepTime: "25 min",
          spiceLevel: "Mild"
        },
        {
          name: "Moqueca de Peixe",
          description: "Traditional Bahian fish stew with coconut milk, dendê palm oil, bell peppers, onions, and fresh cilantro. Served with white rice and pirão.",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
          price: "",
          popular: false,
          prepTime: "30 min",
          spiceLevel: "Medium"
        },
        {
          name: "Coxinha",
          description: "Traditional Brazilian chicken croquettes with a crispy exterior and creamy chicken filling. Served with spicy mayo and lime.",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          price: "",
          popular: true,
          prepTime: "15 min",
          spiceLevel: "Mild"
        },
        {
          name: "Açaí Bowl",
          description: "Traditional Brazilian superfruit bowl topped with granola, fresh fruits, honey, and coconut flakes. A healthy and refreshing option.",
          image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
          price: "",
          popular: false,
          prepTime: "10 min",
          spiceLevel: "None"
        },
        {
          name: "Brigadeiro",
          description: "Classic Brazilian chocolate truffles rolled in chocolate sprinkles. A sweet ending to your Brazilian meal experience.",
          image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
          price: "",
          popular: true,
          prepTime: "5 min",
          spiceLevel: "None"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-24">
      <div className="container-custom section-padding">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the authentic flavors of Brazil through our carefully crafted menu. 
            Each dish tells a story of tradition, culture, and passion for great food.
          </p>
        </motion.div>

        {menuCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {category.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={productIndex}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.popular && (
                        <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                      {product.price && (
                        <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {product.prepTime}
                        </div>
                        <div className="flex items-center">
                          <Utensils className="h-4 w-4 mr-1" />
                          {product.spiceLevel}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={`/dish/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-1"
                      >
                        <motion.button
                          className="w-full btn-primary"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                        </motion.button>
                      </Link>
                      <motion.button
                        className="btn-secondary px-6"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="text-center bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-xl mb-8 opacity-90">
            Reserve your table now and enjoy the authentic taste of Brazil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
            >
              Make Reservation
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call for Takeout
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}