import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
import Best_Seller from './components/Best_Seller'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Best_Seller />
      <Products />
      {/* <SingleProductPage /> */}
      {/* <ProductPage /> */}
      <Footer />
    </div>
  )
}

export default App