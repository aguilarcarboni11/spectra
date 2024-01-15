import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const EmployeeInfo = ({selected, setSelected}) => {
  function handleEmployeeClick() {
    document.body.classList.add("no-scroll")
    setSelected(null)
  }
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className='employeeInfo' 
          layoutId={selected.id}
          onClick={() => setSelected(null)}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <motion.div 
            className='content'
            initial={{scale:0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
          >
            <p className='title'>{selected.name} {selected.lastNames}</p>
            <p className='subtitle'> {selected.position} </p>
            <div className='info'>
              <p className='subtitle'> {selected.info} </p>
              <img className='image' src={require('../../../../assets/fotos/team/' + selected.path)} alt={selected.name}></img>
            </div>
          </motion.div>
          <button onClick={handleEmployeeClick}></button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EmployeeInfo