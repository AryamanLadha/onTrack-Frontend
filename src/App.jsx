import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Confirmation, EditProfile, EligibleCourses, EnterCoursesByQuarter, WhatMajor, WhatYear, Profile } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Default path goes to Login page */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/edit" element={<EditProfile />} />
          <Route exact path="/majors" element={<WhatMajor majmin={'majors'} />} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/year" element={<WhatYear majmin={"year"} />} />
          {/* <Route exact path="/courses" element={<EnterCourses courses={courses} />} /> */}
          <Route exact path="/courses" element={<EnterCoursesByQuarter />} />
          <Route exact path="/confirm" element={<Confirmation />} />
          <Route exact path="/eligible" element={<EligibleCourses />} />
          <Route exact path="/done" element={<Confirmation />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/edit" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
