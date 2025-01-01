import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaBagShopping } from 'react-icons/fa6';

export default function CheckoutPage() {
  return (
    <div>
        <Navbar/>
        <Header/>
     <div className="grid grid-cols-1 md:grid-cols-2">
      <div className='mt-14'>
        <h2 className='flex text-2xl font-bold justify-center ml-4'>How would you like to get your order?</h2>
        <p className='flex  ml-32 w-[437px] mt-4'>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
        <div className='flex justify-center gap-2 rounded-md border-black outline w-96 ml-32 mt-5 p-4 pr-10'>
          <li className='flex justify-center mt-1'><FaBagShopping/></li>
          <p className='gap-5'>Deliver It</p>
        </div>
        <div className='flex justify-center mt-20 pb-11'>
      </div>
      <div>
      <h2 className=' flex justify-center mr-10 font-bold text-2xl text-center'>Enter your name and address:</h2>
      <div className='flex flex-wrap justify-center align-middle '>
      <ul>
        <li><input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="First Name" /></li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Last Name" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Address Line 1" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Address Line 2" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Address Line 3"
   />
  </li>
  <li className='flex gap-7'>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3  border outline-black mt-5'type="text"placeholder="Postal Code" />
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Locality" />
  </li>
  <li className='flex gap-7'>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3  border outline-black mt-5'type="text"placeholder="State/Territory" />  
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="USA" />
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span className='w-96 text-gray-500 ml-3 mt-2'>Save this address to my profile</span>
</label>
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span className='w-96 text-gray-500 ml-3 mt-2'>Make this my preferred address</span>
</label>
  </li>
  <h2 className='text-2xl font-bold mt-5'>What's your contact information?</h2>
  <li><input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="First Name" />
  <p className=' text-gray-500 ml-5'>A confirmation email will be sent after checkout.</p>
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Last Name" />
    <p className=' text-gray-500 ml-5'>A carrier might contact you to confirm delivery.</p>
</li>
<h2 className='text-2xl font-bold mt-5'>What's your PAN?</h2>
  <li><input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="PAN" />
  <p className='text-sm text-gray-500 w-80 mt-5'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span className='w-96 text-gray-500 ml-3 mt-2'>Save PAN details to Nike Profile</span>
</label>
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span className='w-96 text-gray-500 ml-3 mt-8'>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</span>
</label>
  </li>
   <button className='bg-gray-200 p-4 rounded-full w-96 mt-8 text-gray-400'>Continue</button>
   <h2 className='text-2xl font-medium mt-10'>Delivery</h2>
   <p className='text-gray-500 mt-5'>Shipping</p><hr className='mt-5' />
   <p className='text-gray-500 mt-5'>Billing</p><hr className='mt-5' />
   <p className='text-gray-500 mt-5'>Payment</p><hr className='mt-5' />
      </ul>
      </div>
        </div>
      </div>
      <div className='mt-5'>
      <h2 className='text-2xl font-bold ml-10 mt-8'>Order Summary</h2>
      <p className='mt-6 ml-10 text-gray-400'>Delivery/Shipping</p><p className='ml-52 -mt-6 text-gray-400'>₹ 20 890.00</p>
      <p className='mt-6 ml-10 text-gray-400'>Free</p><p className='ml-52 -mt-6 text-gray-400'>₹ 20 890.00</p>
      <h2 className='text-2xl font-bold ml-10 mt-8'>Order Summary</h2>
      <p className='mt-6 ml-10 text-gray-400'>Free</p><p className='ml-52 -mt-6 text-gray-400'>₹ 20 890.00</p>
      <p className='text-sm ml-8 mt-5'>(The total reflects the price of your order, including all duties and taxes)</p>
      <h2 className='text-2xl font-bold ml-10 mt-8'>Arrives Mon, 27 Mar - Wed, 12 Apr</h2>
      <div>
        <img className='h-[30vh] w-[30%] mt-5' src="shop/basketball.png" alt="card1" loading='lazy' />
        <p className=' flex justify-end -mt-48 ml-56 w-72'>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
       <p className='flex justify-center -ml-48 mt-2 text-gray-500'>Qty 1</p>
       <p className='flex justify-center -ml-48 mt-2 text-gray-500'>Size 1</p>
       <p className='flex justify-center -ml-36 mt-2 text-gray-500'>₹ 3 895.00</p>
      </div> 
      <div className='mt-20'>
        <img className='h-[30vh] w-[30%] mt-5' src="shop/card29.png" alt="card1" loading='lazy' />
        <p className=' flex justify-end -mt-48 ml-56 w-32'>Nike Air Max 97 SE Men's Shoes</p>
       <p className='flex justify-center -ml-48 mt-2 text-gray-500'>Qty 1</p>
       <p className='flex justify-center -ml-48 mt-2 text-gray-500'>Size 1</p>
       <p className='flex justify-center -ml-36 mt-2 text-gray-500'>₹ 2 895.00</p>
      </div> 




      </div>
     </div>
     <Footer/>
    </div>
  );
}
