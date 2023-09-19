import React from 'react'

const ArrowButton = ({id, onClick, height, width}) => {
  return (
  <div className='arrowButtonContainer' style={{height:`${height}vh`}}>
    <button className='arrowButton' onClick={onClick} id = {id}>
        {id === 'left' ? 
            <i class="bi bi-caret-left-fill" style={{fontSize: '1.2vmax'}}></i>
            :
            <i class="bi bi-caret-right-fill" style={{fontSize: '1.2vmax'}}></i>}
    </button>
  </div>
  )
}

export default ArrowButton