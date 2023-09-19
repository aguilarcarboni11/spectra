import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import IntroButtonTooltip from './IntroButtonTooltip'

const HomeHeader = () => {

    const [activeType, setActiveType] = useState(undefined)

    const handleMouseIn = (e) => {
        if (e.target.id === 'map') {
        setActiveType(e.target.id)
        } else if (e.target.id === 'table') {
        setActiveType(e.target.id)
        }
    }

  return (
    <div className='introContainer'>
      <div className='introTitleContainer'>
        <p className='title'> ¿Qué es Spectra? </p>
      </div>
      <div className='introTextContainer'>
        <p className='subtitle'>
          Una firma espectral es la respuesta que tiene una cubierta, objeto 
          o superficie sobre la tierra, a la interacción recibida del sol o una 
          fuente de luz externa. Cada registro espectral es único para el objeto
            de estudio y estará influido por diferentes variantes externas e internas 
            al objeto.  La firma espectral puede medir el nivel de reflectancia, 
            absorbancia o transmitancia del objeto a la cantidad de luz que recibe.  
            Normalmente estos valores pueden estar reflejados en un gráfico lineal en 
            donde en el eje de las abscisas tendremos el valor de longitud de onda 
            expresado en nanómetro o micrómetros y en el eje de las ordenadas 
            visualizaremos el porcentaje de reflectancia, absorbancia o transmitancia 
            medida en el objeto.  A partir de ello, surge desde PRIAS la visión de 
            disponer de el primer catálogo de firmas espectrales de diferentes objetos en Costa Rica, con 
            un enfoque inicial en vegetación y cuerpos de agua.  
        </p>
        <p className='subtitle' style={{marginTop: '2vh'}}>
          En esta biblioteca tenés la opción de visualizar los datos que ha recolectado el
          PRIAS (o datos que vos hayás recolectado) como una base de datos o en un mapa. Presioná alguno de los dos botones siguientes para continuar:
        </p>
      </div>
      <div className='introButtonsContainer'>
        <div className='introButtonContainer'>
          <Link className='introButton' to='/spectra' id = 'table' state={'table'} onMouseOver={handleMouseIn} onMouseOut={() => setActiveType()}>
            <i class="bi bi-table" style={{fontSize: '2.5vmax', color: 'white', margin: '1.5vh 0 0 0'}} id='table'></i>
          </Link>
          <IntroButtonTooltip id = {'table'}/>
        </div>
        <div className='introButtonContainer'>
          <Link className='introButton' to='/spectra' id = 'map' state={'map'} onMouseOver={handleMouseIn} onMouseOut={() => setActiveType()}>
            <i class="bi bi-geo-alt-fill" style={{fontSize: '2.5vmax', color: 'white', margin: '1.5vh 0 0 0'}} id='map'></i>
            {activeType === 'map' ?<IntroButtonTooltip id = 'map'/>:''}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader