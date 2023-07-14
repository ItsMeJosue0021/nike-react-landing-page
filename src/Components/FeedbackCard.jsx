import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const FeedbackCard = ({Image, Name, Job, animation}) => {

  useEffect(() => {
    AOS.init({
        offset: 150,
        duration: 1400
    });
  });

  return (
    <div className='flex flex-col space-y-6 w-80 rounded-lg border border-gray-300 p-6' data-aos={animation}>
        <div className='flex items-center space-x-3'>
            <img src={Image} alt="" className='w-14 h-14 rounded-full'/>
            <div>
                <p className='monument text-xs text-yellowor'>{Name}</p>
                <p className='font-medium text-[12px]'>{Job}</p>
            </div>
        </div>
        <p className='font-medium text-sm text-gray-600 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum autem aspernatur minima exercitationem et aut. Nostrum autem aspernatur minima exercitationem et aut. Nostrum autem aspernatur minima exercitationem et aut.</p>
    </div>
  )
}

export default FeedbackCard