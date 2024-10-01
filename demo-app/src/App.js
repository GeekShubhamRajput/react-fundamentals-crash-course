import logo from './logo.svg';
import './App.css';
import Car from './components/Car'
import MyCar from './components/MyCar'
import {GreetUser} from './components/GreetUser'
import ActorRole from './components/ActorRole'

function App() {
  return (
    <div className="App">
      <h1>Hellow World</h1>
      <Car />
      <MyCar />
      <GreetUser username="Shubham" />
      <GreetUser username="Abhishek" />
      <ActorRole name='Clark' role='Spiderman'> This is child text </ActorRole>
      <ActorRole name='Henry' role='Batman'> <button>Action</button> </ActorRole>
    </div>
  );
}

export default App;
