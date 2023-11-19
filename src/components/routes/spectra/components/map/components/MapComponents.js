import {RouteTypes} from '../../../../../types/types.tsx'

import L from 'leaflet'
import { Marker } from 'react-leaflet'

import LoadingComponent from '../../misc/LoadingComponent';
import NoDataComponent from '../../misc/NoDataComponent';

export const markerIcon = L.divIcon({ 
    className: 'marker',
    iconAnchor: [12,24],
    html: `<i class="bi bi-geo-alt-fill"></i>`
});

export const SpectraMarker = ({data, setQuery, isLoading, isError}) => {
    if (isLoading) {
        return (
            <LoadingComponent state = {RouteTypes.MAP}/>
        )
    } else if (isError) {
        return (
            <NoDataComponent isError={isError} />
        )
    }
    return (
        data.map((point, index) => (
            <Marker 
                className='marker' 
                position={[point['st_y'], point['st_x']]} 
                icon={markerIcon}
                key={index}
                eventHandlers={{
                    click: () => {
                        setQuery(`SELECT "ID","NombreComun",ST_X("Punto"), ST_Y("Punto") from "Formulario" WHERE "ID" : ${point['ID']}`)
                    },
                }}
            >
            </Marker>
        ))
    )
}