
const initState = {
    majors: null,
    minors: null,
    courses: [],
    eligibleCourses: [],
    year: null,
    allMajors: [],
    startQtr: null,
    endQtr: null,
}

const reducer = (state = initState,action) => {
    if(action.type === 'SET_MAJORS'){
        const newMajor = action.payload.newMajors
        return ({
            ...state,
            majors: newMajor
        });
    }

    if(action.type === 'SET_MINORS'){
        const newMinor = action.payload.newMinors
        return ({
            ...state,
            minors: newMinor
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

    return state
}


export default reducer;