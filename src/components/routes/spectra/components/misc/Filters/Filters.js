import React, { useState } from 'react'

import FilterButton from './components/FilterButton'
import FilterMenu from './components/FilterMenu'

const Filters = ({data}) => {

  const [canShowFilters, setShowFilters] = useState(false)

  return (
    <div>
      <FilterButton setShowFilters={setShowFilters}/>
      <FilterMenu data = {data} canShowFilters={canShowFilters} setShowFilters={setShowFilters}/>
    </div>
  )
}

export default Filters