import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/fotos/prias_logo.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='headerContainer'>
        <Link className='logoContainer' to='/'>
            <p className='title spectra'>Spectra</p>
            <img className='logo' src={logo} alt='Logo PRIAS'></img>
        </Link>
    <Navbar/>
  </div>
  )
}

export default Header