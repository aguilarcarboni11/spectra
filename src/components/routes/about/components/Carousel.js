import React from 'react'
import {useState} from 'react'

import {motion, LayoutGroup} from 'framer-motion'

import {TeamMembers} from './TeamMembers'

import ArrowButton from '../../../misc/ArrowButton'

const Carousel = ({selected, setSelected}) => {  

  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    if (index !== TeamMembers.length-4) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }
  
  return (
    <div className='carouselContainer'>
        {index > 0 && <ArrowButton id={'left'} onClick={prevSlide} height={5} width={5}/>}
        <div className='carousel'>
          <LayoutGroup>
            {TeamMembers.slice(index, index + 4).map((member) => (
              <motion.div
                key = {member.id}
                className={selected ? 'photoContainer noHover':'photoContainer'} 
                onClick={(() => setSelected(TeamMembers.find(e => e.id === member.id)))}
                initial = {{x: 100}}
                animate = {{x: 0}}
                exit={{x:-100}}
              >
                <img className='image' src={require('../../../../assets/fotos/team/' + member.path)} alt={member.name}></img>
                <div className='description'>
                  <p className='subtitle' style={{fontSize: '1.8vmax', fontWeight:'bolder'}}>{member.name} {member.lastNames}</p>
                  <p className='subtitle' style={{fontSize: '1vmax'}}>{member.position}</p>
                </div>
              </motion.div>
            ))}
          </LayoutGroup>
        </div>
        {index < TeamMembers.length-4 && <ArrowButton id={'right'} onClick={nextSlide} height={5} width={5}/>}
    </div>
  )
}

export default Carousel