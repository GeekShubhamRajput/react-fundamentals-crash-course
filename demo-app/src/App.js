import logo from './logo.svg';
import './App.css';
import NAMES from './components/data.json'
import {useState, useTransition} from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }

  const filteredNames = NAMES.filter(item =>{
    return item.first_name.includes(query) || item.last_name.includes(query)
  }) 

  return (
    <div className="App">
      <input type='text' value={inputValue} onChange={changeHandler} className='mt-5' />
      { isPending && <p>Updateing list...</p> }

      {
        filteredNames.map((item) => (
          <p key={item.id}> {item.first_name + ' ' + item.last_name} </p>  
        ))
      }
    </div>
  );
}

export default App;
