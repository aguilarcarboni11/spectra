import React from 'react'

const EmployeeInfo = ({employee}) => {
  return (
    <div>
        <p className='employeeInfoTitle'>{employee.name} {employee.lastNames}</p>
        <p className='employeeInfoText'> {employee.position} </p>
        <p className='employeeInfoText'> {employee.info} </p>
        <img className='employeeInfoPhoto' src={require('../../../../assets/fotos/team/' + employee.path)} alt={employee.name}></img>
    </div>
  )
}

export default EmployeeInfo