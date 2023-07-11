import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Offers from './Offers'
import Collection from './Collection'
import Feedback from './Feedback'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import TopItem from './TopItem'

const Body = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Stats />
        <Offers />
        <Collection />
        <TopItem />
        <Feedback />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Body