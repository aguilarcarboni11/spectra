import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {
    var location = useLocation()

  return (
    <div className='navbarContainer'>
        <Link className={location.pathname === '/' ? 'navbarButtonActive':'navbarButton'} to='/'>
            <p className='navbarText'>Inicio</p>
        </Link>
        <Link className={location.pathname === '/about' ? 'navbarButtonActive':'navbarButton'} to='/about'>
            <p className='navbarText'>Sobre nosotros</p>
        </Link>
        <Link className={location.pathname === '/spectra' ? 'navbarButtonActive':'navbarButton'} to='/spectra' state={'table'}>
            <p className='navbarText' state={'table'}>Spectra</p>
        </Link>
        <Link className={location.pathname === '/equipo' ? 'navbarButtonActive':'navbarButton'} to='/equipo'>
            <p className='navbarText'>Equipo</p>
        </Link>
        <Link className={location.pathname === '/trabajos' ? 'navbarButtonActive':'navbarButton'} to='/trabajos'>
            <p className='navbarText'>Trabajos Realizados</p>
        </Link>
        <Link className={location.pathname === '/contacto' ? 'navbarButtonActive':'navbarButton'} to='/contacto'>
            <p className='navbarText'>Contacto</p>
        </Link>
    </div>
  )
}

export default Navbar