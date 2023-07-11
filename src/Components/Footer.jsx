import React from 'react'
import {SiNike} from 'react-icons/si'
import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-between space-y-6 max-w-[1240px] mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6'>
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6'>
                <SiNike size={100}/>
                <p className='text-sm text-gray-600 text-center md:text-left'>Lorem ipsum, sunt maiores numquam odio fugit, deserunt dicta voluptatibus molestiae tempore? Nesciunt, enim consequatur assumenda totam amet corporis.</p>
                <ul className='flex items-center space-x-4'>
                    <li className='p-2 bg-redor'>
                        <BiLogoFacebook color='#ffffff' size={20}/>
                    </li>
                    <li className='p-2 bg-redor'>
                        <BiLogoInstagram color='#ffffff' size={20}/>
                    </li>
                    <li className='p-2 bg-redor'>
                        <BiLogoTwitter color='#ffffff' size={20}/>
                    </li>
                    <li className='p-2 bg-redor'>
                        <BiLogoLinkedin color='#ffffff' size={20}/>
                    </li>
                </ul>
            </div>

            <div className='w-full md:w-1/2 flex flex-col  md:flex-row items-center md:items-start space-y-4 md:space-y-0 justify-between'>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-sm text-gray-800 monument font-medium text-center md:text-left' >Quick Links</h1>
                    <ul className='flex flex-col space-y-2'>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Home</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>About Us</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Shop</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Testimonial</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Collections</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-sm text-gray-800 monument font-medium text-center md:text-left' >Find Products</h1>
                    <ul className='flex flex-col space-y-2'>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Terms & Conditions</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Privacy Policy</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Return Policy</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Payment Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-sm text-gray-800 monument font-medium text-center md:text-left'>Get Help</h1>
                    <ul className='flex flex-col space-y-2'>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>FAQ</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Contact Us</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Track Orders</li>
                        <li className='text-sm text-gray-600 hover:text-redor hover:underline cursor-pointer text-center md:text-left'>Refund</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center w-full border-t border-gray-300 py-4'>
            <p className='flex items-center text-sm text-gray-700 font-medium'>
                <BiCopyright size={20} className='mr-1'/>
                2023 all rights reserved | Joshua Salceda
            </p>
        </div>
        
    </div>
  )
}

export default Footer