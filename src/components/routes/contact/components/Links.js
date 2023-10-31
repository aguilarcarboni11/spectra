import React, {useState} from 'react'

import {ContactTypes} from '../../../misc/types/types.tsx'

const Links = () => {
    const orange = '#e77c39'
    const iconSize = '2vmax'
    const contactLinks = [
        {
          id: ContactTypes.PHONE,
          name: 'Telefono',
          description: `Llamanos!`,
          icon: <i class="bi bi-phone-vibrate-fill" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'tel:+506 2519-5709'
        },
        {
          id: ContactTypes.EMAIL,
          name: 'Correo',
          description: `Mandanos un correo!`,
          icon: <i class="bi bi-envelope-fill" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'mailto:prias@cenat.ac.cr'
        },
        {
          id: ContactTypes.WEBSITE,
          name: 'Website',
          description: `Entrá a la pagina del PRIAS`,
          icon: <i class="bi bi-browser-chrome"  style={{fontSize: iconSize, color: orange}}></i>,
          url: 'https://prias.cenat.ac.cr/es/'
        },
        {
          id: ContactTypes.LINKEDIN,
          name: 'LinkedIn',
          description: '@laboratorio-prias',
          icon: <i class="bi bi-linkedin" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'https://www.linkedin.com/company/laboratorio-prias/'
        },
        {
          id: ContactTypes.INSTAGRAM,
          name: 'Instagram',
          description: '@laboratorio-prias',
          icon: <i class="bi bi-instagram" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'https://www.linkedin.com/company/laboratorio-prias/'
        },
        {
          id: ContactTypes.FACEBOOK,
          name: 'Facebook',
          description: '@centro-nacional-alta-tecnologia',
          icon: <i class="bi bi-facebook" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'https://www.linkedin.com/company/laboratorio-prias/'
        },
        {
          id: ContactTypes.DIRECTIONS,
          name: 'Direcciones',
          description: `Ir con Waze`,
          icon: <i class="bi bi-map-fill" style={{fontSize: iconSize, color: orange}}></i>,
          url: 'https://waze.com/ul/hd1u0teqp3'
        },
      ]

    const [active, setActive] = useState(null)

      function onMouseEnter(e) {
        setActive(e.target.id)
      }

  return (
    <div className='links'>
        <p className='title'> Contacto</p>
        {contactLinks.slice(0, 2).map((element) => (
          <div key = {element.id} className='link indented' id={element.id} onMouseEnter={onMouseEnter} onMouseLeave={() => setActive(null)}>
            <div className='icon'>{element.icon}</div>
            <p className='subtitle'>{element.description}</p>
          </div>
        ))}
        <p className='title'> Redes</p>
        {contactLinks.slice(2, 6).map((element) => (
          <div key = {element.id} className='link indented' id={element.id} onMouseEnter={onMouseEnter} onMouseLeave={() => setActive(null)}>
            <div className='icon'>{element.icon}</div>
            <p className='subtitle'>{element.description}</p>
          </div>
        ))}
        <p className='title'> Visitanos</p>
        <div key = {contactLinks[6].id} className='link indented' id={contactLinks[6].id} onMouseEnter={onMouseEnter} onMouseLeave={() => setActive(null)}>
            <div className='icon'>{contactLinks[6].icon}</div>
            <p className='subtitle'>{contactLinks[6].description}</p>
        </div>
    </div>
  )
}

export default Links