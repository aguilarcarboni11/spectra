import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../API/useFetch'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'

import SpectraGraph from '../misc/SpectraGraph'
import ArrayCompare from '../../../../misc/ArrayCompare'

const SpectraMap = ({tableState, setTableState}) => {

  const [center, setCenter] = useState([9.7489, -83.7535])
  const {data,Post} = useFetch()
  const [info, setInfo] = useState({})
  const [currentHover, setHover] = useState([])

  var coords = []
  const markerColor = '#FF914D'

  data.forEach(element => { // loop through data and get coords
      coords.push([element['Punto']])
  },[])

  useEffect(() => {
      Post(`SELECT * from "Formulario"`)
      console.log(data)
  },[])

  const handleHoverIn = (coord) => {
      setHover(coord)
  }

  const handleHoverOut = () => {
      setHover([])
  }

  const selectMarker = (marker) => {
      if (tableState === 'map') {
          setTableState('mapInfo')
          Post(`SELECT * from "Formulario" WHERE "ID" : ${marker['ID']}`) // changes query to specific ID
          setCenter(marker['Punto']) // sets map center
          setHover([])
      }
      else {
          clearSelection()
      }
  }

  const clearSelection = () => {
    if (tableState === 'mapInfo') {
        setTableState('map')
        Post(`SELECT * from "Formulario"`)
    }
  }

  return (
    <div className='spectraMap'>
        <div>
            <p className='subtitle'> {tableState === 'mapInfo' ? `Información #${info['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
        </div>
        <div className='mapAndInfoContainer'>
            <div className={'mapContainer'}>
            <Map className = {'map'} height={'40vmax'}
                center = {center}
                defaultZoom={7} minZoom={7}>
                {data.map((element, index) => 
                    <Marker key = {index} width={30} anchor={[parseFloat(element.Latitud),parseFloat(element.Longitud)]} onMouseOver={() => handleHoverIn([parseFloat(element.Latitud),parseFloat(element.Longitud)])} onMouseOut={() => handleHoverOut()} onClick = {() => selectMarker(element)} color = {markerColor}></Marker>
                )}
                {coords.map((coord, index) => 
                    <Overlay key = {index} className = {(ArrayCompare(currentHover, coord)) ? 'mapOverlay':'mapOverlayHidden'} anchor={coord} offset={[50,-5]} >
                        <p> {coord[0]} , {coord[1]} </p>
                    </Overlay>
                )}
                <ZoomControl style = {{top: '1vmax', left: '1vmax'}}/>
            </Map>
            </div>
            {tableState === 'mapInfo' ?
                <div className={tableState === 'mapInfo' ? 'mapInfoContainer': 'mapInfoContainerHidden'}> 
                    <SpectraGraph height={'40%'} width={'90%'}/>
                </div>
            :''}
        </div>
     </div>
  )
}

export default SpectraMap
