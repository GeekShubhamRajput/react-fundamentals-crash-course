import logo from './logo.svg';
import './App.css';
import './components/my-style.css'
import styles from './my-style.module.css'
import { MyStyle } from './components/MyStyle';

function App() {
  return (
    <div className="App">
      <MyStyle />
      <h4 className={styles.bigblue}>CSS Modules</h4>
    </div>
  );
}

export default App;
