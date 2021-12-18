import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import { EnterCourses, WhatMajor, WhatYear, EligibleCourses } from './pages';
import GlobalStyle from './styles/GlobalStyle';

const courses = [
  'Psych 85',
  'Psych 85',
  'Psych 85',
  'Psych 85',
  'Psych 85',
  'Psych 85',
  'Psych 85',
  'Psych 85',
];

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<WhatMajor majmin={'majors'} />} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/year" element={<WhatYear majmin={'year'} />} />
          <Route
            exact
            path="/courses"
            element={<EnterCourses courses={courses} />}
          />
          <Route exact path="/eligible" element={<EligibleCourses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
