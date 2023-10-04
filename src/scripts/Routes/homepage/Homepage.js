import React from 'react'

import Carrousel from './components/Carrousel'
import HomeHeader from './components/HomeHeader'

const homepage = () => {
  return (
    <div className='baseContainer'>
      <HomeHeader/>
      <Carrousel/>
    </div>
  )
}

export default homepage