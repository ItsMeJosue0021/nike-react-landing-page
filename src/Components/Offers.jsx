import React from 'react'
import {BsCoin} from 'react-icons/bs'
import {MdSupportAgent} from 'react-icons/md'
import {LiaPercentageSolid} from 'react-icons/lia'
import {GiNotebook} from 'react-icons/gi'
import {SiNike} from 'react-icons/si'
import OfferCard from './OfferCard'


const Offers = () => {
  return (
    <div className='bg-gray-100'>
        <div className='flex flex-col items-center justify-center max-w-[1240px] mx-auto px-4 py-16'>
            <h1 className='monument text-4xl '>What we <span className='text-redor'>offer</span></h1>
            <div className='flex items-center justify-center space-x-4 py-10'>
               <OfferCard Icon={MdSupportAgent} Title={"24/7 Support"}/>
               <OfferCard Icon={BsCoin} Title={"Cash Back"}/>
               <OfferCard Icon={LiaPercentageSolid} Title={"Monthly Offer"}/>
               {/* <OfferCard Icon={GiNotebook} Title={"Membership"}/> */}
               <div className='flex flex-col items-center space-y-3 p-4 rounded-lg w-64 bg-black'>
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