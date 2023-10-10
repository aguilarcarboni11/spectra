import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {
    var location = useLocation()

  return (
    <div className='navbarContainer'>
        <Link className={location.pathname === '/' ? 'button active':'button'} to='/'>
            <p className='subtitle'>Inicio</p>
        </Link>
        <Link className={location.pathname === '/about' ? 'button active':'button'} to='/about'>
            <p className='subtitle'>Sobre nosotros</p>
        </Link>
        <Link className={location.pathname === '/spectra' ? 'button active':'button'} to='/spectra' state={'table'}>
            <p className='subtitle' state={'table'}>Spectra</p>
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