import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterCourses from "./pages/EnterCourses";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/courses" element={<EnterCourses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
