import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='flex justify-center mt-20 pb-11'>
        <img className='h-[20vh] w-24' src="nikelogo.png" alt="logo" />
      </div>
      <div>
      <h2 className=' flex justify-center font-bold text-3xl text-center'>YOUR ACCOUNT <br></br> FOR  EVERYTHING NIKE</h2>
      <p className='flex justify-center p-5 text-center text-gray-500'>Create your Nike Member profile and get<br></br> first access to the very best of Nike<br></br> products, inspiration and community.</p>
      <div className='flex flex-wrap justify-center align-middle '>
      <ul>
        <li><input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Enter Your Email" /></li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Password" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="First Name" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Last Name" />
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Date of Birth"
   />
   <p className='text-gray-500 text-sm'>Get a Nike Member Reward every year on your Birthday.</p>
  </li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-96 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="USA" />
  </li>
  <li className='flex gap-7'>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3  border outline-black mt-5'type="text"placeholder="Male" />
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-44 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Female" />
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span className='w-96 text-gray-500 ml-3 mt-2'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
</label>
  </li>
      </ul>
      </div>
      <p className='flex justify-center mt-4 text-center text-gray-500 text-sm '>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.<br></br> and Terms of Use.</p>
      </div>
      <div className='flex justify-center mt-4'>
      <button className='bg-black flex justify-center text-white pt-2 pb-2 pr-8 pl-8 w-80 mt-4 mr-10'>JOIN US </button>
      </div>
      <div className='flex justify-center mt-4 '>
      <p className='text-gray-400'>Not a Member?<span className='text-black pb-2'> Join Us.</span></p>

      </div>
      <Footer/>
    </div>
  )
}

export default page
