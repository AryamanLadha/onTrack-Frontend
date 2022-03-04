import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Confirmation, EnterCoursesByQuarter, WhatMajor, WhatYear, EligibleCourses, Profile } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/" element={<WhatMajor majmin={'majors'} />} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/year" element={<WhatYear majmin={"year"} />} />
          {/* <Route exact path="/courses" element={<EnterCourses courses={courses} />} /> */}
          <Route exact path="/courses" element={<EnterCoursesByQuarter />} />
          <Route exact path="/eligible" element={<EligibleCourses />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
