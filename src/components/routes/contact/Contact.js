import React, {useState} from 'react'

import Links from './components/Links'
import Message from './components/Message'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <Links/>
      <Message />
    </div>
  )
}

export default Contact