import axios from "axios";
import GlobalStyle from "./styles/GlobalStyle";
import { connect } from 'react-redux'
import { useState } from 'react'


function getTest() {
  axios
    .get("localhost:8000/", { crossdomain: true })
    .then((response) => {
      console.log(response);
    });
}

function App({major, changeMajor, courses, getCourses}) {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <button onClick={getTest}>Get Test</button>
          <div>{major}</div>
          <button onClick={() => changeMajor('Poetry')}>Change Major to Poetry</button>
          <div>Courses from the API are: {courses}</div>
          <button onClick={() => getCourses()}>Get Courses</button>
        </header>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    major: state.major,
    courses: state.courses
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    changeMajor: (newMajor) => dispatch({type: 'CHANGE_MAJOR', payload:{newMajor}}),
    getCourses:  () => dispatch({type: 'GET_COURSES', payload:{}})
  });

}




export default connect(mapStateToProps, mapDispatchToProps)(App);
