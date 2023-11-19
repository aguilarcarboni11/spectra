import React from 'react'
import { FunnelFill } from 'react-bootstrap-icons'

const FilterButton = ({setShowFilters}) => {
  return (
    <button className='filterButton' onClick={() => setShowFilters(true)}>
        <FunnelFill className='svg' />
    </button>
  )
}

export default FilterButton