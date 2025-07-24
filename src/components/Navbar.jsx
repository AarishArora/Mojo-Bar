import React from 'react';
import Logo from "/src/assets/Mojo Bar Logo.png";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-md px-6">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">Mojo Bar</a> */}
        <img className='w-[70px] bg-primary rounded-b-3xl rounded-tr-3xl ' src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex gap-4">
      {user ? (
        <>
          <a className="btn btn-ghost" href="/">Home</a>
          <a className="btn btn-ghost" href="/product-page">Products</a>
          <a className="btn btn-ghost" href="/about-us">About Us</a>
          <a className="btn btn-ghost" href="/cart">Cart</a>
          <a className="btn btn-primary" onClick={logout}>Sign out</a>
        </>
      ): (
        <>
          <a className="btn btn-ghost" href="/">Home</a>
          <a className="btn btn-ghost" href="/product-page">Products</a>
          <a className="btn btn-ghost" href="/about-us">About Us</a>
          <a href="/login" className="btn btn-primary">Login</a>
        </>
      )}
        
      </div>
    </div>
  );
};

export default Navbar;
