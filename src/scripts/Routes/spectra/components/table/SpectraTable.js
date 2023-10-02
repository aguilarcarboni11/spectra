import React from 'react'
import { useEffect, useState } from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import Table, {createTheme} from 'react-data-table-component'

import SpectraGraph from '../misc/SpectraGraph'
import TableInfo from './TableInfo'
import TableFilters from './TableFilters'
import ClearButton from '../misc/ClearButton'
import TableLoadingComponent from './TableLoadingComponent'

const SpectraTable = ({tableState, setTableState}) => {

    var height


  const [formulario, setFormulario] = useState({})
  const [info, setInfo] = useState({})
  const {data,Post,isError,isLoading} = useFetch()

  var wavelength = []

    var column = {
        name: '',
        selector: '',
    }

    var columns = []

    useEffect(() => {
        Post(`SELECT * from "Formulario"`)
        if (isLoading) {
            setTableState('loading')
        } if (isError) {
            setTableState('error')
        } else {
            setTableState('table')
        } // eslint-disable-next-line
    },[isError]) // Run once and when isError changes
    
    const selectRows = (row) => {
        if (data !== undefined) {
            data.forEach((entry) => { // loop through data
                if (entry['ID'] === row['ID']) { // check match
                    if (tableState === 'table') { // check page state
                        Post(`SELECT "ID","NumeroPlanta","EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${entry['ID']}`)
                        setTableState('formulario')
                        setFormulario(entry)
                    } else if (tableState === 'formulario') {
                        setTableState('info')
                        setInfo(entry)
                        Post(`SELECT * from "Registro" WHERE "IDInformacion" : ${entry['ID']}`)
                    } else if (tableState === 'info') {
                        setTableState('wl')
                        Post(`SELECT * from "Registro" WHERE "CodigoRegistro" : ${entry['ID']}`)
                    }
                }
            })
        }
      }
      
    const clearSelection = () => {
        if (tableState === 'formulario') {
            setTableState('table')
            Post(`SELECT * from "Formulario"`)
            setFormulario({})
        } else if (tableState === 'info') {
            setTableState('formulario')
            Post(`SELECT * from "Informacion" WHERE "IDFormulario" : ${formulario['ID']}`) // query de informacion !!
            setInfo({})
        } else if (tableState === 'wl') {
            setTableState('info')
            Post(`SELECT * from "Registro" WHERE "IDInformacion" : ${info['ID']}`) // query de informacion !!
        }
    }

    if (data[0]) {
        Object.keys(data[0]).forEach((element) => {
            column.name = element;
            column.selector = row => row[element];
            columns.push(column)
            column = {}
        }, {});
    }

    switch(tableState) {
        case 'wl':
            height = '25vh'
            wavelength = (data[0]['Wavelength'])
            break;
        case 'info':
            height = '25vh'
            break;
        case 'formulario':
            height = '25vh'
            break;
        case 'table':
            height = '50vh' 
            break;
        case 'loading':
            height = '50vh'
            break;
        default:
            break;
    }
    
  return (
    <div className='tableAndInfoContainer'>
    <div className='tableHeader'>
        <p className='subtitle'> {tableState === 'formulario' ? `Formulario #${formulario['ID']}`:'De click en una fila para ver más informacion acerca del formulario'} </p>  {/* Pasar a component */}
        <ClearButton clearSelection={clearSelection} tableState={tableState}/>
    </div>
    <TableFilters tableState={tableState}/>
    <div className={tableState === 'formulario' ? 'tableInfoContainer':'tableInfoContainer hidden'}>
        <TableInfo info = {formulario}/>
    </div>
    <div className={tableState === 'info' ? 'tableInfoContainer':'tableInfoContainer hidden'}>
        <TableInfo info = {formulario}/>
        <TableInfo info = {info}/>
    </div>
    <div className={tableState === 'wl' ? 'tableInfoContainer':'tableInfoContainer hidden'}>
        <TableInfo info = {formulario}/>
        <TableInfo info = {info}/>
        <div className={tableState === 'wl' ? 'tableGraphContainer':'tableGraphContainer hidden'}>
            <SpectraGraph height={"100%"} width={"100%"} wavelength = {wavelength}/>
        </div>
    </div>
    <Table data = {data} columns = {columns} theme="spectra" 
        customStyles = {customStyles} 
        fixedHeader fixedHeaderScrollHeight={height} onRowClicked={selectRows}
        noDataComponent = {isError ? 'Error':'No data'}
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