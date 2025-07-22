import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-50 shadow-md px-6">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">Max Protein</a> */}
        <img className='w-[70px]' src="./src/assets/Mojo Bar Logo.png" alt="" />
      </div>
      <div className="hidden md:flex gap-4">
        <a className="btn btn-ghost">Home</a>

        {/* <a className="btn btn-ghost">Products</a> */}
        <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost ">Products</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a>All Products</a></li>
          <li><a>Energy Bars</a></li>
          <li><a>Protein Bombs</a></li>
          <li><a>Gift Hampers</a></li>
        </ul>
      </div>
        <a className="btn btn-ghost">About Us</a>
        <a className="btn btn-primary">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
