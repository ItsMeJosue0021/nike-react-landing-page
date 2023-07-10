import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Offers from './Offers'
import Collection from './Collection'
import Feedback from './Feedback'

const Body = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Stats />
        <Offers />
        <Collection />
        <Feedback />
    </div>
  )
}

export default Body