import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnterCourses, WhatMajor, WhatYear, EligibleCourses } from './pages';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/" element={<WhatMajor majmin={'majors'} />} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/year" element={<WhatYear majmin={'year'} />} />
          <Route exact path="/courses" element={<EnterCourses />} />
          <Route exact path="/eligible" element={<EligibleCourses />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
