import React from 'react';

const Hero = () => {
  return (
   
    <div className='bg-#F5F5F5'>
        <h2 className='flex justify-center mt-4 font-Helvetica Neue font-semibold'>Hello Nike App</h2>
        <p className='flex justify-center'>Download the app to access everything Nike. Get Your Great</p>
        <img className='p-6' src="banner img.png" alt="banner.img" />
        <h3 className='flex justify-center mt-8 font-semibold'>First Look</h3>
        <h1 className='flex justify-center text-5xl font-semibold mt-3 font-Helvetica Neue'>Nike Air Max Pulse</h1>
        <p className='flex justify-center mt-6 font-Helvetica Neue font-normal'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br></br>
        —designed to push you past your limits and help you go to the max.</p> 
        <div className='flex space-x-4 justify-center mt-6'>
            <button className='bg-black text-white pt-3 pr-[22] pl-[21] pb-3 rounded-full'>Notify Me</button>
            <button className='bg-black text-white pt-3 pr-[22] pl-[21] pb-3 rounded-full'>Shop Air Max</button>
        </div>
    </div>
  );
};

export default Hero;
