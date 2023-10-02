import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import Header from '../../Header'
import Footer from '../../Footer'
import Slider from './components/misc/Slider'
import SpectraMap from './components/map/SpectraMap'
import SpectraTable from './components/table/SpectraTable'


const Spectra = () => {

  // Spectra state - change states between queries
  // isMap - change between map and table

  const [tableState, setTableState] = useState()
  const [isMap, setIsMap] = useState(false)

  const location = useLocation()

  useEffect(() => { // read csv data
    if (tableState !== 'loading') {
      if (tableState !== 'error') {
        if (location.state === 'map') {
          setIsMap(true)
        }
        setTableState(location.state)
      }
    } // eslint-disable-next-line
  }, [location.state]); // Run only when location.state changes

  const changeView = () => {
    console.log(tableState)
    if (tableState === 'table') {
      setIsMap(true)
      setTableState('map')
    } else {
      setIsMap(false)
      setTableState('table')
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
          <SpectraMap tableState = {tableState} setTableState = {setTableState}/>
          :
          <SpectraTable tableState = {tableState} setTableState = {setTableState}/>
        }
     </div>
    <Footer/>
    </div>
  )
}

export default Spectra