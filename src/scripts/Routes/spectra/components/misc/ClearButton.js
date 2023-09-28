import React from 'react'

const ClearButton = ({clearSelection, tableState}) => {

  return (
    <div>
      {tableState === 'formulario' || tableState === 'info' || tableState === 'wl' ? 
          <button className='clearButton' onClick = {clearSelection}> 
              <svg className = 'clearButtonSVG' xmlns="http://www.w3.org/2000/svg" width="2vw" height="3vh" fill="currentColor" viewBox="0 0 16 16" style={{margin: '0 0 0 -1vw'}}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg> 
          </button>:''}
    </div>
  )
}

export default ClearButton