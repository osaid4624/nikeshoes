import React from 'react';

const Banner3 = () => {
  return (
   <div className='mt-[100]'>
    <h2 className='mt-5 font-[500] ml-7 text-[23px]'>Don't Miss</h2>
    <img className='p-6' src="Banner2.png" alt="Banner2.png" />
    <h1 className='flex justify-center font-[500] text-[54px] font-Helvetica Neue'>FLIGHT ESSENTIALS</h1>
    <p className='flex justify-center font-[400] text-[15px]'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
   <div className='flex justify-center items-center'>
   <button className='flex justify-start mt-4 bg-black text-white pt-2 pr-[24px] pl-[24px] pb-2 rounded-full'>Shop</button>
   </div>
   </div>
  );
};

export default Banner3;
