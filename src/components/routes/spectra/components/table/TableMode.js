import React, { useState } from 'react'

import { useFetch } from '../../../../hooks/useFetch'
import { spectraState } from '../../../../types/types.tsx'

import TableInfo from './components/TableInfo'
import SpectraTable from './components/SpectraTable'
import SpectraGraph from '../misc/Graph'
import Filters from '../misc/Filters'
import LocationHandler from '../misc/LocationHandler'

import { FunnelFill } from 'react-bootstrap-icons'

const TableMode = ({state, setState, cache, setCache}) => {

    var height
    var wavelength // pass down

    const [showFilters, setShowFilters] = useState(false)

    const[query, setQuery] = useState(`SELECT * from "Formulario"`)
    const {data,isError,isLoading} = useFetch(query)

    const selectRow = (row) => { // add row functionality
        var selected = {}
        if (data.length > 0) {
            selected = data.find((entry) => entry['ID'] === row['ID'])
            switch(state) {
                case spectraState.HOME:
                    setQuery(`SELECT "ID","NumeroPlanta","EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${selected['ID']}`)
                    setCache({...cache,formulario: selected})
                    break;
                case spectraState.FORMULARIO:
                    setQuery(`SELECT * from "Registro" WHERE "IDInformacion" : ${selected['ID']}`)
                    setCache({...cache,informacion: selected})
                    break;
                case spectraState.INFORMACION:
                    setQuery(`SELECT * from "Registro" WHERE "CodigoRegistro" : ${selected['ID']}`)
                    setCache({...cache,registro: selected})
                    break;
                default:
                    break;
            }
            if (state < spectraState.REGISTRO) {
                setState(state+1)
            }
        }
    }

    const goBack = () => {
        switch(state) {
            case spectraState.FORMULARIO:
                setQuery(`SELECT * from "Formulario"`)
                setCache({...cache,formulario: null})
                break;
            case spectraState.INFORMACION:
                setQuery(`SELECT "ID", "NumeroPlanta", "EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${cache.formulario['ID']}`)
                setCache({...cache,informacion: null})
                break;
            case spectraState.REGISTRO:
                setQuery(`SELECT * from "Registro" WHERE "IDInformacion" : ${cache.informacion['ID']}`)
                setCache({...cache,registro: null})
                break;
            default:
                break;
        }
        if (state > spectraState.HOME) {
            setState(state-1)
        }
    }

    function calculateTableHeight(state) {
        switch(state) {
            case spectraState.HOME:
                height = '40vh'
                break;
            case spectraState.FORMULARIO:
            case spectraState.INFORMACION: 
                height = '25vh'
                break;
            case spectraState.REGISTRO:
                height = '25vh'
                wavelength = (data[0]['Wavelength']) // ?
                break;
            default:
                break;
        }
        return height;
    }

    height = calculateTableHeight(state)

    return (
        <div className='tableContainer'>
            <div className='header'>
                <LocationHandler state={state} cache={cache} goBack = {goBack} setQuery={setQuery} setCache={setCache} setState={setState}/>
                <button className='filterButton' onClick={() => setShowFilters(true)}>
                    <FunnelFill className='svg' />
                </button>
                {showFilters && <Filters setShowFilters={setShowFilters}/>}
            </div>
            <div className={state === spectraState.FORMULARIO && cache.formulario !== null? 'infoContainer':'infoContainer hidden'}> {/* Elegant solution for adding boxes? Inline switch  */}
                <TableInfo info = {cache.formulario}/>
            </div>
            <div className={state === spectraState.INFORMACION && cache.informacion !== null ? 'infoContainer':'infoContainer hidden'}>
                <TableInfo info = {cache.formulario}/>
                <TableInfo info = {cache.informacion}/>
            </div>
            <div className={state === spectraState.REGISTRO ? 'infoContainer':'infoContainer hidden'}>
                <TableInfo info = {cache.formulario}/> 
                <TableInfo info = {cache.informacion}/>
                <div className={state === spectraState.REGISTRO ? 'tableGraphContainer':'tableGraphContainer hidden'}>
                    <SpectraGraph height={"100%"} width={"100%"} wavelength = {wavelength}/>
                </div>
            </div>
            <SpectraTable data = {data} isLoading = {isLoading} isError = {isError} selectRow={selectRow} height={height}/>
        </div>
    )
}

export default TableMode