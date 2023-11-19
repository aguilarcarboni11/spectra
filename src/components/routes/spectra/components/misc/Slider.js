import React from 'react'
import { motion } from "framer-motion";
import { MapFill } from 'react-bootstrap-icons';

const Slider = ({isMap, changeView}) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  return (
    <div className='slider' data-isMap={isMap} onClick={changeView}>
        <motion.div className="button" layout transition={spring}>
          <MapFill className='icon'/>
        </motion.div>
    </div>
  )
}

export default Slider