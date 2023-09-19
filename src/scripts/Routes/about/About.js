import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import OurTeam from '../about/components/OurTeam'
import InfoPRIAS from './components/InfoPRIAS'
const About = () => {
  return (
    <div className='baseContainer'>
        <Header/>
        <InfoPRIAS/>
        <OurTeam/>
        <Footer/>
    </div>
  )
}

export default About