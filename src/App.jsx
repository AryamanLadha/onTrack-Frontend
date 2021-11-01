import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function getTest() {
  axios
    .get("http://localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}
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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getTest}>Get Test</button>
      </header>
    </div>
  );
}

export default App;
