import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const FilterMenu = ({setShowFilters, canShowFilters, data}) => {

  var filters = {}
  var columns = []

  if (data[0]) { // Create columns for data on each rerender
      Object.keys(data[0]).forEach((element, index) => {
          columns.push(element)
      }, {});
  }

  var filters = columns.reduce((previous, value) => {
    return {...previous, [value]: []};
  }, {});

  data.forEach((entry) => {
    columns.forEach((col, count) => {
      filters[col].push(Object.values(entry)[count])
    })
  })

  console.log(filters)

  return (
    <AnimatePresence>
        {canShowFilters && (
        <motion.div 
            className='filtersContainer'
            initial = {{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={() => setShowFilters(false)}
        >
            <motion.div
            key = 'menu'
            className='menu'
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: 100 }}
            >
              <div>
              </div>
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
  )
}

export default FilterMenu