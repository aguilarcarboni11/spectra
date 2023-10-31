import React from 'react'

const EmployeeInfo = ({employee, handleExit}) => {
  return (
    <div className='employeeInfo'>
        <div className='foreground' onClick={() => handleExit()}></div>
        <div className='content'>
          <p className='title'>{employee.name} {employee.lastNames}</p>
          <p className='subtitle'> {employee.position} </p>
          <div className='info'>
            <p className='subtitle'> {employee.info} </p>
            <img className='image' src={require('../../../../assets/fotos/team/' + employee.path)} alt={employee.name}></img>
          </div>
        </div>
    </div>
  )
}

export default EmployeeInfo