import axios from "axios";
import GlobalStyle from "./styles/GlobalStyle";


function getTest() {
  axios
    .get("localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <button onClick={getTest}>Get Test</button>
        </header>
      </div>
    </>
  );
}

export default App;
