import React from 'react';

const BottomCards = () => {
  return (
   <div className='flex space-x-4 mt-[100] p-10 justify-center'>
    <div>
   <img className='h-[60vh] w-[100%] relative' src="newcards.png" alt="newcards.png" />
   <button className='bg-white text-black pt-3 pr-6 pl-6 pb-3 rounded-full absolute -mt-[100] ml-4'>Men's</button>
   </div>
   <div>
   <img className='h-[60vh] w-[100%] ' src="newcards2.png" alt="newcards2.png" />
   <button className='bg-white text-black pt-3 pr-6 pl-6 pb-3 rounded-full absolute -mt-[100] ml-4'>Woman</button>
   </div>
   <div>
   <img className='h-[60vh] w-[100%] ' src="newcards3.png" alt="newcards3.png" />
   <button className='bg-white text-black pt-3 pr-6 pl-6 pb-3 rounded-full absolute -mt-[100] ml-4'>Kids'</button>
   </div>
   </div>
  );
};

export default BottomCards;
