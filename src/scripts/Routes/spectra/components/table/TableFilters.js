import React from 'react'

const TableFilters = ({tableState, changeQuery}) => {
  return (
    <div className={tableState === 'formulario' || tableState === 'info' || tableState === 'wl' ? 'filterAndTextContainer hidden':'filterAndTextContainer'}>
        <div className='filterBlock'>
        <button className='filterContainer' onClick={() => changeQuery(`SELECT * from "Formulario" WHERE "ID" : ${38}`)}>
            <p className='filterTitle'>Filtrar</p>
        </button>
        <button className='filterContainer' onClick={() => changeQuery('SELECT * from "Formulario"')}>
            <p className='filterTitle'>Volver</p>
        </button>
        </div>
    </div>
  )
}

export default TableFilters