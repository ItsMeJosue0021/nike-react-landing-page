import React from 'react'

const Stats = () => {
  return (
    <div className='flex items-center justify-around max-w-[1240px] mx-auto px-4 py-14'>
        <div className='flex items-center justify-center space-x-2 w-full border-r border-redor py-2'>
            <h1 className='text-redor text-3xl monument '>20k+</h1>
            <p className='font-medium'>Orders Completed</p>
        </div>
        <div className='flex items-center justify-center space-x-2 w-full border-r border-redor py-2'>
            <h1 className='text-redor text-3xl monument '>40k+</h1>
            <p className='font-medium'>Regular Visitors</p>
        </div>
        <div className='flex items-center justify-center space-x-2 w-full py-2'>
            <h1 className='text-redor text-3xl monument '>15k+</h1>
            <p className='font-medium'>Happy Customers</p>
        </div>
    </div>
  )
}

export default Stats