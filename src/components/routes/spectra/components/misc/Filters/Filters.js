import React, { useState } from 'react'

import FilterButton from './components/FilterButton'
import FilterMenu from './components/FilterMenu'

const Filters = () => {

  const [canShowFilters, setShowFilters] = useState(false)

  return (
    <div>
      <FilterButton setShowFilters={setShowFilters}/>
      <FilterMenu canShowFilters={canShowFilters} setShowFilters={setShowFilters}/>
    </div>
  )
}

export default Filters