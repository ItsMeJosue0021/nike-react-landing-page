import React from 'react'
import {GoDotFill} from 'react-icons/go'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {HiShoppingCart} from 'react-icons/hi'
import Shoe from '../Images/shoe.png'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const TopItem = () => {
  return (
    <div className='bg-gray-100'>
        <div className='flex items-center justify-center max-w-[1240px] mx-auto px-4'>
            <div className='w-1/2 flex items-center justify-center relative py-8 px-12 bg-black'>
                <img src={Shoe} alt="" className='p-12 rounded-full bg-white'/>
                <div className='absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2'>
                    <img src={Shoe} alt="" className='w-16 rounded border border-gray-200 bg-black bg-opacity-50'/>
                    <img src={Shoe} alt="" className='w-16 rounded border border-gray-200 bg-black bg-opacity-50'/>
                    <img src={Shoe} alt="" className='w-16 rounded border border-gray-200 bg-black bg-opacity-50'/>
                    <img src={Shoe} alt="" className='w-16 rounded border border-gray-200 bg-black bg-opacity-50'/>
                </div>
                <div className='absolute top-12 left-12 flex space-x-2 bg-black bg-opacity-50 p-4 rounded border border-gray-200'>
                    <div className='flex flex-col items-center space-y-2'>
                        <h1 className='monument text-lg font-medium text-white'>Nike air max</h1>
                        <h2 className='monument text-2xl text-redor font-medium'>$32.00</h2>
                        <a href="#" className='px-4 py-2 bg-redor text-white font-medium text-sm flex items-center w-fit'>
                            <HiShoppingCart color='#ffffff' className='mr-2'/>
                            Add to cart
                        </a>
                        <div className='flex flex-col items-center'>
                            <p className='text-white text-sm'>4.8k Total Review</p>
                            <div className='flex items-center'>
                                <AiFillStar color='#fbb239' size={15}/>
                                <AiFillStar color='#fbb239' size={15}/>
                                <AiFillStar color='#fbb239' size={15}/>
                                <AiFillStar color='#fbb239' size={15}/>
                                <AiOutlineStar color='#fbb239' size={15}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start py-16 px-12 space-y-6 w-1/2'>
                <h1 className='monument text-4xl '>Top <span className='text-redor'>Items</span></h1>
                <h2 className='monument text-xl font-medium'>Unique features of latest & treding products</h2>
                <ul className='flex flex-col space-y-4'>
                    <li className='flex items-center space-x-3'>
                        <GoDotFill color='blue'/>
                        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                        <GoDotFill color='#fd5545' size={24} />
                        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum amet consectetur adipisicing elit.</p>
                    </li>
                    <li className='flex items-center space-x-3'>
                        <GoDotFill color='#000000'/>
                        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, earum.</p>
                    </li>
                </ul>
                <div className='w-full flex items-center justify-between py-4'>
                    <div className='flex items-center space-x-8'>
                        <BsArrowLeft size={35}/>
                        <BsArrowRight size={35}/>
                    </div>
                    <p className='monument text-2xl font-medium text-gray-600'><span className='text-redor'>1</span>/10</p>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default TopItem