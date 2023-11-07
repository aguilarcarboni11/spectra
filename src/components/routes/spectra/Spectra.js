import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import { RouteTypes } from '../../misc/types/types.tsx'
import {spectraState} from '../../misc/types/types.tsx'

import Slider from './components/misc/Slider'
import SpectraMap from './components/map/SpectraMap'
import SpectraTable from './components/table/SpectraTable'

const Spectra = () => {

  const [state, setState] = useState(2)
  const [isMap, setIsMap] = useState(null)

  const [formulario, setFormulario] = useState({})
  const [informacion, setInformacion] = useState({})
  const [registro, setRegistro] = useState({})

  const location = useLocation()

  useEffect(() => { // initialize Spectra
      changeView(location.state === RouteTypes.TABLE)
  }, [location.state]); // Run when Spectra gets mounted and when location.state changes -- should only change at home

 function changeView (table) {
    if (table) {
      setIsMap(false)
    } else {
      setIsMap(true)
    }
  }

  return (
    <div className='spectraContainer'>
      <div className='header'>
        <p className='title'>Firmas Espectrales</p>
        <Slider isMap = {isMap} onClick = {() => changeView(isMap)}/>
      </div>
      {isMap && state < spectraState.INFORMACION ?
        <SpectraMap state = {state} setState = {setState} formulario = {formulario} setFormulario = {setFormulario} informacion = {informacion} setInformacion = {setInformacion}/>
        :
        <SpectraTable state = {state} setState = {setState} formulario = {formulario} setFormulario = {setFormulario} informacion = {informacion} setInformacion = {setInformacion}/>
      }
    </div>
  )
}

export default Spectra