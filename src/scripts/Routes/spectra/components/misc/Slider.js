import React from 'react'

const Slider = ({isMap, onClick}) => {
  return (
    <div className='sliderContainer'>
        <div className='sliderBackground'>
            <button className={isMap ? 'sliderButton':'sliderButtonActive'} onClick = {onClick}>Modo base de datos</button>
            <button className={isMap ? 'sliderButtonActive':'sliderButton'} onClick = {onClick}>Modo mapa</button>
        </div>
    </div>
  )
}

export default Slider