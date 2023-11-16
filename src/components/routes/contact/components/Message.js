import React, {useState} from 'react'

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
    <div className='messageContainer'>
        <p className='title'>Tenés un mensaje más personal?</p>
        <form onSubmit={submitMessage}>
          <div className='divisor'>
            <p className='subtitle indented' >Nombre</p>
            <input className='input' name='name' type='text'></input>
          </div>
          <div className='divisor'>
            <p className='subtitle indented'>Correo</p>
            <input className='input' name='email' type='email'></input>
          </div>
          <div className='divisor' style={{alignItems: 'start'}}>
            <p className='subtitle indented'>Mensaje</p>
            <input className='input message' name='message' type='text'></input>
          </div>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Message