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

function App({major, changeMajor}) {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <button onClick={getTest}>Get Test</button>
          <div>{major}</div>
          <button onClick={() => changeMajor('Poetry')}>Change Major to Poetry</button>
        </header>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return ({
    major: state.major
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    changeMajor: (newMajor) => dispatch({type: 'CHANGE_MAJOR', payload:{newMajor}})
  });

}




export default connect(mapStateToProps, mapDispatchToProps)(App);
