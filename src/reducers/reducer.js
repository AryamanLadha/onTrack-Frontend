
const initState = {
    major: 'History',
    courses: 'N\\A',
    eligibleCourses: [],
    year: '2019',
    allMajors: "Not received yet"
}

const reducer = (state = initState,action) => {
    if(action.type === 'CHANGE_MAJOR'){
        const newMajor = action.payload.newMajor
        return ({
            ...state,
            major: newMajor
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