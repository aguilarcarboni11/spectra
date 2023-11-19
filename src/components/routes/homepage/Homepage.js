import React from 'react'

import Carousel from './components/Carousel'
import HomeHeader from './components/HomeHeader'

const homepage = () => {
  return (
    <div className='homepageContainer'>
      <HomeHeader/>
      <Carousel/>
    </div>
  )
}

export default homepage