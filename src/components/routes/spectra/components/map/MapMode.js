import React, {useState} from 'react'

import { useFetch } from '../../../../hooks/useFetch.js'

import LocationHandler from '../misc/LocationHandler.js'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet'

import { SpectraMarker } from './components/MapComponents.js' 
import Filters from '../misc/Filters/Filters.js'
import { FunnelFill } from 'react-bootstrap-icons'

const MapMode = ({state, cache}) => {
    
    const [query, setQuery] = useState(`SELECT "ID","NombreComun",ST_X("Punto"), ST_Y("Punto") from "Formulario"`)
    const {data, isLoading, isError} = useFetch(query)

    const [showFilters, setShowFilters] = useState(false)

    const [center, setCenter] = useState([9.7489, -83.7535])

    function Listen () {
        const map = useMapEvent('click', () => {
            console.log(center)
            map.setView(center, map.getZoom() + 2)
        })    
    }

    return (
        <div className='mapContainer'>
            <div className='header'>
                <LocationHandler state={state} cache={cache}/>
                <button className='filterButton' onClick={() => setShowFilters(true)}>
                    <FunnelFill className='svg' />
                </button>
                {showFilters && <Filters setShowFilters={setShowFilters}/>}
            </div>
            <div className='mapAndInfo'>
                <div id='map'>
                    <MapContainer className='full-height-map'
                    center={center} zoom={8} minZoom={8}
                    scrollWheelZoom={true}>
                        <Listen />
                        <SpectraMarker data={data} setQuery={setQuery} isLoading={isLoading} isError={isError}/>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    </MapContainer>
                    
                </div>
            </div>
        </div>
    )
}

export default MapMode
