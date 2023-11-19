import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const FilterMenu = ({setShowFilters, canShowFilters}) => {
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
            </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
  )
}

export default FilterMenu