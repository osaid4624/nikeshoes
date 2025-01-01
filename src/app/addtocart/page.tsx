import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Header/>
      <div className='grid grid-cols-2'>
        <img className=' p-4 ml-10 mt-20' src="shop/nike grils.png" alt="img1" />
        <div>
        <h1 className=' p-4 ml-[50px] mt-20 text-3xl font-semibold'>Nike Air Force 1 
        PLT.AF.ORM</h1>
        <p className='ml-[68px] w-72'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
        <h2 className='font-semibold ml-[65px] mt-5 text-2xl'>₹ 8 695.00</h2>
        <button className='bg-black rounded-full ml-[65px] text-white pt-4 pb-4 pl-9 pr-9 mt-5' >  Add To Cart</button>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default page
