// Initial state of the store.
const initState = {
  majors: [],
  minors: [],
  courses: [],
  eligibleCourses: [],
  coursesTaken: [],
  year: null,
  allMajors: [],
  startQtr: null,
  endQtr: null,
  gradeEntered: null,
  data: null,
};

// Reducers to append action payloads to the current store.

const reducer = (state = initState, action) => {
  if (action.type === 'SET_MAJORS') {
    return {
      ...state,
      majors: action.payload.newMajors,
    };
  }

  if (action.type === 'SET_MINORS') {
    return {
      ...state,
      minors: action.payload.newMinors,
    };
  }

  if (action.type === 'GET_COURSES_SUCCESS') {
    return {
      ...state,
      courses: action.payload.courses,
    };
  }

  if (action.type === 'GET_MAJORS_SUCCESS') {
    return {
      ...state,
      allMajors: action.payload.allMajors,
    };
  }

  if (action.type === 'SET_START_QTR') {
    return {
      ...state,
      startQtr: action.payload.newStartQtr,
    };
  }

  if (action.type === 'SET_END_QTR') {
    return {
      ...state,
      endQtr: action.payload.newEndQtr,
    };
  }

  if (action.type === 'SET_GRADE_ENTERED') {
    return {
      ...state,
      gradeEntered: action.payload.newGradeEntered,
    };
  }

  if (action.type === 'SET_COURSES') {
    return {
      ...state,
      coursesTaken: action.payload.newCourses,
    };
  }

  if (action.type === 'GET_ELIGIBLE_SUCCESS') {
    return {
      ...state,
      eligibleCourses: action.payload.eligibleCourses,
    };
  }

  if (action.type === 'GET_DATA_SUCCESS') {
    return {
      ...state,
      data: action.payload.data,
    };
  }

  if (action.type === 'LOGOUT_SUCCESS') {
    console.log("works");
    return {
      ...state,
      data: action.payload.data,
    };
  }

  return state;
};

export default reducer;
