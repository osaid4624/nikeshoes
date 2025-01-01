import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaShoppingCart, FaUserAlt, FaHome, FaHeart, FaTrash } from 'react-icons/fa';

export default function CheckoutPage() {
  return (
    <div>
        <Navbar/>
        <Header/>
      {/* Free Delivery Section */}
      <div className="bg-gray-100 p-3  mb-5 rounded-lg text-center mt-20 ml-28 mr-52">
        <h2 className="font-semibold">Free Delivery</h2>
        <p className="text-sm">Applies to orders of ₹ 14,000.00 or more.</p>
        <button className="text-blue-600 underline">View Details</button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-5">
        {/* Bag Section */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow ml-24">
          <h1 className="font-bold text-xl mb-4">Bag</h1>

          {/* Product Item 1 */}
          <div className="flex items-center border-b pb-10 ">
            <img
              src="shop/red.png"
              alt="Nike T-Shirt"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">Nike Dri-FIT ADV Techknit Ultra</h2>
              <p className="text-sm">Men's Short-Sleeve Running Top</p>
              <p className="text-sm text-gray-500">Size: L | Quantity: 1</p>
              <div className='flex gap-3 mt-2'> 
              <FaHeart/><FaTrash/>
              </div>
            </div>
            <div>
              <h3 className="font-bold">₹ 3,895.00</h3>
            </div>
          </div>

          {/* Product Item 2 */}
          <div className="flex items-center">
            <img
              src="shop/white shirt.png"
              alt="Nike Shorts"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="ml-4 flex-grow">
              <h2 className="font-semibold">Nike Air Max 97 SE</h2>
              <p className="text-sm">Men's Shorts</p>
              <p className="text-sm text-gray-500">Size: M | Quantity: 1</p>
              <div className='flex gap-3 mt-2'> 
              <FaHeart/><FaTrash/>
              </div>
            </div>
            <div>
              <h3 className="font-bold">₹ 16,995.00</h3>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white p-5 rounded-lg shadow -mt-28">
          <h2 className="font-bold text-xl mb-4">Summary</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>₹ 20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹ 20,890.00</p>
          </div>
          <button className="mt-5 w-full bg-black text-white py-3 rounded">
            Member Checkout
          </button>
        </div>
      </div>
      <Footer/> 
    </div>
  );
}
