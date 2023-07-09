import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

const HeroCard = ({imageUrl}) => {
  return (
    <div className='w-fit flex space-x-2 p-2 rounded bg-black'>
        <div className='w-20 bg-white p-2 rounded flex items-center justify-center'>
            <img src={imageUrl} alt="image" className='w-full'/>
        </div>
        <div>
            <p className='text-[8px] md:text-xs text-white'>AIR MAX 98 FLYLASE</p>
            <p className='text-[8px] text-gray-400'>14.5K</p>
            <p className='text-xs text-white flex items-center justify-between font-bold '>$189
                <AiFillHeart color='#fffff' size={12} />
            </p>
            <p className='text-[8px] md:text-xs text-white'>Some Text Here</p>
            <p className='text-yellowor text-[8px] md:text-xs'>Add to Cart</p>
        </div>
    </div>
  )
}

export default HeroCard