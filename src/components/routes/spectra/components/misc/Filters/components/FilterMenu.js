import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const FilterMenu = ({setShowFilters, canShowFilters, data}) => {

  var categories = []
  var filters = {}

  const [filtersToShow, setFiltersToShow] = useState([])

  // Create categories for filters
  // Crear categorias para los filtros
  if (data[0]) { 
      Object.keys(data[0]).forEach((element, index) => {
          categories.push(element)
      }, {});
  }

  // Loop through categories and fill filters object with each filter group
  // 
  categories.forEach((category) => {
    var uniqueFilters = new Set(data.map(item => item[category]))
    filters[category] = Array.from(uniqueFilters)
  })

  function openFilterCategory(index) {
    if (JSON.stringify(filtersToShow).includes(index) === false) {
      setFiltersToShow(filtersToShow => [...filtersToShow, index])
    } else {
      setFiltersToShow(filtersToShow.splice(index,1))
    }
  }

  console.log(filtersToShow)

  return (
    <AnimatePresence>
        {canShowFilters && (
          <motion.div className='filtersContainer' initial = {{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setShowFilters(false)}>
              <motion.div key = 'menu' className='menu' initial={{ x: 100 }} animate={{ x: -50 }} exit={{ x: 100 }} onClick={(e) => e.stopPropagation()}>
                  {Object.keys(filters).map((category, index) => (
                    <div key={category} className='group'>
                      <p className='title' onClick={() => openFilterCategory(index)}>{category}</p>
                      <AnimatePresence>
                        <div className='filters'>
                        {filters[category].map((filter) => (
                          <motion.div key={filter}  className='filter' animate={{y:-10}}>
                            {filtersToShow.includes(index) === true && <p className='subtitle'>{filter}</p>}
                          </motion.div>
                        ))}
                        </div>
                      </AnimatePresence>
                    </div>
                  ))}
              </motion.div>
          </motion.div>
          )}
    </AnimatePresence>
  )
}

export default FilterMenu