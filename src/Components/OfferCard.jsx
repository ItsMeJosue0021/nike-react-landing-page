import React from 'react'
import Logo from '../Images/logo.png'

const OfferCard = ({Icon, Title}) => {
  return (
    <div className='flex flex-col items-center space-y-3 p-4 rounded-lg w-64 bg-white'>
        <div className='flex items-center justify-center bg-gray-100 rounded-full p-6'>
            <Icon size={80}/>
        </div>
        <h1 className='monument text-center font-medium text-lg text-yellowor'>{Title}</h1>
        <p className='text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, culpa aliquid nisi! Blanditiis, nulla. Vero sint.</p>
        <div className='w-16'>
            <img src={Logo} alt="logo" className='w-full'/>
        </div>
    </div>
  )
}

export default OfferCard