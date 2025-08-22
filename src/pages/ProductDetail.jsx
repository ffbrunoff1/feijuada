import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Clock, Utensils, Users, ChefHat } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetail() {
  const { dishName } = useParams()
  const navigate = useNavigate()

  const dishData = {
    'feijoada-brasileira': {
      name: "Feijoada Brasileira",
      description: "Our signature traditional Brazilian black bean stew with premium pork cuts, beef, and sausages. Served with white rice, collard greens, orange slices, and cassava flour. A hearty and authentic taste of Brazil that represents the soul of our cuisine.",
      fullDescription: "Feijoada is considered Brazil's national dish, and our version stays true to the traditional recipe that has been passed down through generations. We slow-cook black beans with a carefully selected variety of premium meats including pork shoulder, beef short ribs, chorizo, and Brazilian linguiça sausage. The dish is traditionally served on Wednesdays and Saturdays, following Brazilian custom. Our feijoada comes with all the traditional accompaniments: fluffy white rice, sautéed collard greens with garlic, fresh orange slices to aid digestion, toasted cassava flour (farofa), and spicy vinaigrette sauce (molho de pimenta). This hearty meal is perfect for sharing and represents the communal spirit of Brazilian dining.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/Feijoada_Brasileira_1755896306395.png",
      price: "",
      prepTime: "45 min",
      serves: "2-3 people",
      spiceLevel: "Mild",
      calories: "850",
      ingredients: [
        "Black beans",
        "Pork shoulder",
        "Beef short ribs", 
        "Brazilian sausage",
        "Bacon",
        "Onions",
        "Garlic",
        "Bay leaves",
        "Orange",
        "Collard greens",
        "White rice",
        "Cassava flour"
      ],
      nutritionalInfo: {
        protein: "45g",
        carbs: "65g", 
        fat: "28g",
        fiber: "18g"
      },
      allergens: ["Contains gluten"],
      chefNote: "Chef Maria's family recipe, slow-cooked for 6 hours to achieve the perfect texture and flavor balance. The secret is in the layering of meats and the precise timing of each addition.",
      pairings: ["Caipirinha", "Brazilian Beer", "Fresh Coconut Water"],
      popular: true
    }
  }

  const dish = dishData[dishName] || {
    name: "Dish Not Found",
    description: "This dish is currently not available.",
    fullDescription: "Please check our full menu for available options.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80",
    price: "",
    prepTime: "N/A",
    serves: "N/A",
    spiceLevel: "N/A",
    calories: "N/A",
    ingredients: [],
    nutritionalInfo: {},
    allergens: [],
    chefNote: "",
    pairings: [],
    popular: false
  }

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
            onClick={() => navigate('/menu')}
            className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Menu
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                {dish.popular && (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Popular Choice
                  </span>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <Clock className="h-6 w-6 text-amber-600 mb-2" />
                <p className="text-sm text-gray-600">Prep Time</p>
                <p className="font-semibold text-gray-800">{dish.prepTime}</p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <Users className="h-6 w-6 text-amber-600 mb-2" />
                <p className="text-sm text-gray-600">Serves</p>
                <p className="font-semibold text-gray-800">{dish.serves}</p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <Utensils className="h-6 w-6 text-amber-600 mb-2" />
                <p className="text-sm text-gray-600">Spice Level</p>
                <p className="font-semibold text-gray-800">{dish.spiceLevel}</p>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-4 shadow-md"
                whileHover={{ scale: 1.02 }}
              >
                <ChefHat className="h-6 w-6 text-amber-600 mb-2" />
                <p className="text-sm text-gray-600">Calories</p>
                <p className="font-semibold text-gray-800">{dish.calories}</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                {dish.name}
              </h1>
              {dish.price && (
                <span className="text-3xl font-bold text-amber-600">{dish.price}</span>
              )}
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {dish.fullDescription}
            </p>

            {dish.chefNote && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <ChefHat className="h-5 w-5 text-amber-600 mr-2" />
                  Chef's Note
                </h3>
                <p className="text-gray-700 italic">{dish.chefNote}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {dish.ingredients.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Ingredients</h3>
                  <ul className="space-y-2">
                    {dish.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {Object.keys(dish.nutritionalInfo).length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Nutrition per Serving</h3>
                  <div className="space-y-2">
                    {Object.entries(dish.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {dish.pairings.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Perfect Pairings</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.pairings.map((pairing, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {pairing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {dish.allergens.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Allergen Information</h3>
                <p className="text-red-700 text-sm">
                  {dish.allergens.join(', ')}
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <motion.button
                className="flex-1 btn-primary text-lg py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate('/')
                  setTimeout(() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                  }, 100)
                }}
              >
                Reserve & Order
              </motion.button>
              <motion.button
                className="btn-secondary px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call to Order
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-4">Want to Try More Brazilian Flavors?</h3>
          <p className="text-xl mb-8 opacity-90">
            Explore our full menu and discover the rich culinary traditions of Brazil
          </p>
          <motion.button
            className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/menu')}
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}