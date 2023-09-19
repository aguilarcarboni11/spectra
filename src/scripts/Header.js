import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/fotos/misc/prias_logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='logoContainer'>
        <Link className='logoButton' to='/'>
          <p className='spectra'>Spectra</p>
        </Link>
        <img className='logo' src={logo} alt='Logo PRIAS'></img>
      </div>
    <Navbar/>
  </div>
  )
}

export default Header