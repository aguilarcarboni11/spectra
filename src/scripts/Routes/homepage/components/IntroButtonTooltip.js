import React from 'react'

const IntroButtonTooltip = ({id}) => {
  return (
    <div className='introButtonTooltip' id = {id}>      
      <p className='tooltipText' id = {id}>{id === 'table' ? 'Modo tabla':'Modo mapa'}</p>
    </div>
  )
}

export default IntroButtonTooltip