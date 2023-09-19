import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import Header from '../../Header'
import Footer from '../../Footer'
import Slider from './components/misc/Slider'
import SpectraMap from './components/map/SpectraMap'
import SpectraTable from './components/table/SpectraTable'


const Spectra = () => {

  const [tableState, setTableState] = useState('loading')
  const [isMap, setMap] = useState(false)

  const location = useLocation()

  useEffect(() => { // read csv data
    if (tableState === 'loading') {
      if (location.state === 'map') {
        const timeout = setTimeout(() => {
          setTableState('map');
          setMap(true)
        }, 2000);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTableState('home');
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [location.state, tableState]);

  const changeView = () => {
    if (isMap) {
      setMap(false)
      setTableState('home')
    } else {
      setMap(true)
      setTableState('map')
    }
  }

  return (
    <div className='baseContainer'> 
      <Header/>
      <div className='spectraContainer'>
        <div className='spectraHeaderContainer'>
          <p className='title'>Firmas Espectrales</p>
          <Slider isMap = {isMap} onClick = {changeView}/>
        </div>
        {isMap ?
          <SpectraMap tableState = {tableState} setTableState = {setTableState} isMap = {isMap}/>
          :
          <SpectraTable tableState = {tableState} setTableState = {setTableState}/>
        }
     </div>
    <Footer/>
    </div>
  )
}

export default Spectra