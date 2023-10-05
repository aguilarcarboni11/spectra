import React from 'react'
import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {spectraState} from '../../misc/types/types.tsx'

import Slider from './components/misc/Slider'
import SpectraMap from './components/map/SpectraMap'
import SpectraTable from './components/table/SpectraTable'


const Spectra = () => {

  // Spectra state - change states between queries
  // isMap - change between map and table

  const [state, setState] = useState(null)
  const [isMap, setIsMap] = useState(null)

  const [formulario, setFormulario] = useState({})
  const [informacion, setInformacion] = useState({})
  const [registro, setRegistro] = useState({})

  const location = useLocation()

  useEffect(() => { // initialize Spectra
    if (state !== spectraState.LOADING) {
      if (state !== spectraState.ERROR) {
        if (location.state === 'map') {
          setIsMap(true)
        } else {
          setIsMap(false)
        }
        setState(spectraState.HOME)
      }
    } // eslint-disable-next-line
  }, [location.state]); // Run when Spectra gets mounted and when location.state changes

  const changeView = () => {
    if (isMap) {
      setIsMap(false)
    } else {
      setIsMap(true)
    }
  }

  return (
    <div className='baseContainer'> 
      <div className='spectraContainer'>
        <div className='spectraHeaderContainer'>
          <p className='title'>Firmas Espectrales</p>
          <Slider isMap = {isMap} onClick = {changeView}/>
        </div>
        {isMap ?
          <SpectraMap state = {state} setState = {setState} formulario = {formulario} setFormulario = {setFormulario} informacion = {informacion} setInformacion = {setInformacion}/>
          :
          <SpectraTable state = {state} setState = {setState} formulario = {formulario} setFormulario = {setFormulario} informacion = {informacion} setInformacion = {setInformacion}/>
        }
     </div>
    </div>
  )
}

export default Spectra