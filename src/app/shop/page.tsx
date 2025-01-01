import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'
import { FaChevronDown, FaFilter } from 'react-icons/fa'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Header/>
     <div className="flex p-4 mt-10 ml-10">
        {/* Sidebar */}
        <div className="w-1/4 mr-10 border-r-8 h-[50vh]">
            <h2>New (500)</h2>
            <ul>
                <li>Shoes</li>
                <li>Sports Bras</li>
                <li>Tops & T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
            </ul><br/>
            <ul>
                <li>
                    <h2 className="font-bold">Gender</h2><br/>
                    <label htmlFor="">
                        <span>Men</span>
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" /><br/>
                        <span>Woman</span>
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" /><br/>
                        <span>Unisex</span>
                    </label>
                </li>
            </ul><br/>
            <ul>
                <h2 className="font-bold">Kids</h2><br/>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" />
                        <span>Boys</span>
                    </label><br/>
                    <label htmlFor="">
                        <input type="checkbox" />
                        <span>Girls</span>
                    </label>
                </li>
            </ul>
            <ul>
                <li>
                    <h2 className="font-bold">Shop By Price</h2><br/>
                    <label htmlFor="">
                        <input type="checkbox" />
                        <span>Under ₹ 2 500.00</span>
                    </label><br/>
                    <label htmlFor="">
                        <input type="checkbox" />
                        <span>₹ 2 501.00 - ₹ 7 500.00</span>
                    </label>
                </li>
            </ul>
        </div>

        {/* Product Grid */}
        <div className="w-3/4">
            <ul className="flex justify-end mr-10 gap-10">
                <li>Hide Filter</li>
                <li><FaFilter className='-ml-8 mt-1'/></li>
                <li>Sort By</li>
                <li><FaChevronDown className='mt-1 -ml-7'/></li>
            </ul>
            <div className="h-auto w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
                {/* Product Card 1 */}
                <div className=" p-2">
                    <img className="w-full h-auto" src="shop/nike loong.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Air Force 1 Mid '07</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2  className="font-bold">MRP : ₹ 10 795.00</h2>
                </div>
                {/* Product Card 2 */}
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/blue green.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Court Vision Low Next Nature</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 4 995.00</h2>
                </div>
                {/* Product Card 3 */}
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/nike grils.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Air Force 1 PLT.AF.ORM</p>
                    <p className='font-light text-gray-400'>Woman Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 695.00</h2>
                </div>
                {/* Product Card 4 */}
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/nike.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Air Force 1 React</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 13 295.00</h2>
                </div>
                {/* Product Card 5 */}
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/need white.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Blazer Low '77 Jumbo</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 11 895.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/gym suit.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Air Jordan 1 Elevate Low</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 2 895.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/shirt.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Standard Issue</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 9 695.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/white shirt.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Dunk Low Retro SE</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className='font-bold'>MRP : ₹ 2 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/red airmax.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Dri-FIT UV Hyverse</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 5 695.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/yellow brazil.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Court Vision Low</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 2 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/purple.png" alt="card img3" />
                    <h3 className="font-medium mt-2 text-red-500">Just In</h3>
                    <p>Nike Dri-FIT Ready</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 3 395.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/white shoes.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike One Leak Protection: Period</p>
                    <p className='font-light text-gray-400' >Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8  495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/newo green.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Air Force 1 LV8 3</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 7 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/orange.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Blazer Low Platform</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 195.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/gym suit.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Gym Suit</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 195.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/gym suit man.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Air Force 1 '07</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 1 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/basketball.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Pro Dri-FIT</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 695.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/black man.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Dunk Low Retro</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 5 995.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/blue green.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Air Max SC</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 1 695.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/card1.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Dri-FIT UV Miler</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 6 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/card29.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Air Max SYSTM</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 2 195.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/fujio green.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Alate All U</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 7 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/full white.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Court Legacy Lift</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 3 095.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/black.png" alt="card img4" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Swoosh</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 595.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/nacker.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike SB Zoom Janoski OG+</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 3 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/orange.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Dri-FIT Run Division Rise 365</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 2 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/two child.jpg" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Dri-FIT Challenger</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 7 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/white shirt.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Jordan Series ES</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 3 895.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="shop/new articl.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Outdoor Play</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 2 495.00</h2>
                </div>
                <div className="p-2">
                    <img className="w-full h-auto" src="card img3.png" alt="card img3" />
                    <h3 className="font-medium text-red-500 mt-2">Just In</h3>
                    <p>Nike Sportswear Trend</p>
                    <p className='font-light text-gray-400'>Men Shows</p>
                    <p className='font-light text-gray-400'>1 Colour</p>
                    <h2 className="font-bold">MRP : ₹ 8 595.00</h2>
                </div>
            </div>
        </div>
     </div>
     <hr className='mt-10'/>
        <div className='flex flex-wrap  mt-32 '>
            <h2 className='font-bold text-2xl ml-48'>Related Categories</h2>
            <div className='flex flex-wrap gap-4 mt-4 ml-48'>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>Best Selling Products</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>Best Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>New Basketball Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>New Football Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>New Men's Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>New Running Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>Best Men's Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>New Jordan Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>Best Women's Shoes</button>
            <button className='rounded-[50px]  outline outline-gray-500 outline-1  pt-3 pb-3 pr-10 pl-10'>Best Training & Gym</button>
            </div>
        </div>
        <Footer/>
        </div>
  )
}
