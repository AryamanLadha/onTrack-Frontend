import axios from "axios";
import SearchBar from "./components/SearchBar"

function getTest() {
  axios
    .get("localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getTest}>Get Test</button>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
