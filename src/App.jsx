import axios from "axios";
import GlobalStyle from "./styles/GlobalStyle";
import { connect } from 'react-redux'
import { useState } from 'react'
import {getCourses, changeMajor, getMajors} from './actions/actions.js'

function getTest() {
  axios
    .get("http://localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}

function App({major, changeMajor, courses, getCourses, allMajors, getMajors}) {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          {/* <button onClick={getTest}>Get Test</button> */}
          <div>
            {major}
          </div>
          <button onClick={() => changeMajor('Poetry')}>Change Major to Poetry</button>
          <div>Courses from the API are: {JSON.stringify(courses)}</div>
          <button onClick={() => getCourses()}>Get Courses</button>
          <div> All Majors from the API are: {JSON.stringify(allMajors)}</div>
          <button onClick={() => getMajors()}>Get All Majors</button>
        </header>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    major: state.major,
    courses: state.courses,
    allMajors: state.allMajors
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    changeMajor: (newMajor) => dispatch(changeMajor(newMajor)),
    getCourses:  () => dispatch(getCourses()),
    getMajors: () => dispatch(getMajors())
  });

}




export default connect(mapStateToProps, mapDispatchToProps)(App);
