import React from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Arrows = () => {
  return (
    <div className='flex items-center space-x-8 pt-8'>
        <BsArrowLeft size={40}/>
        <BsArrowRight size={40}/>
    </div>
  )
}

export default Arrows