import React from 'react';

const Catogeries = () => {
  return (
    <div className='flex space-x-6 mt-11 justify-center gap-32'>
        <div>
            <ul>
                <h2 className='font-semibold'>Icons</h2>
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2 className='font-semibold'>Shoes</h2>
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2 className='font-semibold'>Clothing</h2>
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2 className='font-semibold'>Kids'</h2>
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
            </ul>
        </div>
    </div>
  );
};

export default Catogeries;
