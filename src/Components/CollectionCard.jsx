import React, { useEffect } from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import AOS from "aos"
import "aos/dist/aos.css"

const CollectionCard = ({shoeImage, animation}) => {

    

  return (
    <div className='flex flex-col items-center justify-center space-y-4 group cursor-pointer'>
        <div data-aos={animation} className='w-[350px] h-72 bg-gray-100 p-12 py-16 flex items-center justify-center group-hover:bg-black relative'>  
            <div className='w-[80%] hidden group-hover:flex items-center justify-between absolute top-4'>
                <a href="#" className='bg-redor text-white monument text-[10px]  px-4 py-1'>Buy</a>
                <div className='flex items-center space-x-3'>
                    <HiShoppingCart color='#ffffff' />
                    <AiOutlineHeart color='#ffffff' />
                    <p className='flex items-center text-white'>4.8
                        <AiFillStar className='ml-1' color='#fd5545'/>
                    </p>
                </div>
            </div>
            <img src={shoeImage} alt="" />
            <div className='flex items-center space-x-4 absolute bottom-4'>
                <p className='monument text-sm text-medium group-hover:text-white'>$42.00</p>
                <p className='monument text-[10px] text-redor '>$65.00</p>
            </div>
        </div>
        <div className='flex'>
            <p className='monument text-base font-medium group-hover:text-yellowor'>Air</p>
            <h1 className='monument text-base font-medium px-3 underline underline-offset-8 group-hover:text-yellowor'>Max Pegasus</h1>
            <p className='monument text-base font-medium group-hover:text-yellowor'>37</p>
        </div>
    </div>
  )
}

export default CollectionCard