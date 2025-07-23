import React from 'react';
import Logo from "/src/assets/Mojo Bar Logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-md px-6">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">Mojo Bar</a> */}
        <img className='w-[70px] bg-primary rounded-b-3xl rounded-tr-3xl' src={Logo} alt="Logo" />
      </div>
      <div className="hidden md:flex gap-4">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">Products</a>
        <a className="btn btn-ghost">About Us</a>
        <a className="btn btn-ghost">Cart</a>
        <a className="btn btn-primary">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
