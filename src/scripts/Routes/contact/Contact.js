import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

const Contact = () => {
  const orange = '#e77c39'

  return (
    <div className='baseContainer'>
        <Header/>
        <div className='contactContainer'>
          <div className='contactDivisionContainer'>
            <i class="bi bi-map-fill" style={{fontSize: '5vmax', color: orange}}></i>
            <a className='contactText' href='https://waze.com/ul/hd1u0teqp3' target="_blank" rel="noreferrer">
              1.3 km al norte de la Embajada 
              Estados Unidos Edificio Centro Nacional de Alta Tecnología, Pavas </a>
          </div>
          <div className='contactDivisionContainer'>
            <i class="bi bi-phone-vibrate-fill" style={{fontSize: '6vmax', color: orange}}></i>
            <a className='contactText' href='tel:+506 2519-5709' target="_blank" rel="noreferrer"> +506 2519-5709 </a>
          </div>
          <div className='contactDivisionContainer'>
          <i class="bi bi-envelope-fill" style={{fontSize: '5vmax', color: orange}}></i>
            <a className='contactText' href='mailto:prias@cenat.ac.cr' target="_blank" rel="noreferrer"> prias@cenat.ac.cr </a>
          </div>
          <div className='contactDivisionContainer'>
            <i class="bi bi-chat-left-text-fill"  style={{fontSize: '5vmax', color: orange}}></i>
            <a className='contactText' href='https://prias.cenat.ac.cr/es/' target="_blank" rel="noreferrer"> Ayudenos a mejorar el sistema con sus sugerencias! </a>
          </div>
          <div className='contactDivisionContainer'>
            <i class="bi bi-browser-chrome"  style={{fontSize: '5vmax', color: orange}}></i>
            <a className='contactText' href='https://prias.cenat.ac.cr/es/' target="_blank" rel="noreferrer" style={{margin:'2.5vmax 0 0 0'}}> https://prias.cenat.ac.cr/es/ </a>
          </div>
          <div className='contactDivisionContainer'>
            <div className='contactLogosContainer'>
            <a className='socialMediaLink'href='https://www.linkedin.com/company/laboratorio-prias/' target="_blank" rel="noreferrer">
              <i class="bi bi-linkedin" style={{fontSize: '4vmax', color: orange}}></i>
            </a>
              <a className='socialMediaLink' href='https://www.instagram.com/prias_cr/' target="_blank" rel="noreferrer">
                <i class="bi bi-instagram" style={{fontSize: '4vmax', color: orange}}></i>
              </a>
              <a className='socialMediaLink'href='https://www.facebook.com/centro.nacional.de.alta.tecnologia' target="_blank" rel="noreferrer">
                <i class="bi bi-facebook" style={{fontSize: '4vmax', color: orange}}></i>
              </a>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact