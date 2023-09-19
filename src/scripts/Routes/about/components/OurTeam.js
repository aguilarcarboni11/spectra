import React from 'react'
import ArrowButton from '../../../misc/ArrowButton'
import {useState} from 'react'
import EmployeeInfo from './EmployeeInfo'

const ourTeam = [
  {name: 'Cornelia', lastNames: 'Miller Granados', path: 'cornelia-miller.png',position:'Directora de laboratorio', key: 0, info: 'Lidera el enlace con pares científicos y supervisa la ejecución de la Biblioteca de Firmas Espectrales, colabora activamente en el muestreo de firmas de especies vegetales, minerales y cuerpos de agua; además de la generación de publicaciones derivadas.'},
  {name: 'Heileen', lastNames: 'Aguilar Arias', path: 'heileen-aguilar.png', position: 'Investigadora', key: 2, info: 'Coordinadora principal de la Biblioteca de Firmas Espectrales, lidera los proyectos que involucran el estudio de firmas espectrales asociadas al muestreo de especies vegetales y minerales en el levantamiento de información de campo, procesamiento, análisis de datos y generación de publicaciones derivadas. Colabora activamente en el muestreo de firmas espectrales en cuerpos de agua.'},
  {name: 'Iván', lastNames: 'Ávila Perez', path: 'ivan-avila.jpeg', position: 'Investigador', key: 3,  info: 'Lidera los proyectos que involucran el estudio de firmas espectrales asociados al muestreo en cuerpos de agua en el levantamiento de información de campo, procesamiento, análisis de datos y generación de publicaciones derivadas. Colabora activamente en el muestreo de firmas espectrales de especies vegetales y minerales.'},
  {name:'Stephanie', lastNames: 'Leitón', path: 'milagro-jimenez.jpeg', position:'Analista de Infraestructura', key: 4,  info: 'Coordina el desarrollo, mantenimiento y administración de la plataforma informática para el acceso abierto a los datos de la Biblioteca de Firmas Espectrales SPECTRA.'},
  {name: 'Iván', lastNames: 'Ávila Perez', path: 'ivan-avila.jpeg', position: 'Investigador', key: 3,  info: 'Lidera los proyectos que involucran el estudio de firmas espectrales asociados al muestreo en cuerpos de agua en el levantamiento de información de campo, procesamiento, análisis de datos y generación de publicaciones derivadas. Colabora activamente en el muestreo de firmas espectrales de especies vegetales y minerales.'},
  {name:'Stephanie', lastNames: 'Leitón', path: 'milagro-jimenez.jpeg', position:'Analista de Infraestructura', key: 4,  info: 'Coordina el desarrollo, mantenimiento y administración de la plataforma informática para el acceso abierto a los datos de la Biblioteca de Firmas Espectrales SPECTRA.'},
]

const OurTeam = () => {
  const [index, setIndex] = useState(0)
  const [canShowInfo, setShowInfo] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(undefined)

  const nextSlide = () => {
    if (index !== ourTeam.length-4) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index !== 0) {
      setIndex(index - 1)
    }
  }

  const onPhotoClick = (employee) => {
    if (canShowInfo === false) {
      setCurrentEmployee(employee)
      setShowInfo(true)
    }  else {
      setCurrentEmployee(undefined)
      setShowInfo(false)
    }
  }

  return (
    <div className='ourTeamContainer'>
      {canShowInfo ? 
        <div className='employeeInfoContainer'>
          <EmployeeInfo employee = {currentEmployee}/>
        </div>:''}
        {canShowInfo ? 
        <div className='employeeInfoForeground' onClick={() => onPhotoClick()}></div>:''}
        <div className='ourTeamPhotosContainer'>
          <div className='ourTeamArrowContainer'>
            {index > 0 && <ArrowButton id={'left'} onClick={prevSlide} height={5} width={5}/>}
          </div>
          {ourTeam.slice(index, index+4).map((employee, count) => (
            <div key={count} className='employeePhotoContainer' onClick = {() => onPhotoClick(employee)}>
              <img className='employeePhoto' src={require('../../../../assets/fotos/team/' + employee.path)} alt={employee.name}></img>
              <div className='employeeDescriptionContainer'>
                <p className='employeeText' style={{fontSize: '1.2vmax', fontWeight:'bolder'}}>{employee.name} {employee.lastNames}</p>
                <p className='employeeText' style={{fontSize: '1vmax'}}>{employee.position}</p>
              </div>
            </div>
          ))}
            <div className='ourTeamArrowContainer'>
            {index < ourTeam.length-4 && <ArrowButton id={'right'} onClick={nextSlide} height={5} width={5}/>}
            </div>
        </div>
    </div>
  )
}

export default OurTeam