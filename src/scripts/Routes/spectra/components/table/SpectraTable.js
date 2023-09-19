import React from 'react'
import { useEffect, useState } from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import Table, {createTheme} from 'react-data-table-component'

import SpectraGraph from '../misc/SpectraGraph'
import TableInfo from './TableInfo'
import TableFilters from './TableFilters'
import ClearButton from '../misc/ClearButton'
import TableLoadingComponent from './TableLoadingComponent'



const SpectraTable = ({height, tableState, setTableState}) => {

  const [formulario, setFormulario] = useState({})
  const [info, setInfo] = useState({})

  var wavelength = []

    var column = {
        name: '',
        selector: '',
    }

    var columns = []

    const {data,Post} = useFetch()
  
    useEffect(() => {
        Post(`SELECT * from "Formulario"`)
    },[])
    
    const selectRows = (row) => {
        if (data !== undefined) {
            data.forEach((entry) => { // loop through data
                if (entry['ID'] === row['ID']) { // check match
                    if (tableState === 'home') { // check page state
                        Post(`SELECT "ID","NumeroPlanta","EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${entry['ID']}`)
                        setTableState('formulario')
                        setFormulario(entry)
                    } else if (tableState === 'formulario') {
                        setTableState('info')
                        setInfo(entry)
                        Post(`SELECT * from "Registro" WHERE "IDInformacion" : ${entry['ID']}`)
                    }
                }
            })
        }
      }
      
    const clearSelection = () => {
        if (tableState === 'formulario') {
            setTableState('home')
            Post(`SELECT * from "Formulario"`)
            setFormulario({})
        }
        if (tableState === 'info') {
            setTableState('formulario')
            Post(`SELECT * from "Informacion" WHERE "IDFormulario" : ${formulario['ID']}`) // query de informacion !!
            setInfo({})
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
        case 'info':
            wavelength = (data[0]['Wavelength'])
            height = '25vh'
            break;
        case 'formulario':
            height = '25vh'
            break;
        case 'home':
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
        <p className='subtitle'> {tableState === 'formulario' ? `Formulario #${formulario['ID']}`:'De click en una fila para ver más informacion acerca del formulario'} </p>
        <ClearButton clearSelection={clearSelection} tableState={tableState}/>
    </div>
    <TableFilters tableState={tableState}/>
    {tableState === 'formulario' ? 
        <div className={tableState === 'formulario' ? 'tableInfoContainer':'tableInfoContainerHidden'}>
            <TableInfo info = {formulario}/>
        </div>:
    ''}
    {tableState === 'info' ?  
        <div className={tableState === 'info' ? 'tableInfoContainer':'tableInfoContainerHidden'}>
            <TableInfo info = {formulario}/>
            <TableInfo info = {info}/>
            <div className='tableGraphContainer'>
                <SpectraGraph height={"100%"} width={"100%"} wavelength = {wavelength}/>
            </div>
        </div>:
    ''}
    <Table data = {data} columns = {columns} theme="spectra" 
        customStyles = {customStyles} 
        fixedHeader fixedHeaderScrollHeight={height} onRowClicked={selectRows}
        noDataComponent = 'No data'
        progressPending = {tableState === 'loading' ? true:false} progressComponent={<TableLoadingComponent/>}>
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