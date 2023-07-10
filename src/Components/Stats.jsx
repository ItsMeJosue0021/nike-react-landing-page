import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-around max-w-[1240px] mx-auto px-4 py-14'>
        <div className='flex items-center justify-center space-x-2 w-full border-0 md:border-r border-redor py-2'>
            <h1 className='text-redor text-xl md:text-3xl monument '>20k+</h1>
            <p className='font-medium'>Orders Completed</p>
        </div>
        <div className='flex items-center justify-center space-x-2 w-full border-0 md:border-r border-redor py-2'>
            <h1 className='text-redor text-xl md:text-3xl monument '>40k+</h1>
            <p className='font-medium'>Regular Visitors</p>
        </div>
        <div className='flex items-center justify-center space-x-2 w-full py-2'>
            <h1 className='text-redor text-xl md:text-3xl monument '>15k+</h1>
            <p className='font-medium'>Happy Customers</p>
        </div>
    </div>
  )
}

export default Stats