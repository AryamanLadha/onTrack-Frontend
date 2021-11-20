import axios from "axios";

// When you make an API call, or anything asynchronous, the action creator returns a function.
export const getCourses = () => {
    //Return a function that takes in a dispatch object, which dispatches an action to the reducer.
    return (
        (dispatch) => {
            //make asynchronous call to database
            //dispatch the action after you have the result.
            axios.get("http://localhost:8000/api/courses", { crossdomain: true })
            .then(res => {
                dispatch({ type: "GET_COURSES_SUCCESS", payload: {courses: res.data}})
            }).catch(error => {console.log(error)})
        }
    );
}

// Regular action creator returns an object, i.e an action
export const changeMajor = (newMajor) => {
    return {
        type: 'CHANGE_MAJOR',
        payload: {newMajor}
    }
}

export const getMajors = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/api/majors", { crossdomain: true })
        .then(res => {
            dispatch({type: 'GET_MAJORS_SUCCESS', payload: {allMajors: res.data}})
        }).catch(error => {console.log(error)})
    }
}