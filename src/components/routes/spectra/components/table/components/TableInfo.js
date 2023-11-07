import React from 'react'

const TableInfo = ({info}) => {
  return (
    <div className='tableInfoDivider'>
      {info !== null ? Object.entries(info).map((element, index) => (
        <p className='tableInfoText' key = {index} >{element[0]}: {element[1]}</p>
      )): ''}
    </div>
  )
}

export default TableInfo