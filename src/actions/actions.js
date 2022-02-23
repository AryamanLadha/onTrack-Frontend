import axios from 'axios';

const config = {
  headers: {
    'Content-type': 'application-json',
  },
  baseURL: 'http://127.0.0.1:8000',
};
// When you make an API call, or anything asynchronous, the action creator returns a function

// API call to get list of all courses
export const getCourses = () => {
  // Return a function that takes in a dispatch object, which dispatches an action to the reducer
  return (dispatch) => {
    // 1. Make asynchronous call to database
    // 2. Dispatch the action after you have the result
    axios
      .get(`${config.baseURL}/api/courses`, {
        crossdomain: true,
      })
      .then((res) => {
        dispatch({
          type: 'GET_COURSES_SUCCESS',
          payload: { courses: res.data },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// API call to get eligible courses based on majors/prerequisites
export const getEligible = (studentData) => {
  return (dispatch) => {
    axios
      .get(`${config.baseURL}/api/courses/eligible`, {
        crossdomain: true,
        params: {
          studentData,
        },
      })
      .then((res) => {
        dispatch({
          type: 'GET_ELIGIBLE_SUCCESS',
          payload: { eligibleCourses: res.data },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Regular action creator returns an object, i.e an action

// Update store with array of selected majors when next/back button is pressed
export const setMajors = (newMajors) => {
  return {
    type: 'SET_MAJORS',
    payload: { newMajors },
  };
};

// Update store with array of selected minors when next/back button is pressed
export const setMinors = (newMinors) => {
  return {
    type: 'SET_MINORS',
    payload: { newMinors },
  };
};

// API call to get list of major names
export const getMajors = () => {
  return (dispatch) => {
    axios
      .get(`${config.baseURL}/api/majors`, {
        crossdomain: true,
      })
      .then((res) => {
        dispatch({
          type: 'GET_MAJORS_SUCCESS',
          payload: { allMajors: res.data },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Update store with selected start quarter when next/back button is pressed
export const setStartQtr = (newStartQtr) => {
  return {
    type: 'SET_START_QTR',
    payload: { newStartQtr },
  };
};

// Update store with selected end quarter when next/back button is pressed
export const setEndQtr = (newEndQtr) => {
  return {
    type: 'SET_END_QTR',
    payload: { newEndQtr },
  };
};

// Update store with selected grade (fresh/soph) when next/back button is pressed
export const setGradeEntered = (newGradeEntered) => {
  return {
    type: 'SET_GRADE_ENTERED',
    payload: { newGradeEntered },
  };
};

// Update store with array of courses taken when next/back button is pressed
export const setCourses = (newCourses) => {
  return {
    type: 'SET_COURSES',
    payload: { newCourses },
  };
};
