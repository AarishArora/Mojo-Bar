import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Save to localStorage on update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen w-full"
    >
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
      </motion.div>
      </>
    );
  }

  return (
    <>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen w-full"
    >
    <Navbar />
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 pt-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-base-200 p-4 rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-xl border"
              />
              <div className="flex-grow">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="btn btn-sm btn-outline"
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="btn btn-sm btn-outline"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold text-lg">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-xs text-red-500 mt-2 outline-1 bg-base-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-base-200 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-200">
              <span>Total Items:</span>
              <span>{cartItems.reduce((a, b) => a + b.quantity, 0)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-6">Checkout</button>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default CartPage;
