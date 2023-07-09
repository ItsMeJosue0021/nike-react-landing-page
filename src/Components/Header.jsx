import React from 'react'
import Logo from '../Images/logo.png'
import {FiSearch} from 'react-icons/fi'
import {HiShoppingCart, HiMenu} from 'react-icons/hi'
import {BiUser} from 'react-icons/bi'

const Header = () => {
  return (
    <header className='flex items-center justify-between max-w-[1240px] mx-auto px-4'>
        <div className=' w-24 md:w-36'>
            <img src={Logo} alt="logo" className='w-full'/>
        </div>
        <ul className='hidden md:flex items-center space-x-2'>
            <li className='p-2 px-4 font-medium text-base hover:bg-gray-100 rounded cursor-pointer text-yellowor'>Home</li>
            <li className='p-2 px-4 font-medium text-base hover:bg-gray-100 rounded cursor-pointer hover:text-yellowor'>About</li>
            <li className='p-2 px-4 font-medium text-base hover:bg-gray-100 rounded cursor-pointer hover:text-yellowor'>Shop</li>
            <li className='p-2 px-4 font-medium text-base hover:bg-gray-100 rounded cursor-pointer hover:text-yellowor'>Testimonials</li>
            <li className='p-2 px-4 font-medium text-base hover:bg-gray-100 rounded cursor-pointer hover:text-yellowor'>Collections</li>
        </ul>
        <div className='hidden md:flex items-center space-x-2'>
            <FiSearch size={20} className='cursor-pointer'/>
            <HiShoppingCart size={20} color='#fbb239' className='cursor-pointer'/>
            <BiUser size={20} className='cursor-pointer'/>
        </div>
        <div className='flex md:hidden'>
            <HiMenu size={20} className='cursor-pointer'/>
        </div>
    </header>
  )
}

export default Header