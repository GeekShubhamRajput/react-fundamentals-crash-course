import logo from './logo.svg';
import './App.css';
import { NameList } from './components/NameList';
import { Garage } from './components/Garage';

function App() {
  return (
    <div className="App">
      <NameList />
      <Garage />
    </div>
  );
}

export default App;
