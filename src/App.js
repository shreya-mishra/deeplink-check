import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href= "com.rdsapp://deeplink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactsdasdasdas
        </a>
      </header>
    </div>
  );
}

export default App;
