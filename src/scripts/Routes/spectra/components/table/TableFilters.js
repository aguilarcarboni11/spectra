import React from 'react'

const TableFilters = ({tableState, changeQuery}) => {
  return (
    <div className={tableState === 'formulario' || tableState === 'info' ? 'spectraFilterAndTextContainerHidden':'spectraFilterAndTextContainer'}>
        <div className='spectraFilterBlock'>
        <button className='spectraFilterContainer' onClick={() => changeQuery(`SELECT * from "Formulario" WHERE "ID" : ${38}`)}>
            <p className='spectraFilterTitle'>Filtrar</p>
        </button>
        <button className='spectraFilterContainer' onClick={() => changeQuery('SELECT * from "Formulario"')}>
            <p className='spectraFilterTitle'>Volver</p>
        </button>
        </div>
    </div>
  )
}

export default TableFilters