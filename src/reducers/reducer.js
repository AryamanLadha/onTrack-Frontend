import axios from "axios";
const initState = {
    major: 'History',
    courses: []
}

//Every action is an object of the following type:
// {
// type:
// payload:
// }


const getCourses = () => {
    axios
    .get("localhost:8000/api/courses", { crossdomain: true })
    .then((response) => {
        return response
    })
}

const reducer = (state = initState,action) => {
    if(action.type === 'CHANGE_MAJOR'){
        const newMajor = action.payload.newMajor
        return ({
            ...state,
            major: newMajor
        });
    }

    if(action.type === 'GET_ALL_COURSES'){
        const courses = getCourses()
        console.log('Courses are: ', courses);
        return ({
            ...state,
            courses: courses
        })
    }
    return state
}


export default reducer;