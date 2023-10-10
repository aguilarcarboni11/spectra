

const Maps = ({data, height, clearSelection, center, setCenter, tableState, setTableState}) => {

    var coords = []
    const markerColor = '#FF914D'

    const [currentHover, setHover] = useState([])

    data.forEach(element => { // loop through data and get coords
        coords.push([element['Punto']])
    },[])

    const handleHoverIn = (coord) => {
        setHover(coord)
    }

    const handleHoverOut = () => {
        setHover([])
    }

    const arraysEqual = (a, b) => {
        if (a.length !== b.length) {
            return false;
        } else {
            let result = false
            a.forEach((element, index) => {
                if (element !== b[index]) {
                    return false
                } else {
                    result = true;
                }
            })
            return result;
        }
    }  

    const selectMarker = (marker) => {
        if (tableState === 'home') {
            setTableState('mapInfo') // set selected to true
            //changeQuery(`SELECT * from "Formulario" WHERE "ID" : ${marker['ID']}`) // changes query to specific ID
            //setCenter([marker['Latitud'], marker['Longitud']]) // sets map center
            setHover([])
        }
        else {
            clearSelection()
        }
    }

  return (
    <div className={'mapContainer'}>
        <Map className = {'map'} height={'40vmax'}
            center = {center}
            defaultZoom={7} minZoom={7}>
            {data.map((element, index) => 
                <Marker key = {index} width={30} anchor={[parseFloat(element.Latitud),parseFloat(element.Longitud)]} onMouseOver={() => handleHoverIn([parseFloat(element.Latitud),parseFloat(element.Longitud)])} onMouseOut={() => handleHoverOut()} onClick = {() => selectMarker(element)} color = {markerColor}></Marker>
            )}
            {coords.map((coord, index) => 
                <Overlay key = {index} className = {(arraysEqual(currentHover, coord)) ? 'mapOverlay':'mapOverlayHidden'} anchor={coord} offset={[50,-5]} >
                    <p> {coord[0]} , {coord[1]} </p>
                </Overlay>
            )}
            <ZoomControl style = {{top: '1vmax', left: '1vmax'}}/>
        </Map>
    </div>
    )
}

export default Maps