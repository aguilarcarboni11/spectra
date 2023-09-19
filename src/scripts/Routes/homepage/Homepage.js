import React from 'react'
import Header from '../../Header'
import Carrousel from './components/Carrousel'
import Footer from '../../Footer'
import HomeHeader from './components/HomeHeader'

const homepage = () => {
  return (
    <div className='baseContainer'>
      <Header/>
      <HomeHeader/>
      <Carrousel/>
      <Footer/>
    </div>
  )
}

export default homepage