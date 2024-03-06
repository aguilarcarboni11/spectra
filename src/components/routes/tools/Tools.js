import React from 'react'

import {toolsList} from './components/toolsList.js'

const Tools = () => {
  return (
    <div style={{minHeight: '80vh'}}>
      {toolsList.slice(3,4).map((tool) => (
        <div>
          <p className='subtitle'>{tool.name}</p>
          <p className='subtitle'>{tool.description}</p>
          <p className='subtitle'>
            {tool.specs.map((spec) => (
              <div>
                {spec}
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Tools