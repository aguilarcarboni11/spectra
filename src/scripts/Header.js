import React from 'react'
import Navbar from './Navbar'
import spectraLogo from '../assets/fotos/logos/spectra-logo.png'
import spectraText from '../assets/fotos/logos/spectra-text-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <Link className='logoContainer' to='/'>
          <img className='logoSpectra' src={spectraLogo} alt = 'Spectra Logo'></img>
          <img className='logoText' src={spectraText} alt = 'Spectra Text'></img>
        </Link>
    <Navbar/>
  </div>
  )
}

export default Header