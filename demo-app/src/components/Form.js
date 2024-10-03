import { useState } from 'react'

export const Form =()=>{
  const [username, setUsername] = useState('')

  const submitForm = (event) => {
    event.preventDefault();
    alert(`Form value is ${username}`)
  }

  return(
    <form onSubmit={submitForm}>
      <h1>Registration Form</h1>
      <div>
        <label>Username: </label>
        <input type='text' value={username} onChange={(event)=> setUsername(event.target.value)} />
      </div>
      <div className='mt-5'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}
