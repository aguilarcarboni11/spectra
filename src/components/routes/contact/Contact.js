import React from 'react'

const Contact = () => {
  const orange = '#e77c39'

  return (
    <div className='contactContainer'>
      <div className='divisor'>
        <i class="bi bi-map-fill" style={{fontSize: '5vmax', color: orange}}></i>
        <a className='subtitle' href='https://waze.com/ul/hd1u0teqp3' target="_blank" rel="noreferrer">
          1.3 km al norte de la Embajada 
          Estados Unidos Edificio Centro Nacional de Alta Tecnología, Pavas </a>
      </div>
      <div className='divisor'>
        <i class="bi bi-phone-vibrate-fill" style={{fontSize: '6vmax', color: orange}}></i>
        <a className='subtitle' href='tel:+506 2519-5709' target="_blank" rel="noreferrer"> +506 2519-5709 </a>
      </div>
      <div className='divisor'>
      <i class="bi bi-envelope-fill" style={{fontSize: '5vmax', color: orange}}></i>
        <a className='subtitle' href='mailto:prias@cenat.ac.cr' target="_blank" rel="noreferrer"> prias@cenat.ac.cr </a>
      </div>
      <div className='divisor'>
        <i class="bi bi-chat-left-text-fill"  style={{fontSize: '5vmax', color: orange}}></i>
        <a className='subtitle' href='https://prias.cenat.ac.cr/es/' target="_blank" rel="noreferrer"> Ayudenos a mejorar el sistema con sus sugerencias! </a>
      </div>
      <div className='divisor'>
        <i class="bi bi-browser-chrome"  style={{fontSize: '5vmax', color: orange}}></i>
        <a className='subtitle' href='https://prias.cenat.ac.cr/es/' target="_blank" rel="noreferrer" style={{margin:'2.5vmax 0 0 0'}}> https://prias.cenat.ac.cr/es/ </a>
      </div>
      <div className='divisor'>
        <div className='logos'>
        <a className='link'href='https://www.linkedin.com/company/laboratorio-prias/' target="_blank" rel="noreferrer">
          <i class="bi bi-linkedin" style={{fontSize: '4vmax', color: orange}}></i>
        </a>
          <a className='link' href='https://www.instagram.com/prias_cr/' target="_blank" rel="noreferrer">
            <i class="bi bi-instagram" style={{fontSize: '4vmax', color: orange}}></i>
          </a>
          <a className='link'href='https://www.facebook.com/centro.nacional.de.alta.tecnologia' target="_blank" rel="noreferrer">
            <i class="bi bi-facebook" style={{fontSize: '4vmax', color: orange}}></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact