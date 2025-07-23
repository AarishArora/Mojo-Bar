import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import ScrollToTop from './components/ScrollToTop'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CartPage from './pages/Cart'
import About from './pages/About'



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
            <Home />
          
        } />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App