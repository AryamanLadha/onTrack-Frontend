import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import CourseCard from "./components/CourseCard";

function getTest() {
  axios
    .get("http://localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <button onClick={getTest}>Get Test</button>
          <CourseCard name={"CS32"} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;