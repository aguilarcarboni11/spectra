import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'

import SpectraGraph from '../misc/SpectraGraph'
import ArrayCompare from '../../../../misc/ArrayCompare'
import { spectraState } from '../../../../misc/types/types.tsx'

const SpectraMap = ({state, setState, formulario, setFormulario}) => {

    const [center, setCenter] = useState([9.7489, -83.7535])
    const [currentHover, setHover] = useState([])
    const [columns, setColumns] = useState([])

    const {data, Post, isError, isLoading} = useFetch()
    const {data: coords, Post: coordsPost} = useFetch()

    const markerColor = '#FF914D'

    useEffect(() => {
        Post(`SELECT * from "Formulario"`)
        if (isLoading) {
            setState(spectraState.LOADING)
        } if (isError) {
            setState(spectraState.ERROR)
        }
        //coordsPost(`SELECT "Punto" from "Formulario"`)
        // eslint-disable-next-line
    },[]) // Only run once

    const handleHoverIn = (coord) => {
        setHover(coord)
    }

    const handleHoverOut = () => {
        setHover([])
    }

    const selectMarker = (marker) => {
        if (state === spectraState.HOME) {
            console.log(marker)
            Post(`SELECT * from "Formulario" WHERE "ID" : ${marker['ID']}`)
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
            Post(`SELECT * from "Formulario"`)
            setColumns([])
            setFormulario({})
        }
    }

  return (
    <div className='spectraMap'>
        <div>
            <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
        </div>
        <div className='mapAndInfoContainer'>
            <div className='mapContainer'>
                <Map height={'80vh'}
                    center = {center}
                    defaultZoom={7} minZoom={7}>
                    {data[0] ? data.map((element, index) => 
                        <Marker key = {index} width={'2vw'} anchor={[parseFloat(element.Latitud),parseFloat(element.Longitud)]} onMouseOver={() => handleHoverIn([element['Punto']])} onMouseOut={() => handleHoverOut()} onClick = {() => selectMarker(element)} color = {markerColor}></Marker>
                    ):''}
                    {coords[0] ? coords.map((coord, index) => 
                        <Overlay key = {index} className = {(ArrayCompare(currentHover, coord)) ? 'mapOverlay':'mapOverlay hidden'} anchor={coord} offset={[50,-5]} >
                            <p className='mapOverlayText'> {coord[0]} , {coord[1]} </p>
                        </Overlay>
                    ):''}
                    <ZoomControl style = {{top: '1vh', left: '1vw'}}/>
                </Map>
            </div>
            {state === spectraState.FORMULARIO ? <div className={state === spectraState.FORMULARIO ? 'mapInfoContainer': 'mapInfoContainer hidden'}> 
                {data[0] ? Object.keys(data[0]).map((element, index) => 
                    <p key = {index} style={{padding:'3vmax', color:'black'}} >{formulario[element]}</p>
                ):''}
                <SpectraGraph height={'40%'} width={'90%'}/>
            </div> : ''}
        </div>
     </div>
  )
}

export default SpectraMap
