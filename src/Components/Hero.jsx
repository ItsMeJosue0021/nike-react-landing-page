import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Shoe from '../Images/shoe.png'
import Shoe1 from '../Images/shoe1.png'
import Shoe2 from '../Images/shoe2.png'
import {GoDotFill} from 'react-icons/go'
import HeroCard from './HeroCard'
import HerroDots from './HerroDots'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-center justify-between max-w-[1240px] mx-auto px-4 py-6'>
        <div className='flex flex-col space-y-8'>
            <h1 className='monument text-5xl lg:text-6xl text-center lg:text-left'>Summer <br /> Collections</h1>
            <div className="w-full flex items-center justify-center lg:justify-start">
                <h2 className='monument text-4xl lg:text-5xl p-2 px-3 border border-redor text-redor w-fit'>2023</h2>
            </div>
            <div className='lg:w-96 w-full'>
                <p className='text-base font-medium text-center md:text-left w-full'>Find you shoes from our various collection. Here, shoes are endles and profit is also endless.</p>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start">
                <a href="#" className='bg-redor text-white font-semibold py-2 px-4 flex items-center w-fit rounded hover:bg-black transition-all duration-300'>
                    Shop Now
                    <BsFillArrowRightCircleFill color='#ffffff' size={12} className='ml-2'/>
                </a>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start">
                <div className='flex flex-col space-y-3 w-fit pt-3'>
                    <div className='flex items-center space-x-4'>
                        <HeroCard imageUrl={Shoe1}/>
                        <HeroCard imageUrl={Shoe2}/>    
                    </div>
                    <div className='flex w-full'>
                        <div className='flex w-full items-center justify-center'>
                            <GoDotFill color='#000000' />
                            <GoDotFill color='#4A5568' />
                            <GoDotFill color='#718096' />
                            <GoDotFill color='#A0AEC0' />
                            <GoDotFill color='#CBD5E0' />
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        <div className='h-[450px] md:h-fit w-full md:w-2/3 lg:w-1/2 p-6 rounded-3xl bg-gray-100 relative'>
            <h1 className='monument text-9xl text-white font-semibold absolute top-4 left-1/2 transform -translate-x-1/2'>NIKE</h1>
            <div className='w-full relative z-10'>
                <img src={Shoe} alt="image" className='' />
            </div>

            <div className='flex flex-col space-y-3 absolute bottom-12 right-14 z-20'>
                <h1 className='flex items-center monument font-medium text-sm'>Nike air max | 
                    <HerroDots />
                </h1>
                <div className='flex items-center space-x-4'>
                    <p className='text-2xl text-redor font-medium monument'>120 $</p>
                    <a className='px-4 py-1 border border-gray-700 text-xs font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>Buy Now</a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero