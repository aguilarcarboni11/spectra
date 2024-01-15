import React from 'react'
import Table, {createTheme} from 'react-data-table-component'

import { spectraState } from '../../../../../types/types.tsx'

import LoadingComponent from '../../misc/LoadingComponent'
import NoDataComponent from '../../misc/NoDataComponent'

const SpectraTable = ({state, data, isLoading, isError, selectRow, columns}) => {

    var height

    function calculateTableHeight(state) {
        switch(state) {
            case spectraState.HOME:
                height = '52.5vh'
                break;
            case spectraState.FORMULARIO:
            case spectraState.INFORMACION: 
                height = '25vh'
                break;
            case spectraState.REGISTRO:
                height = '25vh'
                break;
            default:
                break;
        }
        return height;
    }

    height = calculateTableHeight(state)
    
    if (isLoading) {
        return (
            <LoadingComponent />
        )
    } else if (isError) {
        return (
            <NoDataComponent isError = {isError}/> // fix
        )
    } else {
        return (
            <Table data = {data} columns = {columns} theme="spectra" 
                customStyles = {customStyles} 
                fixedHeader fixedHeaderScrollHeight={height} onRowClicked={selectRow}>
            </Table>
         )  
    }
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
            width: '100%',
            overflowY: 'scroll',
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