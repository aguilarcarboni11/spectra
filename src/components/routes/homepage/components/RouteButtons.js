import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { RouteTypes } from '../../../types/types.tsx'

import {AnimatePresence, motion, useAnimate} from 'framer-motion'

import { Table } from 'react-bootstrap-icons'
import { GeoAltFill } from 'react-bootstrap-icons'

const RouteButtons = () => {
    const [scope, animate] = useAnimate()
    const [active, setActive] = useState(null)

    console.log(active)

  return (
    <div className='buttonsContainer'>
        <div className='buttons'>
            <Link 
                className='homeButton' 
                id = {RouteTypes.TABLE} 
                to='/spectra' 
                onMouseEnter={(e) => setActive(e.target.id)} 
                onMouseLeave={() => setActive(null)} 
                state = {RouteTypes.TABLE}
            >
                <AnimatePresence>
                    {active == RouteTypes.TABLE && 
                        <motion.div 
                            style={{transformOrigin: 'right'}} 
                            className='sidebar'
                            initial={{x: 0}}
                            animate={{x:-70}}
                            exit={{x:0}}
                        >
                            <p className='subtitle'>Modo tabla</p>
                        </motion.div>
                    }
                </AnimatePresence>
                <Table className='icon' style={{fontSize: '2.5vmax', color: 'white'}} />
            </Link>
            <Link 
                className='homeButton' 
                id = {RouteTypes.MAP} 
                to='/spectra' 
                onMouseEnter={(e) => setActive(e.target.id)} 
                onMouseLeave={() => setActive(null)} 
                state = {RouteTypes.MAP}
            >
                <GeoAltFill className='icon'/>
                <AnimatePresence>
                    {active == RouteTypes.MAP && 
                        <motion.div 
                            layoutId={active}
                            style={{transformOrigin: 'right'}} 
                            className='sidebar'
                            initial={{x: 0}}
                            animate={{x:75}}
                            exit={{x:0}}
                        >
                            <p className='subtitle'>Modo mapa</p>
                        </motion.div>
                    }
                </AnimatePresence>
            </Link>
        </div>
    </div>
  )
}

export default RouteButtons