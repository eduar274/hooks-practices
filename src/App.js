import logo from './logo.svg';
import './App.css';
import { MyFirstComponent } from './components/MyFirstComponent';
import { SecondComponent } from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hook useState</h2>
        <div>
          <hr />
          <MyFirstComponent />
          <hr />
          <SecondComponent />
        </div>
      </header>
    </div>
  );
}

export default App;