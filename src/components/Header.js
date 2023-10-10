import React from 'react'
import Navbar from './Navbar'
import spectraLogo from '../assets/fotos/logos/spectra-logo.png'
import spectraText from '../assets/fotos/logos/spectra-text-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <Link className='logoContainer' to='/'>
          <img className='logo' src={spectraLogo} alt = 'Spectra Logo'></img>
          <h1>Spectra</h1>
        </Link>
    <Navbar/>
  </div>
  )
}

export default Header