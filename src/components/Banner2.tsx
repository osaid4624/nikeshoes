import React from 'react';

const Banner2 = () => {
  return (
   <div>
    <h2 className='mt-5 font-[500] ml-7 text-[23px]'>Featured</h2>
    <img className='p-6' src="card drop img.jpg" alt="card drop img.jpg" />
    <h1 className='flex justify-center font-[500] text-[54px] font-Helvetica Neue'>STEP INTO WHAT FEELS GOOD</h1>
    <p className='flex justify-center font-[400] text-[15px]'>Cause everyone should know the feeling of running in that perfect pair.</p>
   <div className='flex justify-center items-center'>
   <button className='flex justify-start mt-4 bg-black text-white pt-3 pr-[22] pl-[21] pb-3 rounded-full'>Find Your Shoe</button>
   </div>
   </div>
  );
};

export default Banner2;
