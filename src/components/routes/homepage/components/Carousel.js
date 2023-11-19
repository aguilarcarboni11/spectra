import React, {useState, useEffect} from 'react'
import ArrowButton from '../../../misc/ArrowButton'

import {motion, LayoutGroup, AnimatePresence} from "framer-motion"

const Carousel = () => {
  const [index,setIndex] = useState(0)

  const carouselPhotos = []

  for (var i = 1; i < 15; i++) {
    var string = i.toString()
    carouselPhotos.push({path: string.concat('.JPG'), id: i})
  }

  const nextSlide = () => {
    if (index !== carouselPhotos.length-2) {
      setIndex(index+1);
    } else {
      setIndex(0);
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      setIndex(carouselPhotos.length-2);
    } else {
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className='carouselContainer'>
      <div className='background'>
        <div className='photos'>
          <LayoutGroup >
          <AnimatePresence initial={false} >
          {carouselPhotos.slice(index, index + 2).map((img) => (
            <div className='photoContainer'>
              <motion.img
              key={img.id}             
              initial = {{x: 100}}
              animate = {{x: 0}}
              exit={{x:-100}}
              src={require("../../../../assets/fotos/fotos-prias/" + img.path)} 
              alt={'Diapositiva' + img.id} 
              className='image'/>
            </div>
          ))}
          </AnimatePresence>
          </LayoutGroup>
        </div>
      </div>
      <div className='textContainer'>
        <ArrowButton id = 'left' onClick={prevSlide}/>
        <p className='subtitle'> Biblioteca de fotos del PRIAS</p>
        <ArrowButton id = 'right' onClick={nextSlide} height={2} width={2}/>
      </div>
    </div>
  )
}

export default Carousel