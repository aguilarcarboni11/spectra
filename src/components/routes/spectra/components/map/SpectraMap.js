import React, {useEffect, useState} from 'react'
import { spectraState } from '../../../../misc/types/types.tsx'

import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { latLng } from 'leaflet'

import LoadingComponent from '../misc/LoadingComponent'
import MapData from './components/MapData.js'
import ClearButton from '../misc/ClearButton'

const SpectraMap = ({state, setState, formulario, setFormulario}) => {

    const [id, setID] = useState(null)
    const [isActive, setActive] = useState(false)
    const [center, setCenter] = useState([9.7489, -83.7535])

    const {data, coords} = MapData(setState = {setState})

    const markerIcon = L.divIcon({ 
        className: 'marker',
        iconAnchor: [12,24],
        html: `<i class="bi bi-geo-alt-fill"></i>`
    });

    function Listen () {
        const map = useMapEvent('click', () => {
            console.log(center)
            map.setView(center, map.getZoom())
        })    
    }

    if (state === spectraState.LOADING) {
        return (
            <LoadingComponent />
        )
    } else {
        return (
            <div className='mapContainer'>
                <div className='header'>
                    <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
                    <ClearButton state={state}/>
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
                            <Listen />
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {coords.map((coord, index) => (
                                <Marker 
                                    className='marker' 
                                    position={[coord['st_y'], coord['st_x']]} 
                                    icon={markerIcon}
                                    key={index}
                                    eventHandlers={{
                                        click: () => {
                                            if (isActive) {
                                                setActive(false)
                                                setID(null)
                                            } else {
                                                setActive(true)
                                                setID(coord['ID'])
                                            }
                                        },
                                    }}
                                >
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                    {isActive && data.filter(data => data['ID'] === id).map((formulario)=> (
                        Object.keys(formulario).map((col) => (
                            <div >
                                {formulario[col]}
                            </div>
                        ))
                    ))}
                </div>
            </div>
        )
        
    }
}

export default SpectraMap
