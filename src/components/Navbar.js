import React from 'react'
import {Link,useLocation} from 'react-router-dom'

import { RouteTypes } from './types/types.tsx'
const Navbar = () => {
    var location = useLocation()

  return (
    <div className='navbarContainer'>
        <Link className={location.pathname === '/' ? 'button active':'button'} to='/'>
            <p className='subtitle'>Inicio</p>
        </Link>
        <Link className={location.pathname === '/spectra' ? 'button active':'button'} to='/spectra' state={RouteTypes.TABLE}>
            <p className='subtitle'>Spectra</p>
        </Link>
        <Link className={location.pathname === '/about' ? 'button active':'button'} to='/about'>
            <p className='subtitle'>Sobre nosotros</p>
        </Link>
        <Link className={location.pathname === '/equipo' ? 'button active':'button'} to='/equipo'>
            <p className='subtitle'>Equipo</p>
        </Link>
        <Link className={location.pathname === '/trabajos' ? 'button active':'button'} to='/trabajos'>
            <p className='subtitle'>Trabajos Realizados</p>
        </Link>
        <Link className={location.pathname === '/contacto' ? 'button active':'button'} to='/contacto'>
            <p className='subtitle'>Contacto</p>
        </Link>
    </div>
  )
}

export default Navbar