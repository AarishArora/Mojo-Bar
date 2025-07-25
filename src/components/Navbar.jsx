

import React from 'react';
import Logo from "/src/assets/Mojo Bar Logo.webp";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const menuItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/product-page">Products</a></li>
      <li><a href="/about-us">About Us</a></li>
      {user ? (
        <>
          <li><a href="/cart">Cart</a></li>
          <li><button onClick={logout} className='bg-primary text-black font-black'>Sign out</button></li>
        </>
      ) : (
        <li><a href="/login" className='bg-primary text-black font-black'>Login</a></li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-md px-6">
      {/* Left side with logo */}
      <div className="flex-1">
        <img
          className="w-[70px] bg-primary rounded-b-3xl rounded-tr-3xl"
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

