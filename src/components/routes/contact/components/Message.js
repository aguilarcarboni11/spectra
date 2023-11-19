import React, {useState} from 'react'

import { SendFill } from 'react-bootstrap-icons'

const Message = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    msg: null
  })

  const [error, setError] = useState(false)
  
  const submitMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') || null
    const email = formData.get('email') || null
    const msg = formData.get('message') || null
    if (name && email && msg) {
      setError(false)
      setForm({name, email, msg})
    } else {
      console.log('Form value cannot be empty')
      setError(true)
    }
  }
  console.log(form, error)

  return (
    <div className='formContainer'>
        <p className='title'>Tenés un mensaje más personal?</p>
        <form className = 'form' onSubmit={submitMessage}>
          <div className='divisor'>
            <p className='subtitle indented' >Nombre</p>
            <input className='input' name='name' type='text'></input>
          </div>
          <div className='divisor'>
            <p className='subtitle indented'>Correo</p>
            <input className='input' name='email' type='email'></input>
          </div>
          <div className='divisor' style={{}}>
            <p className='subtitle indented'>Mensaje</p>
            <div className='messageContainer'>
              <input className='input message' name='message' type='text'></input>
              <button type='submit' className='submit'>
                <SendFill style={{fontSize: '1vmax', color: 'white'}}/>
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Message