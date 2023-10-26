import {useState, useEffect} from 'react'
import { useFetch } from '../../../../../hooks/useFetch'
import { spectraState } from '../../../../../misc/types/types.tsx'

function MapData({setState}) {

    const dataFetch = useFetch()
    const coordsFetch = useFetch()
    const [coords, setCoords] = useState([])
    var query = `SELECT * from "Formulario"`

    useEffect(() => {
        dataFetch.Post(query)
        if (dataFetch.isLoading) {
            setState(spectraState.LOADING)
        } if (dataFetch.isError) {
            setState(spectraState.ERROR)
        } else {
            setState(spectraState.HOME)
        } // eslint-disable-next-line
    },[query]) // Only run once

    useEffect(() => {
        setState(spectraState.LOADING)
        setTimeout(() => {
            coordsFetch.Post(`SELECT "ID",ST_X("Punto"), ST_Y("Punto") from "Formulario"`)
            if (coordsFetch.data.length > 0) {
                setCoords(coordsFetch.data)    
                setState(spectraState.HOME)
            }
          }, 250); // eslint-disable-next-line
    },[coordsFetch.data.length]) // Run until data gets filled up

    const data = dataFetch.data
    return {data, coords}
}

export default MapData