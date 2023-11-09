import React from 'react'
import Table, {createTheme} from 'react-data-table-component'

import LoadingComponent from '../../misc/LoadingComponent'
import NoDataComponent from '../../misc/NoDataComponent'

const SpectraTable = ({data, isLoading, isError, selectRow}) => {

    function createColunns() {
        var columns = []
        if (data[0]) { // Create columns for data on each rerender -- add to state effect
            Object.keys(data[0]).forEach((element) => {
                columns.push({name: element, selector: (row => row[element])})
            }, {});
        }
        return columns
    }

    const columns = createColunns()
    if (isLoading) {
        return (
            <LoadingComponent />
        )
    } else if (isError) {
        return (
            <NoDataComponent isError = {isError}/>
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