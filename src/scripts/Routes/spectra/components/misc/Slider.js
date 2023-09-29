import React from 'react'

const Slider = ({tableState, onClick}) => {
  return (
    <div className='sliderContainer'>
        <div className='sliderBackground'>
            <button className={tableState === 'map' ? 'sliderButton':'sliderButtonActive'} onClick = {onClick}>Modo base de datos</button>
            <button className={tableState === 'map' ? 'sliderButtonActive':'sliderButton'} onClick = {onClick}>Modo mapa</button>
        </div>
    </div>
  )
}

export default Slider