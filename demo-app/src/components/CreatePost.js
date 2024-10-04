import {useState} from 'react'

export const CreatePost = () =>{
  const [userId, setUserId] = useState('')
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));    

  }

  return(
    <form onSubmit={submitHandler}>
      <div className="mt-5">
        <input type='text' placeholder='Enter User Id' value={userId} onChange={(e)=>{setUserId(e.target.value)}} />  
      </div>

      <div className="mt-5">
        <input type='text' placeholder='Enter Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />  
      </div>

      <div className="mt-5">
        <input type='text' placeholder='Enter Body' value={body} onChange={(e)=>{setBody(e.target.value)}} />  
      </div>

      <div className="mt-5">
        <button type='submit'> Submit </button>  
      </div>
    </form>
  )
}
