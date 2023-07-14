import React, { useState, useEffect } from 'react'
import {SiNike} from 'react-icons/si'
import AOS from "aos"
import "aos/dist/aos.css"

const OfferCard = ({Icon, Title, animation}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1400
        }, []);    
  });

  return (
    <div data-aos={animation}
      className={`flex flex-col items-center space-y-3 p-4 rounded-lg w-full md:w-64 bg-white group transition-all duration-300 cursor-pointer
      ${ isHovered ? 'hover:bg-black' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
        <div className='flex items-center justify-center bg-gray-100 rounded-full p-6 group-hover:p-8'>
            <Icon size={80}/>
        </div>
        <h1 className='monument text-center font-medium text-lg text-yellowor group-hover:text-redor'>{Title}</h1>
        <p className='text-center group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, culpa aliquid nisi! Blanditiis, nulla. Vero sint.</p>
        <div className='w-16'>
            <SiNike color={isHovered ? '#ffffff' : '#000000'} size={50}/>
        </div>
    </div>
  )
}

export default OfferCard