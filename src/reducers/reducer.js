
const initState = {
    majors: null,
    minors: null,
    courses: [],
    eligibleCourses: [],
    year: null,
    allMajors: []
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
    return state
}


export default reducer;