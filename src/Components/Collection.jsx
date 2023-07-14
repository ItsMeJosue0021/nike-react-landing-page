import React from 'react'
import Shoe1 from '../Images/shoe1.png'
import Shoe2 from '../Images/shoe2.png'
import Shoe3 from '../Images/shoe3.png'
import Shoe4 from '../Images/shoe4.png'
import Shoe5 from '../Images/shoe5.png'
import Shoe6 from '../Images/shoe6.png'
import CollectionCard from './CollectionCard'
import Arrows from './Arrows'

const Collection = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1240px] mx-auto px-4 py-16'>
        <h1 className='monument text-4xl '>Our <span className='text-redor'>collection</span></h1>
        <ul className='w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly py-10'>
            <li className='text-xl monument font-medium'>Boots</li>
            <li className='text-xl monument font-medium text-yellowor'>Shoes</li>
            <li className='text-xl monument font-medium'>Sandals</li>
            <li className='text-xl monument font-medium'>Slipper</li>
            <li className='text-xl monument font-medium'>Sport Shoe</li>
        </ul>
        <div className='flex flex-wrap gap-8 justify-center'>
            <CollectionCard shoeImage={Shoe1} animation="flip-left"/>
            <CollectionCard shoeImage={Shoe2} animation="flip-right"/>
            <CollectionCard shoeImage={Shoe3} animation="flip-left"/>
            <CollectionCard shoeImage={Shoe4} animation="flip-right"/>
            <CollectionCard shoeImage={Shoe5} animation="flip-left"/>
            <CollectionCard shoeImage={Shoe6} animation="flip-right"/> 
        </div>
        <Arrows />
    </div>
  )
}

export default Collection