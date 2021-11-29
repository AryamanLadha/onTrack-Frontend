
const initState = {
    majors: null,
    minors: null,
    courses: [],
    eligibleCourses: [],
    year: null,
    allMajors: [],
    startQtr: null,
    endQtr: null,
    gradeEntered: null,
}

const reducer = (state = initState,action) => {
    if(action.type === 'SET_MAJORS'){
        return ({
            ...state,
            majors: action.payload.newMajors
        });
    }

    if(action.type === 'SET_MINORS'){
        return ({
            ...state,
            minors: action.payload.newMinors
        });
    }

    if(action.type === 'GET_COURSES_SUCCESS'){
        return ({
            ...state,
            courses: action.payload.courses
        })
    }

    if(action.type === 'GET_MAJORS_SUCCESS'){
        return ({
            ...state,
            allMajors: action.payload.allMajors
        });
    }

    if(action.type === 'SET_START_QTR') {
        return ({
            ...state,
            startQtr: action.payload.newStartQtr
        });
    }

    if(action.type === 'SET_END_QTR') {
        return ({
            ...state,
            endQtr: action.payload.newEndQtr
        });
    }

    if(action.type === 'SET_GRADE_ENTERED') {
        return({
            ...state,
            gradeEntered: action.payload.newGradeEntered
        })
    }

    return state
}


export default reducer;