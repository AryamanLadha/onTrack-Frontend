import axios from "axios";
import { PageButton } from "./components";
import GlobalStyle from "./styles/GlobalStyle";


function getTest() {
  axios
    .get("http://localhost:8000/", { crossdomain: true })
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
          <PageButton text={"Next"} size={"long"}/>
        </header>
      </div>
    </>
  );
}

export default App;
