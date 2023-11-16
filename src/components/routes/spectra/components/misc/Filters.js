import React from 'react'

const TableFilters = ({setShowFilters}) => {
  return (
    <div className={'filtersContainer'}>
          <div className='menu'>
          </div>
          <div className='background' onClick={() => setShowFilters(false)} >
          </div>
    </div>
  )
}

export default TableFilters