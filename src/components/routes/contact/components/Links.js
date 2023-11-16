import React, {useState} from 'react'

import { contactLinks } from './contactLinks.js'

const Links = () => {

  return (
    <div className='linksContainer'>
        <p className='title'> Contacto</p>
        {contactLinks.slice(0, 2).map((element) => (
          <div key = {element.id} className='link indented' id={element.id} >
            <div className='icon'>{element.icon}</div>
            <p className='subtitle'>{element.description}</p>
          </div>
        ))}
        <p className='title'> Redes</p>
        {contactLinks.slice(2, 6).map((element) => (
          <div key = {element.id} className='link indented' id={element.id} >
            <div className='icon'>{element.icon}</div>
            <p className='subtitle'>{element.description}</p>
          </div>
        ))}
        <p className='title'> Visitanos</p>
        <div key = {contactLinks[6].id} className='link indented' id={contactLinks[6].id} >
            <div className='icon'>{contactLinks[6].icon}</div>
            <p className='subtitle'>{contactLinks[6].description}</p>
        </div>
    </div>
  )
}

export default Links