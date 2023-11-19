import React from 'react'
import RouteButtons from './RouteButtons.js'



const HomeHeader = () => {
  return (
    <div className='infoContainer'>
      <div className='text'>
        <p className='title'> ¿Qué es Spectra? </p>
        <p className='subtitle indented'>
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
        <p className='subtitle indented'>
          En esta biblioteca tenés la opción de visualizar los datos que ha recolectado el
          PRIAS (o datos que vos hayás recolectado) como una base de datos o en un mapa. Presioná alguno de los dos botones siguientes para continuar:
        </p>
      </div>
      <RouteButtons />
    </div>
  )
}

export default HomeHeader