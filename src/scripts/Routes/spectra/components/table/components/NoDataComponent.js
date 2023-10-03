import React from 'react'

const NoDataComponent = ({isError}) => {
  return (
    <div className={isError ? 'errorComponent':'noDataComponent'}>
        <p className='title' style={{fontSize: '2.5vmax'}}>{isError ? 'Error':'No hay datos'}</p>
    </div>
  )
}

export default NoDataComponent