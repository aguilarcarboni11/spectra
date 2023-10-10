import React from 'react'

const FilterButtons = ({isSelected, setSelection, filters, handleFilterClick, category, filter, index}) => {
  return (
    <div>
        <button onClick={handleFilterClick} id = {[category, filter]} key = {index}>
          <p className={filters[category].includes(filter) ? 'spectraFilterHoverTextActive':'spectraFilterHoverText'} id = {[category, filter]} key = {index}> {filter}</p>
        </button>
    </div>
  )
}

export default FilterButtons