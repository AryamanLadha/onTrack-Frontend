import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterCourses from "./pages/EnterCourses";
import WhatMajor from "./pages/WhatMajor";

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
          <Route exact path="/major" element={<WhatMajor majmin = {"minors"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
