import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import Header from '../../Header'
import Footer from '../../Footer'
import Slider from './components/misc/Slider'
import SpectraMap from './components/map/SpectraMap'
import SpectraTable from './components/table/SpectraTable'


const Spectra = () => {

  const [tableState, setTableState] = useState()

  const location = useLocation()

  useEffect(() => { // read csv data
    if (tableState !== 'loading') {
      if (tableState !== 'error') {
        setTableState(location.state)
      }
    } // eslint-disable-next-line
  }, [location.state]); // Run only when location.state changes

  const changeView = () => {
    if (tableState === 'table') {
      setTableState('map')
    } else {
      setTableState('table')
    }
  }

  return (
    <div className='baseContainer'> 
      <Header/>
      <div className='spectraContainer'>
        <div className='spectraHeaderContainer'>
          <p className='title'>Firmas Espectrales</p>
          <Slider tableState = {tableState} onClick = {changeView}/>
        </div>
        {tableState === 'map' ?
          <SpectraMap tableState = {tableState} setTableState = {setTableState}/>
          :
          <SpectraTable tableState = {tableState} setTableState = {setTableState} location = {location}/>
        }
     </div>
    <Footer/>
    </div>
  )
}

export default Spectra