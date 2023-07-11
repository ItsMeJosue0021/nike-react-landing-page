import React from 'react'
import {FiArrowRightCircle} from 'react-icons/fi'

const NewsLetter = () => {
  return (
    <div className='bg-newsletter bg-cover' >
        <div className='bg-black bg-opacity-70'>
            <div className='flex space-y-10 flex-col items-center justify-center max-w-[1240px] mx-auto px-4 py-16'>
                <h1 className='monument text-white text-4xl text-center '>Join Our <span className='text-redor'>News Letter</span></h1>
                <p className='text-center w-full md:w-1/2 font-medium text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit a beatae corrupti tempora reiciendis nesciunt provident odio ducimus, nemo corporis?</p>
                <div className='w-full md:w-1/2 flex items-center justify-between p-2 rounded bg-white'>
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='px-4 text-sm active:outline-none outline-none w-full'/>
                    <span className='p-2 rounded flex items-center justify-center bg-redor'>
                        <FiArrowRightCircle color='#ffffff' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter