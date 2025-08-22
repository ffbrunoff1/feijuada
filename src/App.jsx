import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/menu" element={<Products />} />
        <Route path="/dish/:dishName" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
