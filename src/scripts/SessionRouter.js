import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Routes/homepage/Homepage'
import About from './Routes/about/About'
import Spectra from './Routes/spectra/Spectra'
import Contact from './Routes/contact/Contact'
import Works from './Routes/works/Works'
import Tools from './Routes/tools/Tools'

const SessionRouter = () => {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
        <div>
          <Router>
            <Routes>
                <Route  path='/' element={windowSize[0] > 1.5*windowSize[1] ? <Homepage/>:''}/>
                <Route path='/about' element={windowSize[0] > 1.5*windowSize[1] ? <About/>:''} />
                <Route path='/spectra' element={windowSize[0] > 1.5*windowSize[1] ?<Spectra/>:''} />
                <Route path='/equipo' element={windowSize[0] > 1.5*windowSize[1] ? <Tools/>:''} />
                <Route path='/trabajos' element={windowSize[0] > 1.5*windowSize[1] ? <Works/>:''} />
                <Route path='/contacto' element={windowSize[0] > 1.5*windowSize[1] ? <Contact/>:''} />
            </Routes>
          </Router>
        </div>
    </div>
  )
}

export default SessionRouter