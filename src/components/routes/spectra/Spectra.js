import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import { RouteTypes, spectraState } from '../../types/types.tsx'

import Slider from './components/misc/Slider'
import MapMode from './components/map/MapMode.js'
import TableMode from './components/table/TableMode.js'

const Spectra = () => {

  const [state, setState] = useState(spectraState.HOME)

  const [isMap, setIsMap] = useState(false)

  const [cache, setCache] = useState({
    formulario: null,
    informacion: null,
    registro: null
  })

  const location = useLocation()
  console.log(location.state)

  useEffect(() => { // initialize Spectra
      if (location.state === RouteTypes.TABLE) {
        setIsMap(false)
      } else {
        setIsMap(true)
      }
  }, [location.state]); // Run when Spectra gets mounted and when location.state changes -- should only change at home

  function changeView() {
    setIsMap(!isMap)
  }

  return (
    <div className='spectraContainer'>
      <div className='header'>
        <p className='title'>Firmas Espectrales</p>
        <Slider isMap = {isMap} changeView = {changeView}/>
      </div>
      {isMap && state < spectraState.INFORMACION ?
        <MapMode state = {state} setState = {setState} cache={cache} setCache={setCache}/> // pass info components outside
        :
        <TableMode state = {state} setState = {setState} cache = {cache} setCache = {setCache}/>
      }
    </div>
  )
}

export default Spectra