import React, {useState} from 'react'
import { ContactTypes } from '../../misc/types/types.tsx'

const Contact = () => {
  const orange = '#e77c39'
  const [active, setActive] = useState(null)

  function onMouseEnter(e) {
    setActive(e.target.id)
  }

  const iconSize = '2vmax'

  const contactLinks = [
    {
      id: ContactTypes.DIRECTIONS,
      name: 'Direcciones',
      description: `Ir con Waze`,
      icon: <i class="bi bi-map-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://waze.com/ul/hd1u0teqp3'
    },
    {
      id: ContactTypes.PHONE,
      name: 'Llamanos',
      description: `Llamanos al 2519-5709`,
      icon: <i class="bi bi-phone-vibrate-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'tel:+506 2519-5709'
    },
    {
      id: ContactTypes.EMAIL,
      name: 'Mandanos un correo',
      description: ` Envianos un correo a prias@cenat.ac.cr`,
      icon: <i class="bi bi-envelope-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'mailto:prias@cenat.ac.cr'
    },
    {
      id: ContactTypes.COMMENTS,
      name: 'Notas algo que se puede mejorar? Dejanos un comentario',
      description: `Ayudanos a mejorar Spectra con tus sugerencias!`,
      icon: <i class="bi bi-chat-left-text-fill"  style={{fontSize: iconSize, color: orange}}></i>,
      url: ''
    },
    {
      id: ContactTypes.WEBSITE,
      name: 'Echale un vistazo a nuestra pagina oficial',
      description: `Revisa la pagina del PRIAS`,
      icon: <i class="bi bi-browser-chrome"  style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://prias.cenat.ac.cr/es/'
    },
    {
      id: ContactTypes.LINKEDIN,
      name: '@laboratorio-prias',
      description:
        <div style={{display:'flex', gap: '1vw'}}>
            @laboratorio-prias
        </div>,
      icon: 
        <div style={{display: 'flex',gap:'1.5vw'}}>
          <i class="bi bi-linkedin" style={{fontSize: iconSize, color: orange}}></i>
        </div>,
      url: 'https://www.linkedin.com/company/laboratorio-prias/'
    }
  ]

  return (
    <div className='contactContainer'>
      <p className='title'> Contactanos</p>
      <div className='links'>
        {contactLinks.map((element, index) => (
          <div key = {element.id} className='link' id={element.id} onMouseEnter={onMouseEnter} onMouseLeave={() => setActive(null)}>
            <div className='icon'>{element.icon}</div>
            <p className='subtitle'>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact