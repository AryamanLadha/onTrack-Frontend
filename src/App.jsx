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
        <button onClick={getTest}>Get Test</button>
      </header>
    </div>
  );
}

export default App;
