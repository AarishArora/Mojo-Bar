import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-md px-6">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">Mojo Bar</a> */}
        <img className='w-[70px]' src="./src/assets/Mojo Bar Logo.png" alt="" />
      </div>
      <div className="hidden md:flex gap-4">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">Products</a>
        <a className="btn btn-ghost">About Us</a>
        <a className="btn btn-primary">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
