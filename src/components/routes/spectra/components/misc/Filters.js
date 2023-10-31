import React from 'react'

const TableFilters = ({tableState, changeQuery}) => {
  return (
    <div className={tableState === 'formulario' || tableState === 'info' || tableState === 'wl' ? 'filtersContainer hidden':'filtersContainer'}>
        <div className='block'>
          <button className='filter' onClick={() => changeQuery(`SELECT * from "Formulario" WHERE "ID" : ${38}`)}>
              <p className='title'>Filtrar</p>
          </button>
          <button className='filter' onClick={() => changeQuery('SELECT * from "Formulario"')}>
              <p className='title'>Volver</p>
          </button>
        </div>
    </div>
  )
}

export default TableFilters