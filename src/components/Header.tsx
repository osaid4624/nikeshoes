"use client";  // Ensure this is a client-side component
import { FaShoppingCart, FaUserAlt, FaHome, FaHeart, FaTrash } from 'react-icons/fa';


import React, { useState } from 'react';
import Link from "next/link";
import { FaBagShopping } from 'react-icons/fa6';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');  // Declare searchQuery state

  // Function to handle changes in the input field
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Logo Section */}
      <div>
        <img className='h-12 ml-14 mt-3' src="nikelogo.png" alt="Nike logo" />
      </div>
      
      {/* Navigation Menu */}
<ul className="flex justify-center space-x-8 text-lg font-medium -mt-6 mr-4">
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/shop">New & Featured</Link>
  </li>
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/shop">Men</Link>
  </li>
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/shop">Women</Link>
  </li>
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/shop">Kids</Link>
  </li>
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/orderpage">Sale</Link>
  </li>
  <li className="hover:text-gray-600 cursor-pointer">
    <Link href="/addtocart">SNKRS</Link>
  </li>
</ul>

      {/* Search Bar */}
      <div className='flex justify-end mr-[100] ml-10  items-center -mt-8'>
        <input
          type="text"
          value={searchQuery}  // Bind input value to searchQuery state
          onChange={handleSearchChange}  // Handle input changes
          placeholder="Search"
          className='border border-gray-300  p-2 rounded-full bg-#F5F5F5 mr-10'
        />
        <div className='flex gap-3'>
        <FaHeart/>
        <FaBagShopping/>
        </div>
      </div>
    </div>
  );
};

export default Header;
