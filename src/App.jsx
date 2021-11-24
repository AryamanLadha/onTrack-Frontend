import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterCourses from "./pages/EnterCourses";
import Dropdown from "./components/Dropdown";

const courses = [
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
  "Psych 85",
];

const quartersData = [
  "Fall 2018",
  "Winter 2019",
  "Sping 2019",
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/courses" element={<EnterCourses courses={courses}/>} />
        </Routes>
      </Router>
      <Dropdown placeholder="Select a quarter" options={quartersData} />
    </>
  );
}

export default App;
