import React, { useState } from 'react'
import { useEffect } from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import Table, {createTheme} from 'react-data-table-component'
import { spectraState } from '../../../../misc/types/types.tsx'

import SpectraGraph from '../misc/SpectraGraph'
import TableInfo from './components/TableInfo'
import TableFilters from '../Filters'
import ClearButton from '../misc/ClearButton'
import TableLoadingComponent from '../misc/LoadingComponent'
import NoDataComponent from './components/NoDataComponent'

const SpectraTable = ({state, setState, formulario, setFormulario, informacion, setInformacion}) => {

    const {data,Post,isError,isLoading} = useFetch()
    var query = `SELECT * from "Formulario"`

    var height
    var wavelength // pass down
    
    var columns = []

    useEffect(() => {
        Post(query)
        if (isLoading) {
            setState(spectraState.LOADING)
        } if (isError) {
            setState(spectraState.ERROR)
        } else {
            setState(spectraState.HOME)
        } // eslint-disable-next-line
    },[query]) // Run when query changes

    if (data[0]) { // fill columns array
        Object.keys(data[0]).forEach((element) => {
            columns.push({name: element, selector: (row => row[element])})
        }, {});
    }

    const selectRows = (row) => {
        if (data.length > 0) {
            data.forEach((entry) => { // loop through data
                if (entry['ID'] === row['ID']) { // check matches
                    switch(state) {
                        case spectraState.HOME:
                            Post(`SELECT "ID","NumeroPlanta","EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${entry['ID']}`)
                            setState(spectraState.FORMULARIO)
                            setFormulario(entry)
                            break
                        case spectraState.FORMULARIO:
                            setState(spectraState.INFORMACION)
                            setInformacion(entry)
                            Post(`SELECT * from "Registro" WHERE "IDInformacion" : ${entry['ID']}`)
                            break;
                        case spectraState.INFORMACION:
                            setState(spectraState.REGISTRO)
                            Post(`SELECT * from "Registro" WHERE "CodigoRegistro" : ${entry['ID']}`)
                            break;
                        default:
                            break;
                    }
                }
            })
        }
    }

      
    const clearSelection = () => {
        switch(state) {
            case spectraState.FORMULARIO:
                setState(spectraState.HOME)
                Post(`SELECT * from "Formulario"`)
                setFormulario(null)
                break;
            case spectraState.INFORMACION:
                setState(spectraState.FORMULARIO)
                Post(`SELECT * from "Informacion" WHERE "IDFormulario" : ${formulario['ID']}`)
                setInformacion(null)
                break;
            case spectraState.REGISTRO:
                setState(spectraState.INFORMACION)
                Post(`SELECT * from "Registro" WHERE "IDInformacion" : ${informacion['ID']}`)
                break;
            default:
                break;
        }
    }

    switch(state) {
        case spectraState.LOADING:
        case spectraState.ERROR: 
        case spectraState.HOME:
            height = '45vh'
            break;
        case spectraState.FORMULARIO:
        case spectraState.INFORMACION: 
            height = '20vh'
            break;
        case spectraState.REGISTRO:
            height = '20vh'
            wavelength = (data[0]['Wavelength'])
            break;
        default:
            break;
    }
    
  return (
    <div className='tableContainer'>
        <div className='header'>
            <p className='subtitle'> {state === spectraState.FORMULARIO ? `Formulario #${formulario['ID']}`: 
                                        state === spectraState.INFORMACION ? `Formulario #${formulario['ID']} > Informacion #${informacion['ID']}`: 
                                            state === spectraState.REGISTRO ? `Formulario #${formulario['ID']} > Informacion #${informacion['ID']} > Registro #${data[0]['ID']}`:
                                                'De click en una fila para ver más informacion acerca del formulario'} 
            </p>
        <ClearButton clearSelection={clearSelection} state={state}/>
        </div>
        <TableFilters state={state}/>
        <div className={state === spectraState.FORMULARIO && formulario !== null? 'infoContainer':'infoContainer hidden'}> {/* Elegant solution for adding boxes? Inline switch */}
            <TableInfo info = {formulario}/>
        </div>
        <div className={state === spectraState.INFORMACION && informacion !== null ? 'infoContainer':'infoContainer hidden'}>
            <TableInfo info = {formulario}/>
            <TableInfo info = {informacion}/>
        </div>
        <div className={state === spectraState.REGISTRO ? 'infoContainer':'infoContainer hidden'}>
            <TableInfo info = {formulario}/>
            <TableInfo info = {informacion}/>
            <div className={state === spectraState.REGISTRO ? 'tableGraphContainer':'tableGraphContainer hidden'}>
                <SpectraGraph height={"100%"} width={"100%"} wavelength = {wavelength}/>
            </div>
        </div>
        <Table data = {data} columns = {columns} theme="spectra" 
            customStyles = {customStyles} 
            fixedHeader fixedHeaderScrollHeight={height} onRowClicked={selectRows}
            noDataComponent = {<NoDataComponent isError = {isError}/>}
            progressPending = {isLoading ? true:false} progressComponent={<TableLoadingComponent/>}>
        </Table>
    </div>
  )
}

export default SpectraTable

const beige = '#fae7d4'
const orange = '#FF914D'
const black = '#231F20'
const aqua = '#00746C'
const white = '#000000'
const height = SpectraTable.height

createTheme('spectra', {
    text: {
      primary: black,
      secondary: aqua,
    },
    background: {
      default: '#fff8f2',
    },
    context: {
      background: '#cb4b16',
      text: black,
    },
    divider: {
      default: 'rgba(0,0,0,0)',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  const customStyles = {
    responsiveWrapper: {
        style: {
            height: height,
            width: '95vw',
            overflowY: 'auto',
            overflowX: 'auto',
            padding: '0 1vh 1vw 0',
            margin: '2vh 0 4vh 0',
            '::-webkit-scrollbar': {
                backgroundColor: beige,
                borderRadius: '2vmax',
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor: orange,
                borderRadius: '2vmax',
            },
        }
    },
    tableWrapper: {
        style: {
        },
    },
    table: {
        style: {
            backgroundColor: white,
            height: height,
            fontFamily: 'Lato',
        },
    },
    rows: {
        style: {
            minHeight: '3vmax',
        },
    },
    headCells: {
        style: {
            borderBottomWidth: '2px',
			borderBottomColor: aqua,
			borderBottomStyle: 'solid',
            padding: '1vh 1vw 1vh 1vw',
            whiteSpace: 'pre-line',
            width: 'fit-content',
            fontSize: '1vmax',
            fontWeight: 'bolder',
        },
    },
    cells: {
        style: {
            borderBottomWidth: '1px',
			borderBottomColor: aqua,
			borderBottomStyle: 'solid',
            fontSize: '0.6vmax',
            padding: '0.5vmax',
        },
    },
    divider: {
        style: {
            display: 'none'
        },
    },
}