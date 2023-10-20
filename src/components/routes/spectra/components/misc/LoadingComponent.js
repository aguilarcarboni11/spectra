import React from 'react'

const TableLoadingComponent = () => {
  return (
    <div className='loadingContainer'>
        <div className='spinnerContainer'>
          <div className='spinner'></div>
        </div>
        <p className='title' style={{textAlign:'center', margin: 'auto'}}> Cargando Spectra... </p>
    </div>
  )
}

export default TableLoadingComponent