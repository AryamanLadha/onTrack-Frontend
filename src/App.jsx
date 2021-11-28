import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnterCourses, WhatMajor, WhatYear } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/majors" element={<WhatMajor majmin={"majors"} />} />
          <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} />
          <Route exact path="/year" element={<WhatYear majmin={"year"} />} />
          <Route exact path="/courses" element={<EnterCourses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
