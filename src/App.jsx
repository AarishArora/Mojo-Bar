import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import Best_Seller from './components/Best_Seller'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        
        {/* <SingleProductPage /> */}
        {/* <ProductPage /> */}
      </Routes>
        {/* <Best_Seller /> */}
        {/* <Footer /> */}
    </Router>
  )
}

export default App