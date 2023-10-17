import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../hooks/useFetch'

import { spectraState } from '../../../../misc/types/types.tsx'

import SpectraGraph from '../misc/SpectraGraph'
import ClearButton from '../misc/ClearButton'
import Map from './components/Map';

const SpectraMap = ({state, setState, formulario, setFormulario}) => {

    const [center, setCenter] = useState([9.7489, -83.7535])
    const dataFetch = useFetch()

    useEffect(() => {
        dataFetch.Post(`SELECT * from "Formulario"`)
        if (dataFetch.isLoading) {
            setState(spectraState.LOADING)
        } if (dataFetch.isError) {
            setState(spectraState.ERROR)
        }        // eslint-disable-next-line
    },[]) // Only run once

    const clearSelection = () => {
        if (state === spectraState.FORMULARIO) {
            setState(spectraState.HOME)
            dataFetch.Post(`SELECT * from "Formulario"`)
            setFormulario(null)
        }
    }
    
  return (
    <div className='mapContainer'>
        <div className='header'>
            <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
            <ClearButton clearSelection={clearSelection} state={state}/>
        </div>
        <div className='mapAndInfo'>
            <Map center = {center} setCenter = {setCenter}/>
            {state === spectraState.FORMULARIO ? 
                <div className={state === spectraState.FORMULARIO ? 'info': 'info hidden'}> 
                    {dataFetch.data.length !== 0 ? Object.keys(dataFetch.data[0]).map((element, index) => 
                        <p key = {index} className='subtitle'>{formulario[element]}</p>
                    ):''}
                    <SpectraGraph height={'40%'} width={'90%'}/>
                </div> : ''
            }
        </div>
     </div>
  )
}

export default SpectraMap
