import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps'

import SpectraGraph from '../misc/SpectraGraph'
import ArrayCompare from '../../../../misc/ArrayCompare'

const SpectraMap = ({tableState, setTableState}) => {

    const [center, setCenter] = useState([9.7489, -83.7535])
    const [currentHover, setHover] = useState([])
    const [columns, setColumns] = useState([])

  const {data,Post} = useFetch()
  const {data: coords, Post: coordsPost} = useFetch()

  const markerColor = '#FF914D'

  useEffect(() => {
        Post(`SELECT * from "Formulario"`)
        coordsPost(`SELECT "Punto" from "Formulario"`)
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
          Post(`SELECT * from "Formulario", "Informacion" WHERE "ID" : ${marker['ID']}`) // changes query to specific ID
          setCenter(marker['Punto']) // sets map center
          setHover([])
          if (data[0]) {
            Object.keys(data[0]).forEach((element) => {
                setColumns(columns => [...columns, element])
            }, {});
            }
      }
      else {
          clearSelection()
      }
  }

  const clearSelection = () => {
    if (tableState === 'mapInfo') {
        setTableState('map')
        Post(`SELECT * from "Formulario"`)
        setColumns([])
    }
  }

  return (
    <div className='spectraMap'>
        <div>
            <p className='subtitle'> {tableState === 'mapInfo' ? `Información #${data['ID']}`:'De click en un punto para ver más informacion acerca del mismo'} </p>
        </div>
        <div className='mapAndInfoContainer'>
            <div className={'mapContainer'}>
            <Map className = {'map'} height={'40vmax'}
                center = {center}
                defaultZoom={7} minZoom={7}>
                {data.map((element, index) => 
                    <Marker key = {index} width={30} anchor={[parseFloat(element.Latitud),parseFloat(element.Longitud)]} onMouseOver={() => handleHoverIn([element['Punto']])} onMouseOut={() => handleHoverOut()} onClick = {() => selectMarker(element)} color = {markerColor}></Marker>
                )}
                {coords.map((coord, index) => 
                    <Overlay key = {index} className = {(ArrayCompare(currentHover, coord)) ? 'mapOverlay':'mapOverlay hidden'} anchor={coord} offset={[50,-5]} >
                        <p> {coord[0]} , {coord[1]} </p>
                    </Overlay>
                )}
                <ZoomControl style = {{top: '1vh', left: '1vw'}}/>
            </Map>
            </div>
            {tableState === 'mapInfo' ?
                <div className={tableState === 'mapInfo' ? 'mapInfoContainer': 'mapInfoContainer hidden'}> 
                    {columns.map((element, index) => 
                        <p key = {index} style={{padding:'3vmax', color:'black'}} >{data[0][element]}</p>
                    )}
                    <SpectraGraph height={'40%'} width={'90%'}/>
                </div>
            :''}
        </div>
     </div>
  )
}

export default SpectraMap
