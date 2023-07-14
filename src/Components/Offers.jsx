import React, { useEffect } from 'react'
import {BsCoin} from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'
import {LiaPercentageSolid} from 'react-icons/lia'
import {GiNotebook} from 'react-icons/gi'
import {SiNike} from 'react-icons/si'
import OfferCard from './OfferCard'
import AOS from "aos"
import "aos/dist/aos.css"


const Offers = () => {

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1400
        });
    });

  return (
    <div className='bg-gray-100'>
        <div className='flex flex-col items-center justify-center max-w-[1240px] mx-auto px-4 py-16'>
            <h1 className='monument text-4xl text-center md:text-left'>What we <span className='text-redor'>offer</span></h1>
            <div className='flex flex-wrap gap-4 items-center justify-center pt-10'>
               <OfferCard Icon={MdSupportAgent} Title={"24/7 Support"} animation="fade-up"/>
               <OfferCard Icon={BsCoin} Title={"Cash Back"} animation="fade-down"/>
               <OfferCard Icon={LiaPercentageSolid} Title={"Monthly Offer"} animation="fade-up"/>
               <div data-aos="fade-down" className='flex flex-col items-center space-y-3 p-4 rounded-lg w-full md:w-64 bg-black cursor-pointer'>
                    <div className='flex items-center justify-center bg-gray-100 rounded-full p-8'>
                        <GiNotebook size={80}/>
                    </div>
                    <h1 className='monument text-center font-medium text-lg text-redor'>Membership</h1>
                    <p className='text-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, culpa aliquid nisi! Blanditiis, nulla. Vero sint.</p>
                    <div className='w-16'>
                        <SiNike color='#ffffff' size={50}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers