import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-[#F5F5F5] pb-3 -mt-1'>
      {/* Add the correct `src` for the image */}
      <img className="h-9 ml-9 mt-1" src="navbarlogo.png" alt="navbarlogo.png" />
      <ul className="flex justify-end mr-[70px] gap-3 -mt-5 font-medium">
        <li className='gap-11 pr-4 border-r-2 border-black'>Find a Store</li>
        <li className='gap-10 pr-4 border-r-2 border-black'>Help</li>
        <li className='gap-10 pr-4 border-r-2 border-black'>
        <Link href="/loginform">Join Us</Link>
        </li>
        <li className='gap-10 '>
        <Link href="/singuppage">Sing In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
