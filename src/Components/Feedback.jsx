import React from 'react'
import Male from '../Images/male.jpg'
import Female from '../Images/female.jpg'
import FeedbackCard from './FeedbackCard'
import Arrows from './Arrows'

const Feedback = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1240px] mx-auto px-4 pt-16 pb-10'>
        <h1 className='monument text-4xl text-center'>What our <span className='text-redor'>clients say</span></h1>
        <h1 className='monument text-4xl text-center'>about us</h1>
        <div className='flex flex-wrap gap-6 justify-center pt-14'>
            <FeedbackCard Image={Male} Name={"Joshua Salceda"} Job={"Web Developer"} animation={"fade-up"}/>
            <FeedbackCard Image={Female} Name={"Maricar Marinez"} Job={"Engineer"} animation={"fade-down"}/>
            <FeedbackCard Image={Male} Name={"Juan Bautista"} Job={"Rapper"} animation={"fade-up"}/>  
        </div>
        <Arrows />
    </div>
  )
}

export default Feedback