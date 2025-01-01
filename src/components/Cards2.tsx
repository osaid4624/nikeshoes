// import React from 'react';

// const Cards1 = () => {
//   return (
//     <div className="flex space-x-8">  {/* Flex container to place the cards side by side */}
//       {/* Card 1 */}
//       <div>
//         <p className='p-4 mt-[100px] ml-10'>Best of Air Max</p>
//         <img className='p-4 ml-9 mt-1 w-[441.4px] h-[441.4px]' src="card img 2.png" alt="card img 2.png" />
//         <h3 className='ml-14 font-semibold'>Nike Air Max Pulse</h3>
//         <p className='ml-14'>Women's Shoes</p>
//         <p className='ml-[400px] -mt-10'>₹ 13 995</p>
//       </div>

//       {/* Card 2 */}
//       <div>
//         <img className='p-4 -ml-5 mt-[158] w-[441.4px] h-[441.4px]' src="card img 2.png" alt="card img 2.png" />
//         <h3 className='ml-2 font-semibold'>Nike Air Max Pulse</h3>
//         <p className='ml-2'>Women's Shoes</p>
//         <p className='ml-[320px] -mt-10'>₹ 13 995</p>
//       </div>
//       <div>
//       <img className='p-4 -ml-5 mt-[158] w-[441.4px] h-[441.4px]' src="card img 2.png" alt="card img 2.png" />
//         <h3 className='ml-2 font-semibold'>Nike Air Max Pulse</h3>
//         <p className='ml-2'>Women's Shoes</p>
//         <p className='ml-[320px] -mt-10'>₹ 13 995</p>
//       </div>
//     </div>
//   );
// };

// export default Cards1;
"use client";

import React, { useRef } from "react";

const Cards2 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cardData = [
    {
      title: "Nike Air Max Pulse",
      description: "Man Shoes",
      price: "₹ 13,995",
      image: "/card img 2.png",
    },
    {
      title: "Nike Air Max Pulse",
      description: "Men's Nacker",
      price: "₹ 13,995",
      image: "/card img3.png",
    },
    {
      title: "Nike Air Max 97 SE",
      description: "Woman",
      price: "₹ 15,995",
      image: "/card img 2.png",
    },
    {
      title: "Nike Air Max 97 SE",
      description: "Men's Troser",
      price: "₹ 15,995",
      image: "/card img3.png",
    },
    {
        title: "Nike Air Max 97 SE",
        description: "Men's Nacker",
        price: "₹ 15,995",
        image: "/nacker1.png",
      },
      {
        title: "Nike Air Max 97 SE",
        description: "Woman",
        price: "₹ 15,995",
        image: "/woman1.png",
      },
  ];

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-8 py-6 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium">Best of Air Max</h2>
        <p className="flex ml-[900]">Shop Now</p>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleScrollLeft}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
          >
            &#8249;
          </button>
          <button
            onClick={handleScrollRight}
            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 border border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full  object-cover h-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
              <p className="text-lg font-semibold mt-2">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards2;
