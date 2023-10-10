import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import useWindowDimensions from './components/hooks/useWindowDimensions'

import Header from './components/Header'
import Homepage from './components/routes/homepage/Homepage'
import About from './components/routes/about/About'
import Spectra from './components/routes/spectra/Spectra'
import Contact from './components/routes/contact/Contact'
import Works from './components/routes/works/Works'
import Tools from './components/routes/tools/Tools'
import Footer from './components/Footer'

function App() {

  const { height, width } = useWindowDimensions();
  
  return (
    <Router>
      <Header/>
      <Routes>
          <Route  path='/' element={width > height ? <Homepage/>:''}/>
          <Route path='/about' element={width > height ? <About/>:''} />
          <Route path='/spectra' element={width > height ?<Spectra/>:''} />
          <Route path='/equipo' element={width > height ? <Tools/>:''} />
          <Route path='/trabajos' element={width > height ? <Works/>:''} />
          <Route path='/contacto' element={width > height ? <Contact/>:''} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App