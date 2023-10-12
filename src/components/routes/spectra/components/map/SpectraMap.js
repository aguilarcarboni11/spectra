import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../hooks/useFetch'

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

import { spectraState } from '../../../../misc/types/types.tsx'

import SpectraGraph from '../misc/SpectraGraph'
import ArrayCompare from '../../../../misc/ArrayCompare'
import ClearButton from '../misc/ClearButton'

const SpectraMap = ({state, setState, formulario, setFormulario}) => {

    const icon = L.icon({ iconUrl: './assets/marker.png' });

    const [center, setCenter] = useState([9.7489, -83.7535])
    const [currentHover, setHover] = useState(null)

    const dataFetch = useFetch()
    const coordsFetch = useFetch()

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

    const myIcon = L.divIcon({
        className: 'marker',
        iconAnchor: [12,24],
        html: `<i class="bi bi-geo-alt-fill"></i>`
    });

  return (
    <div className='mapContainer'>
        <div className='header'>
            <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
            <ClearButton clearSelection={clearSelection} state={state}/>
        </div>
        <div className='mapAndInfo'>
            <div id='map'>
                <MapContainer 
                    center={center} 
                    zoom={8} 
                    minZoom={8}
                    scrollWheelZoom={true}
                    className='full-height-map'
                >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker className='marker' position={[9.9377, -84.1429]} icon={myIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <Marker className='marker' position={center} icon={myIcon}>
                        <Popup>
                            {center}
                        </Popup>
                    </Marker>
                </MapContainer>
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
