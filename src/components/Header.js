import React from 'react'
import Navbar from './Navbar'
import spectraLogo from '../assets/fotos/logos/spectra-logo.png'
import priasLogo from '../assets/fotos/logos/prias-logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <Link className='logoContainer' to='/'>
          <img className='spectra-logo' src={spectraLogo} alt = 'Spectra Logo'/>
          <img className='prias-logo' src={priasLogo} alt='PRIAS logo'/>
        </Link>
    <Navbar/>
  </div>
  )
}

export default Header