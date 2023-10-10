import React from 'react'
import OurTeam from '../about/components/OurTeam'

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='info'>
        <p className='title'>¿Qué es el PRIAS?</p>
        <p className='subtitle indented'>
          Somos un laboratorio de Geomática con énfasis en la Observación de la Tierra. También somos enlace nacional para 
          misiones aerotransportadas de carácter científico. A través de técnicas de Observación de la Tierra, el Laboratorio PRIAS 
          realiza estudios cartográficos y ambientales para generar información relevante para los decisores y formuladores de 
          políticas públicas, tanto nacionales como internacionales.
        </p>
        <p className='title'> ¿Cuál es nuestra misión?</p>
        <p className='subtitle indented'>
          Somos un laboratorio de investigación geoespacial, conformado por un equipo especializado de profesionales que trabajan 
          con los más altos estándares científicos en observación de la tierra, articulados con la educación superior costarricense 
          y la cooperación internacional, en el marco de la innovación con los sectores público, privado y social.
        </p>
        <p className='subtitle indented'> 
          Nuestra meta es ser un centro científico autosustentable de alto impacto económico y social a nivel nacional e internacional que genere 
          conocimiento para fortalecer el desarrollo competitivo y el intercambio de conocimientos especializados al más alto nivel
          a través de la articulación intersectorial.
        </p>
      </div>
      <OurTeam/>
    </div>
  )
}

export default About