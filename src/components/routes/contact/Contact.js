import React, {useState} from 'react'
import { ContactTypes } from '../../misc/types/types.tsx'

const Contact = () => {
  const orange = '#e77c39'
  const [active, setActive] = useState(null)

  function onMouseEnter(e) {
    setActive(e.target.id)
  }

  const contactLinks = [
    {
      id: ContactTypes.DIRECTIONS,
      name: 'Direcciones',
      description: `1.3 km al norte de la Embajada Estados Unidos Edificio Centro Nacional de Alta Tecnología, Pavas. Dale click aqui para visitarnos con Waze`,
      icon: <i class="bi bi-map-fill" style={{fontSize: '5vmax', color: orange}}></i>,
      url: 'https://waze.com/ul/hd1u0teqp3'
    },
    {
      id: ContactTypes.PHONE,
      name: 'Telefono',
      description: `Llamanos al 2519-5709`,
      icon: <i class="bi bi-phone-vibrate-fill" style={{fontSize: '6vmax', color: orange}}></i>,
      url: 'tel:+506 2519-5709'
    },
    {
      id: ContactTypes.EMAIL,
      name: 'Email',
      description: ` Envianos un correo a prias@cenat.ac.cr`,
      icon: <i class="bi bi-envelope-fill" style={{fontSize: '5vmax', color: orange}}></i>,
      url: 'mailto:prias@cenat.ac.cr'
    },
    {
      id: ContactTypes.COMMENTS,
      name: 'Comments',
      description: `Ayudanos a mejorar Spectra con tus sugerencias!`,
      icon: <i class="bi bi-chat-left-text-fill"  style={{fontSize: '5vmax', color: orange}}></i>,
      url: ''
    },
    {
      id: ContactTypes.WEBSITE,
      name: 'Website',
      description: `Revisa la pagina del PRIAS`,
      icon: <i class="bi bi-browser-chrome"  style={{fontSize: '5vmax', color: orange}}></i>,
      url: 'https://prias.cenat.ac.cr/es/'
    },
    {
      id: ContactTypes.SOCIALS,
      name: 'Socials',
      description:[
        <div style={{display:'flex', gap: '1vw'}}>
            <i class="bi bi-linkedin" style={{fontSize: '1vmax', color: 'black'}}></i>
            @laboratorio-prias
        </div>,
        <div style={{display:'flex', gap: '1vw'}}>
          <i class="bi bi-instagram" style={{fontSize: '1vmax', color: 'black'}}></i>
          @prias_cr
        </div>,
        <div style={{display:'flex', gap: '1vw'}}>
          <i class="bi bi-facebook" style={{fontSize: '1vmax', color: 'black'}}></i>
          @centro.nacional.de.alta.tecnologia
        </div>,
      ],
      icon: 
        <div style={{display: 'flex',gap:'1.5vw'}}>
          <i class="bi bi-linkedin" style={{fontSize: '4vmax', color: orange}}></i>
          <i class="bi bi-instagram" style={{fontSize: '4vmax', color: orange}}></i>
          <i class="bi bi-facebook" style={{fontSize: '4vmax', color: orange}}></i>
        </div>,
      url: ['https://www.linkedin.com/company/laboratorio-prias/', 'https://www.instagram.com/prias_cr/','https://www.facebook.com/centro.nacional.de.alta.tecnologia']
    }
  ]

  return (
    <div className='contactContainer'>
      {contactLinks.map((element) => (
        <div key = {element.id} className='divisor' id={element.id} onMouseEnter={onMouseEnter} onMouseLeave={() => setActive(null)}>
          <div className='icon'>{element.icon}</div>
          {element.id > ContactTypes.WEBSITE ? 
            element.url.map((url, index) => (
              <a className='link' href={element.url[index]} target="_blank" rel="noreferrer">
                <p className='subtitle'>{element.description[index]}</p>
              </a>
            ))
            :
            <a className='link' href={element.url} target="_blank" rel="noreferrer">
              <p className='subtitle'>{element.description}</p>
            </a>
          }
        </div>
      ))}
    </div>
  )
}

export default Contact