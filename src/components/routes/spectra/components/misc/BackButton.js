import React from 'react'
import { spectraState } from '../../../../types/types.tsx'

import { FolderSymlinkFill } from 'react-bootstrap-icons'

const BackButton = ({state, goBack}) => {

  return (
    <div className='clearButton'>
      {state > spectraState.HOME && 
          <button className='button' onClick = {goBack}> 
            <FolderSymlinkFill className='svg' />
          </button>}
    </div>
  )
}

export default BackButton