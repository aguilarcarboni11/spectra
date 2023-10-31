import React from 'react'

const ArrowButton = ({id, onClick}) => {
  return (
  <div className='arrowButtonContainer'>
    <button className='button' onClick={onClick} id = {id}>
        {id === 'left' ? 
            <i class="bi bi-caret-left-fill" style={{fontSize: '.5vmax'}}></i>
            :
            <i class="bi bi-caret-right-fill" style={{fontSize: '.5vmax'}}></i>}
    </button>
  </div>
  )
}

export default ArrowButton