import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { RouteTypes } from '../../../types/types.tsx'

import {AnimatePresence, motion} from 'framer-motion'

import { Table } from 'react-bootstrap-icons'
import { GeoAltFill } from 'react-bootstrap-icons'

const RouteButtons = () => {
    const [active, setActive] = useState(null)

    console.log(active)

  return (
    <div className='buttonsContainer'>
        <div className='buttons'>
            <Link 
                className='homeButton' 
                id = {RouteTypes.TABLE}
                state = {RouteTypes.TABLE}
                to='/spectra' 
                onMouseEnter={(e) => setActive(parseInt(e.target.id))} 
                onMouseLeave={() => setActive(null)} 
            >
                <AnimatePresence>
                    {active === RouteTypes.TABLE && 
                        <motion.div 
                            style={{originX: 1, padding: '1vh 2vw 1vh 1vw'}}
                            className='sidebar'
                            initial={{x: 0, width: 0}}
                            animate={{x:'-4vmax', width: 'fit-content'}}
                            exit={{x:0, width: 0}}
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
                state = {RouteTypes.MAP}
                to='/spectra' 
                onMouseEnter={(e) => setActive(parseInt(e.target.id))} 
                onMouseLeave={() => setActive(null)} 
            >
                <AnimatePresence>
                    {active === RouteTypes.MAP && 
                        <motion.div 
                            style={{originX: 1, padding: '1vh 1vw 1vh 2vw'}} 
                            className='sidebar'
                            initial={{x: 0, width: 0}}
                            animate={{x:'4vmax', width: 'fit-content'}}
                            exit={{x:0, width: 0}}
                        >
                            <p className='subtitle'>Modo mapa</p>
                        </motion.div>
                    }
                </AnimatePresence>
                <GeoAltFill className='icon' style={{fontSize: '2.5vmax', color: 'white'}} />
            </Link>
        </div>
    </div>
  )
}

export default RouteButtons