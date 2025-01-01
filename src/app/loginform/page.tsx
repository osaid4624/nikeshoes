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
      <div className='flex flex-wrap justify-center align-middle '>
      <ul>
        <li><input 
  className='text-red-300 text-left pr-4 pl-4 w-80 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Enter Your Email" /></li>
  <li>
  <input 
  className='text-red-300 text-left pr-4 pl-4 w-80 pt-3 pb-3 border outline-black mt-5'type="text"placeholder="Password" />
  </li>
  <li className='mt-4'>
  <label className="flex items-center gap-2">
  <input type="checkbox" name="" id="" />
  <span>Keep me logged in</span>
  <p className='font-light text-gray-500 text-sm'>Forgotten your password?</p>
</label>
  </li>
      </ul>
      </div>
      <p className='flex justify-center mt-4 text-center text-gray-500'>By logging in, you agree to Nike's Privacy Policy<br></br> and Terms of Use.</p>
      </div>
      <div className='flex justify-center mt-4'>
      <button className='bg-black flex justify-center text-white pt-2 pb-2 pr-8 pl-8 w-80'>Sing In </button>
      </div>
      <div className='flex justify-center mt-4'>
      <p className='text-gray-400'>Not a Member?<span className='text-black pb-2'> Join Us.</span></p>

      </div>
      <Footer/>
    </div>
  )
}

export default page
