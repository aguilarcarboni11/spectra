import React, {useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

import { spectraState } from '../../../../../misc/types/types.tsx'
import { useFetch } from '../../../../../hooks/useFetch.js';

const Map = ({center}) => {

    const coordsFetch = useFetch()
    const [coords, setCoords] = useState([])

    const myIcon = L.divIcon({
        className: 'marker',
        iconAnchor: [12,24],
        html: `<i class="bi bi-geo-alt-fill"></i>`
    });

    useEffect(() => {
        setTimeout(() => {
            coordsFetch.Post(`SELECT ST_X("Punto"), ST_Y("Punto") from "Formulario"`)
            if (coordsFetch.data.length > 0) {
                setCoords(coordsFetch.data)    
            }
          }, 100);
    },[coordsFetch.data.length]) // Only run once

    console.log(coords)

  return (
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
            {coords.map((coord, index) => (
                <Marker 
                    className='marker' 
                    position={[coord['st_y'], coord['st_x']]} 
                    icon={myIcon}
                    key={index}
                >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map