import React from 'react'

const Message = () => {
  return (
    <div className='messageContainer'>
        <p className='title'>Tenés un mensaje más personal?</p>
        <div>
            <p className='subtitle indented'>Nombre</p>
            <p className='subtitle indented'>Correo</p>
            <p className='subtitle indented'>Mensaje</p>
        </div>
    </div>
  )
}

export default Message