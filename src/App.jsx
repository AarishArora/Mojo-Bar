import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { AnimatePresence } from "framer-motion";
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import ScrollToTop from './components/ScrollToTop'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CartPage from './pages/Cart'
import About from './pages/About'


const App = () => {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader briefly on location change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // loader duration
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
      <ScrollToTop />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home /> } />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about-us" element={<About />} />
      </Routes>

      </AnimatePresence>
    </>
  )
}

export default App