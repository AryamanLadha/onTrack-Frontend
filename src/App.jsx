import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterCourses from "./pages/EnterCourses";
import WhatYear from "./pages/WhatYear";

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/courses" element={<EnterCourses courses={courses}/>} />
          <Route exact path="/year" element={<WhatYear />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
