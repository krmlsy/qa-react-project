import logo from './logo.svg';
import './App.css';
import Trigger from './Trigger';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{"height" : "250px"}}/>

        <Trigger></Trigger>

      </header>
    </div>
  );
}

export default App;
