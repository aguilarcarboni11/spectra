import Table, {createTheme} from 'react-data-table-component'
import { useEffect, useState } from 'react'

import ClearButton from './ClearButton'
import TableFilters from './TableFilters'
import TableInfo from './TableInfo'
import SpectraGraph from '../misc/SpectraGraph'

const DataTable = ({formulario, info, setFormulario, setInfo, height, tableState, setTableState}) => {

    var column = {
        name: '',
        selector: '',
    }

    var columns = []

    const [data, setData] = useState([])
    const [query, setQuery] = useState(`SELECT * from "Formulario"`)
  
    useEffect(() => {
        setQuery(query)
    },[query])
    
    const selectRows = (row) => {
        if (data !== undefined) {
            data.forEach((entry) => { // loop through data
                if (entry['ID'] === row['ID']) { // check match
                    if (tableState === 'home') { // check page state
                        setTableState('formulario')
                        setFormulario(entry)
                        setQuery(`SELECT * from "Formulario" WHERE "ID" : ${entry['ID']}`)
                    } else if (tableState === 'formulario') {
                        setTableState('planta')
                        setInfo(entry)
                        setQuery(`SELECT * from "Formulario" WHERE "ID" : ${50}`)
                    }
                }
            })
        }
      }
      
    const clearSelection = () => {
        if (tableState === 'formulario') {
            setTableState('home')
            setQuery(`SELECT * from "Formulario"`)
            setFormulario({})
        }
        if (tableState === 'planta') {
            setTableState('formulario')
            setQuery(`SELECT * from "Formulario" WHERE "ID" : ${formulario['ID']}`) // query de informacion !!
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

  return (
    <div style={{height:height, margin: '0 0 3vh 0'}}>
        {tableState === 'formulario' ? 
            <div className={tableState === 'formulario' ? 'tableInfoContainer':'tableInfoContainerHidden'}>
            <TableInfo info = {formulario}/>
            <SpectraGraph height={'93%'} width={'30%'}/>
            </div>:
        ''}
        <TableFilters tableState={tableState}/>
        <ClearButton clearSelection={clearSelection} tableState={tableState}/>
        <FetchingComponent setData={setData} query={query}/>
        <Table data = {data} columns = {columns} theme="spectra" 
            customStyles = {customStyles} 
            fixedHeader fixedHeaderScrollHeight={height} onRowClicked={selectRows}
            progressPending = {tableState === 'loading' ? true:false} progressComponent={'Cargando...'}>
        </Table>      
    </div>
  )
}

export default DataTable

const beige = '#fae7d4'
const orange = '#FF914D'
const black = '#231F20'
const aqua = '#00746C'
const white = '#000000'
const height = DataTable.height

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
            margin: '2vh 0 2vh 0',
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
            padding: '1vh 5vw 1vh 0.5vw',
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