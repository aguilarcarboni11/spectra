import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import { spectraState } from '../../../../misc/types/types.tsx'

import SpectraGraph from '../misc/SpectraGraph'
import ArrayCompare from '../../../../misc/ArrayCompare'
import ClearButton from '../misc/ClearButton'

const SpectraMap = ({state, setState, formulario, setFormulario}) => {

    const [center, setCenter] = useState([9.7489, -83.7535])
    const [currentHover, setHover] = useState(null)

    const dataFetch = useFetch()
    const coordsFetch = useFetch()

    const markerColor = '#FF914D'

    useEffect(() => {
        dataFetch.Post(`SELECT * from "Formulario"`)
        if (dataFetch.isLoading) {
            setState(spectraState.LOADING)
        } if (dataFetch.isError) {
            setState(spectraState.ERROR)
        }
        setTimeout(() => {
            coordsFetch.Post(`SELECT ST_X("Punto"), ST_Y("Punto") from "Formulario"`)
          }, 100); // create boolean timer
        // eslint-disable-next-line
    },[]) // Only run once
    
    const handleHoverIn = (coord) => {
        setHover(coord)
    }

    const handleHoverOut = () => {
        setHover(null)
    }

    const selectMarker = (marker) => {
        if (state === spectraState.HOME) {
            dataFetch.Post(`SELECT * from "Formulario" WHERE "ID" : ${marker['ID']}`)
            setState(spectraState.FORMULARIO)
            setCenter(marker['Punto']) // sets map center
            setFormulario(marker)
        }
        else {
            clearSelection()
        }
    }

    const clearSelection = () => {
        if (state === spectraState.FORMULARIO) {
            setState(spectraState.HOME)
            dataFetch.Post(`SELECT * from "Formulario"`)
            setFormulario(null)
        }
    }

  return (
    <div className='mapContainer'>
        <div className='head'>
            <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
            <ClearButton clearSelection={clearSelection} state={state}/>
        </div>
        <div className='mapAndInfo'>
            <div className='map'>
                <Map
                    height={'100%'}
                    width={'100%'}
                    provider={osm}
                    center = {center}
                    defaultZoom={7} 
                    minZoom={7}>
                    {dataFetch.data.length !== 0 ? dataFetch.data.map((element, index) => 
                        <Marker key = {index} width={'2vw'} anchor={[parseFloat(element.Latitud),parseFloat(element.Longitud)]} onMouseOver={() => handleHoverIn([element['Punto']])} onMouseOut={() => handleHoverOut()} onClick = {() => selectMarker(element)} color = {markerColor}></Marker>
                    ):''}
                    {coordsFetch.data.length !== 0 ? coordsFetch.data.map((coord, index) => 
                        <Overlay key = {index} className = {(ArrayCompare(currentHover, coord)) ? 'overlay':'overlay hidden'} anchor={coord} offset={[50,-5]} >
                            <p className='subtitle'> {coord[0]} , {coord[1]} </p>
                        </Overlay>
                    ):''}
                    <ZoomControl style = {{top: '1vh', left: '1vw'}}/>
                </Map>
            </div>
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
