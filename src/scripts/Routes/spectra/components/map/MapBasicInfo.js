import React from 'react'

const MapBasicInfo = ({data}) => {
  return (
    <div className='mapInfoDivider'>
        {Object.entries(data[0]).slice(0,16).map((element, key) => (
          <div className='mapInfoSetContainer' key = {key}>
            <p className='mapInfoText' key = {key}>{element[0]}: {element[1]}</p>
          </div>
        ))}
    </div>
  )
}

export default MapBasicInfo