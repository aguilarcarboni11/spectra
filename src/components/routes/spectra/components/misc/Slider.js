import React from 'react'

const Slider = ({isMap, onClick}) => {
  return (
    <div className='slider'>
        <div className='background'>
            <button className={isMap ? 'button':'button active'} onClick = {onClick}>
              <p className='subtitle'>Modo base de datos</p>
            </button>
            <button className={!isMap ? 'button':'button active'} onClick = {onClick}>
              <p className='subtitle'>Modo mapa</p>
            </button>
        </div>
    </div>
  )
}

export default Slider